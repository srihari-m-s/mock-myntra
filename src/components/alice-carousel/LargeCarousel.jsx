import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Hero1 from '../../assets/hero1.webp';
import Hero2 from '../../assets/hero2.webp';
import Hero3 from '../../assets/hero3.webp';
import Hero4 from '../../assets/hero4.webp';
import './Carousel.css'

const items = [
    <div className="item" data-value="1">
        <img src={Hero1} alt="Hero Image" />
    </div>,
    <div className="item" data-value="2">
        <img src={Hero2} alt="Hero Image" />
    </div>,
    <div className="item" data-value="2">
        <img src={Hero3} alt="Hero Image" />
    </div>,
    <div className="item" data-value="2">
        <img src={Hero4} alt="Hero Image" />
    </div>,
];

export default function LargeCarousel() {
    
    return (
        <AliceCarousel
            autoPlay
            // autoPlayControls
            autoPlayStrategy="default"
            autoPlayInterval={5000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            // disableDotsControls
            disableButtonsControls
            items={items}
        />
    )
}