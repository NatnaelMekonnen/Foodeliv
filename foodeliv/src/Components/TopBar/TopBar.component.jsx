import { Button, Typography } from '@mui/material';
import React from 'react';
import './TopBar.style.scss';
import line from '../../Assets/Images/line.svg';

const TopBar = () => {
    return (
        <div className='TopBarContainer'>
            <div className='LogoContainer'>
                <h3>Foo</h3>
                <h3>deliv</h3>
            </div>
            <div className='NavigationLinks'>
                <div className='NavLink'><Typography><a href='/Foods'>Foods</a></Typography><img className='HoverLine' src={line} alt='' /></div>
                <div className='NavLink'><Typography><a href='/Drinks'>Drinks</a></Typography><img className='HoverLine' src={line} alt='' /></div>
                <div className='NavLink'><Typography><a href='/Restaurants'>Restaurants</a></Typography><img className='HoverLine' src={line} alt='' /></div>
                <Button
                    style={{
                        backgroundColor: '#FB7E00',
                        color: 'white'
                    }}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    )
}

export default TopBar;