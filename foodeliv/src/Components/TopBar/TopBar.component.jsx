import { Typography } from '@mui/material';
import React from 'react';
import './TopBar.style.scss';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import line from '../../Assets/Images/line.svg';

const TopBar = () => {
    return (
        <div className='TopBarContainer'>
            <div className='LogoContainer'>
                <h3>Foo</h3>
                <h3>deliv</h3>
            </div>
            <div className='NavigationLinks'>
                <div className='NavLink'><Typography>Foods</Typography><img className='HoverLine' src={line} alt='' /></div>
                <div className='NavLink'><Typography>Drinks</Typography><img className='HoverLine' src={line} alt='' /></div>
                <div className='NavLink'><Typography>Restaurants</Typography><img className='HoverLine' src={line} alt='' /></div>
                <AccountCircleRoundedIcon />
            </div>
        </div>
    )
}

export default TopBar;