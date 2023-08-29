import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, removeFromBag, setItemQty } from '../../features/bag/bagSlice';
import './ItemCard.css';

export default function ItemCard({item, isWishlist}){

    const dispatch = useDispatch();

    // Remove item from wishlist
    function handleRemove(e, item){
        dispatch(removeFromWishlist(item.id));
    }

    // Remove all instances of item/product from bag
    function handleRemoveFromBag(e, item){
        dispatch(removeFromBag({id: item.id}));
    }

    // Increase Item count by 1
    function incrementQty(e, item){
        let count = item.itemCount;
        count += 1;
        dispatch(setItemQty({id: item.id, count: count}));
    }

    // Decrease Item count by 1
    function decrementQty(e, item){
        let count = item.itemCount;
        count -= 1;
        if(count === 0){
            dispatch(removeFromBag({id: item.id}))
        } else {
            dispatch(setItemQty({id: item.id, count: count}));        
        }
    }

    return(
        <div className="small-card-container">
            <div className="small-card-img">
                <Link to={isWishlist ? `/shirts/${item.id}` : `/shirts/${Number(item.id.slice(0,-1))}`}>
                    <img src={item.image} alt="product image" className=''/>
                </Link>
            </div>

            <div className="small-card-info">
                <h4>{item.brand}</h4>
                <h4>{item.subCategory}</h4>
                {isWishlist ? "" : <h4>size: {item.size}</h4>}
                {isWishlist ? "" : <h4>qty: {item.itemCount}</h4>}
                {isWishlist ? "" : <h4>price: ₹ {item.itemCount * (Math.floor(item.price - item.price * (item.discount/100)))}</h4>}
                {isWishlist ? "" : <p style={{textDecoration:"line-through", opacity: "0.5"}}>₹ {item.itemCount * item.price}</p>}
            </div>

            {isWishlist ? 
            <div className="small-card-btns">
                <button className='remove-btn' onClick={e => handleRemove(e, item)}>Remove</button>
            </div> :
            <div className="small-card-btns">
                <button className='modal-link' onClick={e => incrementQty(e, item)}>+</button>
                <button className='modal-link' onClick={e => decrementQty(e, item)}>-</button>
                <button className='remove-btn' onClick={e => handleRemoveFromBag(e, item)}>Remove</button>
            </div>
            }

        </div>
    )
}