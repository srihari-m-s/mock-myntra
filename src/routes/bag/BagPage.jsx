import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './BagPage.css';
import ItemCard from "../../components/bag-page/ItemCard";

const convenienceFee = 50;

export default function BagPage(){

    const dispatch = useDispatch();

    let wishlist = useSelector((state) => state.bag.itemsInWishlist)
    let bag = useSelector((state) => state.bag.itemsInBag)
    let productCount = 0;
    let discountOnMRP = 0;
    let totalMRP = 0
    bag.forEach(item => {
        productCount+=item.itemCount;
        totalMRP += Math.floor(item.itemCount * item.price);
        discountOnMRP += item.itemCount * Math.ceil(item.price * (item.discount/100));
    });

    return (
        <div className="container-lg bagpage-wrapper">

            <div className="items-info-container">
                
                <div className="items-info">
                    <h2 className="full-span">Review Items in Wishlist</h2>
                    {wishlist.length ? wishlist.map((item) => {
                        return <ItemCard key={item.id} item={item} isWishlist={true}/>
                    }) :<div className="centered no-items">
                            <p className="">No items in Wishlist</p>
                            <Link to={`/shirts`} className="modal-link">Back to Shopping</Link>
                        </div> }
                </div>

                <div className="items-info">
                    <h2 className="full-span">Review Items in Bag</h2>
                    {bag.length ? bag.map((item) => {
                        return <ItemCard key={item.id} item={item} isWishlist={false}/>
                    }) :<div className="centered no-items">
                            <p className="">No items in Bag</p>
                            <Link to={`/shirts`} className="modal-link">Back to Shopping</Link>
                        </div> }
                </div>

            </div>

            <div className="price-details">
                <h3 className="full-span">Price Details({productCount} items)</h3>

                <hr style={{marginBlock:"2em"}}/>

                <div className="detail-line">
                    <p className="capitalize">total MRP</p>
                    <p>₹ {totalMRP}</p>
                </div>

                <div className="detail-line">
                    <p className="capitalize">discount on MRP</p>
                    <p>- ₹ {discountOnMRP}</p>
                </div>

                <div className="detail-line">
                    <p className="capitalize">convenience fee</p>
                    <p>₹ {convenienceFee}</p>
                </div>

                <hr style={{marginBlock:"2em"}}/>

                <div className="detail-line">
                    <h4 className="capitalize">total amount</h4>
                    <h4>₹ {totalMRP - discountOnMRP + convenienceFee}</h4>
                </div>

                <div className="detail-line">
                    <button className="place-order-btn">Place Order</button>
                </div>

            </div>

        </div>
    )
}