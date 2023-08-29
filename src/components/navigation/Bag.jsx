import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBag, removeFromWishlist } from '../../features/bag/bagSlice';
import { Link } from 'react-router-dom';
import IconEcommerce_bag from '../ant-icons/IconEcommerce_bag';
import './Bag.css'

/**
 * Bag component in the Navigation.
 * Holds Wishlist and Bag data.
 * Contains modal to display Bag/Cart and Wishlist data.
 */
export default function Bag(){

    const dispatch = useDispatch()

    // Read wishlist and bag state
    let thingsInWishlist = useSelector((state) => state.bag.itemsInWishlist)
    let thingsInBag = useSelector((state) => state.bag.itemsInBag)    

    // Open modal that displays wishlist and bag state
    function handleBagDialog(e){
        
        const dialog = document.querySelector('dialog');
        const closeButton = document.getElementById('close-modal');

        closeButton.addEventListener("click", (e) => {
            dialog.close();
        })

        dialog.showModal();
        
    }

    // Close Modal on "Close" button click
    function handleLinkClick(e){
        document.querySelector('dialog').close();
    }

    // Remove item from wishlist
    function handleRemove(e, item){
        dispatch(removeFromWishlist(item.id));
    }

    // Remove all instances of item/product from bag
    function handleRemoveFromBag(e, item){
        dispatch(removeFromBag({id: item.id}));
    }

    return (
        <>
        <div className="action-wrapper" onClick={handleBagDialog}>
            <div className="react-icon" ><IconEcommerce_bag width="100%" height="100%"/></div>
            <h6 className="icon-label" >Bag</h6>
            { thingsInBag.length ? <span className="items-in-bag">{thingsInBag.length}</span> : null}
        </div>

        {/* Modal for Bag */}
        <dialog id="dialog" className="dialog">
            {thingsInWishlist.length? <h1 className='heading'>Wishlist</h1> : null}
            <div className="wishlist-data-wrapper">
                
            {thingsInWishlist.length ? thingsInWishlist.map(item => {

                return  (<>
                            <div className="item-card" key={`wish${item.id}`}>
                                <Link to={`/shirts/${item.id}`} className='modal-link' onClick={e => handleLinkClick(e)}>
                                    <div className="modal-image">
                                        <img src={item.image} alt="product image"/>
                                    </div>
                                </Link>
                                <div className="card-text">
                                    <h5>{item.title}</h5>
                                    <h5>Rs. {Math.floor(item.price - item.price * (item.discount/100))}</h5>
                                </div>
                                <div className="card-btns">
                                    <button className="remove-btn" onClick={e => handleRemove(e, item)}>Remove</button>   
                                </div> 
                            </div>    
                        </>)
            }) : null}
        
            </div>
            
            {thingsInBag.length ? <h1 className='heading'>Bag</h1> : null}
            <div className="bag-data-wrapper">

                {thingsInBag.length ? thingsInBag.map(item => {

                    return  (<>
                                <div className="item-card" key={`bag${item.id}`}>
                                    <Link to={`/shirts/${item.id}`} className='links'>
                                        <div className="modal-image">
                                            <img src={item.image} alt="product image"/>
                                        </div>
                                    </Link>
                                    <div className="card-text">
                                        <h5>{item.title}</h5>
                                        <h5>Size: {item.size}</h5>
                                        <h5>Rs. {Math.floor(item.price - item.price * (item.discount/100))}</h5>
                                    </div>
                                    <div className="card-btns">
                                        <button className="remove-btn" onClick={e => handleRemoveFromBag(e, item)}>Remove</button>   
                                    </div> 
                                </div>    
                            </>)
                }) : null}

            </div>

        <div className="centered"><button className="close" id="close-modal">Close</button></div>
        </dialog>
        </>
    )
}