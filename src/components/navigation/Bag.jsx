import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconEcommerce_bag from '../ant-icons/IconEcommerce_bag';
import './Bag.css'

/**
 * Bag component in the Navigation.
 * Holds Wishlist and Bag data.
 * Contains modal to display Bag/Cart and Wishlist data.
 */
export default function Bag(){
    const navigate = useNavigate();

    // Read bag state
    let thingsInBag = useSelector((state) => state.bag.itemsInBag)
    let productCount = 0;
    thingsInBag.forEach(thing => {
        productCount += thing.itemCount;
    });

    // Open modal that displays wishlist and bag state
    function handleBagClick(e){
        navigate("/bag")
    }

    return (
        <>
        <div className="action-wrapper" onClick={handleBagClick}>
            <div className="react-icon" ><IconEcommerce_bag width="100%" height="100%"/></div>
            <h6 className="icon-label" >Bag</h6>
            { productCount !== 0 ? <span className="items-in-bag">{productCount}</span> : null}
        </div>
        </>
    )
}