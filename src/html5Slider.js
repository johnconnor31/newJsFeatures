import React, { useEffect } from 'react';
import $ from 'jquery';
import './static/jquery.flexslider.js';
import './static/flexslider.css';
import image1 from './static/avengers-1.jpg';
import image2 from './static/avengers-2.jpeg';
import image3 from './static/avengers-3.jpg';
import image4 from './static/avengers-4.jpg';

export default function useSlider() {
    useEffect(() => {
        $('.flexslider').flexslider();
    });
    return (
        <div className='flexslider'>
        <ul className='slides'>
            <li>
                <img src={image1} alt='q' />
                <span className='flex-caption'>Iron Man - I am Iron Man</span>
            </li>
            <li>
                <img src={image2} alt='q' />
                <span className='flex-caption'>Captain America - I can do this all day</span>
            </li>
            <li>
                <img src={image3} alt='q' />
                <span className='flex-caption'>Black Widow - I don't see how that's a party</span>
            </li>
            <li>
                <img src={image4} alt='q' />
                <span className='flex-caption'>Thor - Bring me Thanos! </span>
            </li>
        </ul>
        </div>
    );
}