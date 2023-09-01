import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import './LazyLoader.css';


export default function LazyLoader(props) {
    let timerId;
    const { src = '', delay = 0, onLoad } = props;
    const [isMounted, setMounted] = useState(false);
    const [isLoading, setLoading] = useState(true);

    function loadImage() {
        const image = new Image();

        image.src = src;
        image.onload = () => {
            setLoading(false);
            onLoad();
        };
        image.onerror = () => {
            setLoading(false);
        };
    }

    useEffect(() => {
        if (!isMounted) {
            setMounted(true);
            delay ? (timerId = setTimeout(loadImage, delay)) : loadImage();
        }
        return () => clearTimeout(timerId);
    }, []);

    return (isLoading ? 
    <div className='flex-center'><BounceLoader color='orangered' /></div> : 
    <img width="100%" src={src} />
    );
}