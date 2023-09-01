import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Hero1 from '../../assets/hero1.webp';
import Hero2 from '../../assets/hero2.webp';
import Hero3 from '../../assets/hero3.webp';
import Hero4 from '../../assets/hero4.webp';
import LazyLoader from './LazyLoader';
import './LargeCarousel.css'


export default function LargeCarousel() {

    const [, setTimestamp] = useState(0);

    const onLoad = () => setTimestamp(Date.now());

    const items = [
        <div className="item" data-value="1">
            <LazyLoader onLoad={onLoad} src={Hero1} />
        </div>,
        <div className="item" data-value="2">
            <LazyLoader onLoad={onLoad} src={Hero2} />
        </div>,
        <div className="item" data-value="3">
            <LazyLoader onLoad={onLoad} src={Hero3} />
        </div>,
        <div className="item" data-value="4">
            <LazyLoader onLoad={onLoad} src={Hero4} />
        </div>,
    ];

    
    return (
        <AliceCarousel
            autoPlay
            // autoPlayControls
            autoPlayStrategy="none"
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