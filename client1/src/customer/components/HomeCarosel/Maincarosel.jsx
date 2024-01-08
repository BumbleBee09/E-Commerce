import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';

const Maincarosel = () => {
    const items = mainCaroselData.map((item) => (
        <img
            className="cursor-pointer"
            role="presentation"
            src={item.image}
            alt=""
        />
    ));

    return (
        <AliceCarousel
            autoPlay
            //autoPlayControls
            autoPlayStrategy="none"
            autoPlayInterval={2000}
            animationDuration={500}
            animationType="fadeout"
            infinite
            touchTracking={false} 
            disableDotsControls
            disableButtonsControls
            items={items}
        />
    );
};


export default Maincarosel
