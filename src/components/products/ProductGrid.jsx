import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import { matchSorter } from 'match-sorter'
import './ProductGrid.css'

/**
 * Product Grid Component.
 * Controls product display according to
 * filter, sort method, search string given by user
 * 
 * Filters are mutually exclusive
 * 
 * props --
 * 1. products [Array of Objects]
 */
export default function ProductGrid({ products }){

    let filteredProducts = [].concat(products);

    // Retrieving state values
    let category = useSelector((state) => state.filter.category)
    let brandsId = useSelector((state) => state.filter.brandsId)
    let priceArray = useSelector((state) => state.filter.priceArray)
    let discountArray = useSelector((state) => state.filter.discountArray)
    let sortMethod = useSelector((state) => state.sort.sortBy)
    let searchString = useSelector((state) => state.filter.searchString)

    // Generate filteredproducts array
    if(category.length){

        filteredProducts = category.map(id => {
            return matchSorter(filteredProducts, id, {keys:[{threshold: matchSorter.rankings.STARTS_WITH, key: 'category'}]})
        }).flat();
    } 
    
    if(brandsId.length){

        filteredProducts = brandsId.map(id => {
            return matchSorter(filteredProducts, id, {keys:[{threshold: matchSorter.rankings.STARTS_WITH, key: 'brand'}]})
        }).flat();

    }
    
    if(priceArray.length){

        priceArray.map(price => {
            filteredProducts = (filteredProducts.filter(product => {
                let discountedPrice = Math.floor(product.price - product.price * (product.discount/100));
                return (discountedPrice >= price.lowerPrice && discountedPrice <= price.upperPrice)
            }))
        })

    } 
    
    if(discountArray.length){

        let minDiscount = Math.min(...discountArray.map(str => +str))
        filteredProducts = filteredProducts.filter(product => product.discount >= minDiscount)

    } 
    
    if(sortMethod){

        switch(sortMethod){
            case 'Price: low to high':
                filteredProducts.sort((a, b) => {
                    let discountedPriceA = Math.floor(a.price - a.price * (a.discount/100));
                    let discountedPriceB = Math.floor(b.price - b.price * (b.discount/100));

                    return discountedPriceA - discountedPriceB;
                });
                break;
            case 'Price: high to low':
                filteredProducts.sort((a, b) => {
                    let discountedPriceA = Math.floor(a.price - a.price * (a.discount/100));
                    let discountedPriceB = Math.floor(b.price - b.price * (b.discount/100));

                    return discountedPriceB - discountedPriceA;
                });
                break;
            case 'Customer Rating':
                filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            case 'Better discount':
                filteredProducts.sort((a, b) => b.discount - a.discount);
                break;
            case 'Recommended':
            case "What's new":
            case 'Popularity':
            default:
                

        }
    } 
    
    if(searchString){
        
        filteredProducts = filteredProducts.filter(product => {
            return (product.brand + product.title).toLowerCase().includes(searchString.toLowerCase())
        })
    }


    // Render filteredlist   
    if((category.length || brandsId.length || priceArray.length || discountArray.length || searchString) || sortMethod ){


        return (
            <div className="grid-wrapper">
                { filteredProducts.length ? 
                    filteredProducts.map(product => {
                        return <ProductCard product={product} key={product.id}/>
                    }) 
                    : <h2>No products in this category</h2>
                }
            </div>
        )
    } else {
        
    //  Render all clothing data
        return (
            <div className="grid-wrapper">
                {products.map((product,index) => {
                    return <ProductCard product={product} key={`${product.id}${index}`}/>
                })}
            </div>
        )
    }
    

}