import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addToWishlist } from '../../features/bag/bagSlice'
import { Link } from 'react-router-dom'
import IconStar from '../ant-icons/IconStar'
import IconBasic_heart from '../ant-icons/IconBasic_heart'
import IconCard_view from '../ant-icons/IconCard_view'
import './ProductCard.css'
import LazyLoader from '../alice-carousel/LazyLoader';


/**
 * Product Card Component
 * Displays products as Cards 
 * props --
 * 1. product {object}
 */
export default function ProductCard({ product }) {

    const dispatch = useDispatch()
    let itemsInWishlist = useSelector((state) => state.bag.itemsInWishlist)

    const [, setTimestamp] = useState(0);

    const onLoad = () => setTimestamp(Date.now());

    // Add selected product to wishlist
    function handleWishlist(e, product){
        if(itemsInWishlist.some(item => item.id === product.id)){return}
        dispatch(addToWishlist(product))
    }

    return (

        <div className="card-wrapper">
            <Link to={`${product.id}`} className='links'>
                <div className="card-image">
                    <LazyLoader onLoad={onLoad} src={product.image} />
                    <div className="overlay"></div>
                </div>
            </Link>
    
            <div className="card-body">
                <div className="card-rating">
                    <h5>{product.rating.rate}</h5>
                    <IconStar height="15px" width="15px" className="star"/>
                    <p className="">|</p>
                    <h5>{product.rating.count}</h5>
                </div>
                <div className="view-similar">
                    <div className="card-view">
                        <IconCard_view height="25px" width="25px"/>
                        <div className="view-similar-btn">view similar</div>
                    </div>
                </div>
                <div className="wishlist">
                    <button className='wishlist-btn' onClick={e => handleWishlist(e, product)}>
                        <IconBasic_heart height="15px" width="15px" className="heart"/> Wishlist
                    </button>
                </div>
                <Link to={`${product.id}`} className='links'>
                    <h4 className='card-heading'>{product.brand}</h4>
                    <p className='card-description'>{product.title}</p>
                    <h5 className='card-price'>
                        Rs. {Math.ceil(product.price - product.price * (product.discount/100))}
                        {product.discount !== 0 ? <span className='original-price'>Rs. {product.price}</span> : null}
                        {product.discount !== 0 ? <span className='discount'>({product.discount}% OFF)</span> : null}
                    </h5>
                </Link>
            </div>
        </div> 
        
        
        
    )
}