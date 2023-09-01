import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import LazyLoader from './LazyLoader';
import './SmallCarousel.css';


export default function SmallCarousel(){

    const [, setTimestamp] = useState(0);

    const onLoad = () => setTimestamp(Date.now());

    const imgURLArray = [
        "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
    ]
    
    const itemsLength = Array.from({ length: imgURLArray.length });
    
    const items = itemsLength.map((item, index) => {
        const style = { width: "240px", height: "280px"};
        const divStyle = { width: "240px", height: "280px"};
        return (
        <div className="item" style={divStyle}>
            {/* <img src={imgURLArray[index]} alt="Hero Image" style={style}/> */}
            <LazyLoader onLoad={onLoad} src={imgURLArray[index]} />
        </div>
        );
    });

    return(
        <AliceCarousel
            autoPlay
            autoWidth
            // autoPlayControls
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={5000}
            animationType="default"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
        />
    )
}