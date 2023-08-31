import ProductGrid from "../../components/products/ProductGrid"
import Sidebar from "../../components/sidebar/Sidebar"
import { setSort } from "../../features/sort/sortSlice";
import { useDispatch } from "react-redux";
import { formattedData } from "../../features/products/data";
import { useFetchMenProductsQuery, useFetchWomenProductsQuery } from "../../features/products/products-api-slice"
import './Shirts.css'
import { BounceLoader } from "react-spinners";

/**
 * Shirts Page
 * Displays products with Filters, Sorting and 
 * Adding to wishlist functionality
 */
export default function Shirts(){

    let products = [];
    const dispatch = useDispatch()

    // Fetch clothing Data from FakeStore Api
    const womenProducts = useFetchWomenProductsQuery();
    const menProducts = useFetchMenProductsQuery();

    // If fetching sucessfull, set data to Products
    if((womenProducts.isSuccess && menProducts.isSuccess) || womenProducts.error ){ 
        // products = [...womenProducts.data, ...menProducts.data];
        // Because FakeStore Api can be unreliable, data is retrieved from data.json
        products = formattedData;
    }
    
    // Set "Sort Products By" state
    function handleSelect(value){
        dispatch(setSort(value));
    }
    
    function handleFiltersToggle(){
        const sidebar = document.querySelector(".sidebar-wrapper");
        sidebar.classList.toggle("slide-in-out")
    }
    

    return (
        <div className="container-md mt">
            <div className="products-header m-inline">
                
                <div className="heading-wrapper" onClick={handleFiltersToggle}>
                    <h3>filters</h3>
                </div>
                <div className="sort-container">
                    <label htmlFor="sort">Sort By:</label>
                    <select name="sort" id="sort" defaultValue="Recommended"  onChange={e => handleSelect(e.target.value)}>
                        <option value="Recommended">Recommended</option>
                        <option value="What's new">What's new</option>
                        <option value="Popularity">Popularity</option>
                        <option value="Better discount">Better discount</option>
                        <option value="Price: low to high">Price: low to high</option>
                        <option value="Price: high to low">Price: high to low</option>
                        <option value="Customer Rating">Customer Rating</option>
                    </select>
                </div>
                
            </div>
            <div className="products-wrapper">
                
                <Sidebar />
                <div className="product-grid m-inline">
                    {products.length === 0 ? 
                    <div className="flex-center">
                        {/* <h2>Loading...Please wait.</h2> */}
                        <BounceLoader color="orangered"/>
                    </div> : 
                    <ProductGrid products={products}/>}
                </div>
            </div>
        </div>
    )
    
}