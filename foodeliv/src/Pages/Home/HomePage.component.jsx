import React, { useEffect } from 'react';
import HeroPage from './HeroSection/HeroPage.component';
import FeaturesPage from './FeaturesSection/FeaturesPage.component';
import OtherInfo from './OtherInfo/OtherInfo.componet';
import Aos from 'aos';

const HomePage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='HomePage'>
            <HeroPage />
            <FeaturesPage />
            <OtherInfo />
        </div>
    )
}

export default HomePage;