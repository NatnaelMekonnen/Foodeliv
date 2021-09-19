import React from 'react';
import HeroPage from './HeroSection/HeroPage.component';
import FeaturesPage from './FeaturesSection/FeaturesPage.component';

const HomePage = () => {
    return (
        <div className='HomePage'>
            <HeroPage />
            <FeaturesPage />
        </div>
    )
}

export default HomePage;