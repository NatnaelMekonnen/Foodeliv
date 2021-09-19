import { Button } from '@mui/material';
import React from 'react';
import Pizza from '../../../Assets/Images/pizza.png'
import TopBar from '../../../Components/TopBar/TopBar.component';
import './HeroPage.style.scss';

const HeroPage = () => {
    return (
        <div className="HeroPage">
            <TopBar />
            <div className="HeroContainer">
                <div className="HeroImageContainer">
                    <img src={Pizza} alt="Pizza" />
                </div>
                <div className="SloganContainer">
                    <div className="Slogan">
                        <h2>Straight out of</h2>
                        <h2>the oven</h2>
                        <h2>to your doorstep</h2>
                    </div>
                    <div>
                        <Button
                            style={{
                                borderRadius: '50px',
                                backgroundColor: '#FB7E00',
                                color: '#f5f5f5',
                                padding: '1ch 6ch 1ch 6ch',
                                marginBottom: '5ch',
                            }}
                        >
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage;