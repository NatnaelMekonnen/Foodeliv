import { Typography } from '@mui/material';
import React from 'react';
import './OtherInfo.style.scss';


const OtherInfo = () => {

    return (
        <div className='OtherInfo'>
            <div data-aos='flip-up' className='PricingContainer'>
                <Typography>
                    Pricing starts from 20 Birr a Kilometer
                </Typography>
            </div>
        </div>
    )
}

export default OtherInfo;