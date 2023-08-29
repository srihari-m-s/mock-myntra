import { BsHeart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import IconBasic_heart from '../ant-icons/IconBasic_heart';

/**
 * Wishlist action Component
 * 
 */
export default function Wishlist(){

    let itemsInWishlist = useSelector((state) => state.bag.itemsInWishlist)
    
    return (
        <div className="action-wrapper">
            <div className="react-icon" ><IconBasic_heart width="100%" height="100%" className={itemsInWishlist.length? "hasItems" : ""}/></div>
            <h6 className="icon-label" >Wishlist</h6>
        </div>
    )
}