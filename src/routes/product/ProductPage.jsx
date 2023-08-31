import { useParams } from "react-router-dom";
import { formattedData } from "../../features/products/data";
import { addToBag, addToWishlist, setItemQty } from "../../features/bag/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import IconStar from "../../components/ant-icons/IconStar";
import IconBasic_heart from "../../components/ant-icons/IconBasic_heart";
import { HiOutlineShoppingBag } from 'react-icons/hi'
import './ProductPage.css';
import { useState } from "react";
import { Image } from "../../components/Image";

/**
 * Product Page component
 * that extends from the shirts page.
 * The Syntax follows the React Router documentation.
 * 
 * Product id is the dynamic query param
 */
export default function ProductPage() {

    // Get product id from dynamic query param
    const { productId } = useParams();

    // Get product details from data.json file
    const product = formattedData.filter(data => data.id === Number(productId))[0];

    const dispatch = useDispatch();
    const [size, setSize] = useState("");

    // Read wishlist state
    let thingsInWishlist = useSelector((state) => state.bag.itemsInWishlist);
    let thingsInBag = useSelector((state) => state.bag.itemsInBag);

    // Function to add "size" key to product
    function handleSetSize(e, product){
        let checked = e.target.checked;
        let size = e.target.id;
        if(checked){
            setSize(size);
        }
    }


    // Add selected product to bag
    function sendToBag(e,product){
        e.preventDefault();
        let count = 0;
        
        thingsInBag.forEach(item => {
            if(item.id === `${product.id}${size}`){
                count = item.itemCount;
            }
        });

        count += 1;
        if(count === 1){
            dispatch(addToBag({...product, size: size, itemCount: count, id: `${product.id}${size}`}))
        } else {
            dispatch(setItemQty({id: `${product.id}${size}`, count: count}));
        }
    }


    // Add selected product to wishlist
    function sendToWishlist(e, product){
        e.preventDefault();
        let count = product.itemCount;
        count += 1;
        if(thingsInWishlist.some(item => item.id === product.id)){return}
        dispatch(addToWishlist({...product, size: size, itemCount: count}))
    }

    return (
        <div className="container-lg mt">
            <div className="products-container">

                <h1 className="products-container-heading">{product.brand} {product.subCategory}</h1>

                {/* Product Image grid that <Image /> component*/}
                <div className="product-wrapper">
                    <div className="image-grid">
                        <div className="product-image">
                            <Image imgUrl={product.image}/>
                        </div>
                        <div className="product-image">
                            <Image imgUrl={product.image}/>
                        </div>
                        <div className="product-image">
                            <Image imgUrl={product.image}/>
                        </div>
                        <div className="product-image">
                            <Image imgUrl={product.image}/>
                        </div>
                    </div>
                    {/* Product info */}
                    <div className="product-info-container">
                    
                        <div className="header">
                            <h2>{product.brand}</h2>
                            <p className="subcategory">{product.subCategory}</p>
                            <div className="rating">
                                <h5>{product.rating.rate}</h5>
                                <IconStar height="15px" width="15px" className="star"/>
                                <div className="separator"></div>
                                <p>{product.rating.count} Ratings</p>
                            </div>
                        </div>
                        <hr className="line"/>
                        <div className="product-info">
                    
                            <div className="price">
                                <h2 className='card'>
                                    ₹{Math.floor(product.price - product.price * (product.discount/100))}
                                    {product.discount !== 0 ? <span className='product-price'>MRP ₹{product.price}</span> : null}
                                    {product.discount !== 0 ? <span className='product-discount'>({product.discount}% OFF)</span> : null}
                                </h2>
                            </div>
                    
                            <span style={{color:"green", fontWeight: "700"}}>inclusive of all taxes</span>
                    
                            <div className="size-heading">
                                <p>select size</p>
                                {/* <p style={{color:"orangered"}}>size chart:</p> */}
                            </div>
                    
                            <form onSubmit={e => sendToBag(e,product)}>
                                <div className="size-select">
                                    <div className="size">
                                        <label htmlFor="L">L</label>
                                        <input type="radio" name="size" id="L" className="size-input" key="L" required onChange={e => handleSetSize(e, product)}/>
                                    </div>
                                    <div className="size">
                                        <label htmlFor="M">M</label>
                                        <input type="radio" name="size" id="M" className="size-input" key="M" required onChange={e => handleSetSize(e, product)}/>
                                    </div>
                                    <div className="size">
                                        <label htmlFor="S">S</label>
                                        <input type="radio" name="size" id="S" className="size-input" key="S" required onChange={e => handleSetSize(e, product)}/>
                                    </div>
                                </div>
                    
                                <div className="action-btns">
                                    <button type="submit" className="bag-button">
                                        <HiOutlineShoppingBag /> add to bag
                                    </button>
                    
                                    <button type="button" className='wishlist-button' onClick={e => sendToWishlist(e, product)}>
                                        <IconBasic_heart height="20px" width="20px" className="heart-icon"/> Wishlist
                                    </button>
                                </div>
                            </form>
                        </div>
                        <hr className="line"/>
                        <div className="description">
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}