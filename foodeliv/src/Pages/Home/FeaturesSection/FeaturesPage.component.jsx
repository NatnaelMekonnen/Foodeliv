import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './FeaturesPage.style.scss';
import MapPin from '../../../Assets/Images/awesome-map-marker-alt.svg';
import Fork from '../../../Assets/Images/Fork.svg';
import Spoon from '../../../Assets/Images/Spoon.svg';
import Knife from '../../../Assets/Images/Knife.svg';
import Time from '../../../Assets/Images/ionic-md-time.svg';
import Aos from 'aos';
import "aos/dist/aos.css";


const FeaturesPage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    return (
        <div className='FeaturesPage'>
            <div data-aos="flip-left" className='Card'>
                <img className='Map' src={MapPin} alt='' />
                <Typography>View Restaurants Near You</Typography>
            </div>
            <div data-aos="flip-left" className='Card'>
                <div className='RestaurantSvg'><img src={Spoon} alt='' /><img src={Fork} alt='' /><img src={Knife} alt='' /></div>
                <Typography>Choose from varies dishes and beverages</Typography>
            </div>
            <div data-aos="flip-left" className='Card'>
                <img className='Time' src={Time} alt='' />
                <Typography>Order instantly or Schedule delivery</Typography>
            </div>
        </div>
    )
}

export default FeaturesPage;