import { Button, Typography } from '@mui/material';
import React from 'react';
import './TopBar.style.scss';
import line from '../../Assets/Images/line.svg';
import { useHistory } from 'react-router';

const TopBar = () => {

    let history = useHistory();

    return (
        <div className='TopBarContainer'>
            <div className='LogoContainer' onClick={() => { history.push('/') }}>
                <h3>Foo</h3>
                <h3>deliv</h3>
            </div>
            <div className='NavigationLinks'>
                <div className='NavLink'><Typography><a href='/Foods'>Foods</a></Typography><img className='HoverLine' src={line} alt='' /></div>
                <div className='NavLink'><Typography><a href='/Drinks'>Drinks</a></Typography><img className='HoverLine' src={line} alt='' /></div>
                <div className='NavLink'><Typography><a href='/Restaurants'>Restaurants</a></Typography><img className='HoverLine' src={line} alt='' /></div>
                {
                    history.location.pathname === '/' ?
                        <Button
                            style={{
                                backgroundColor: '#FB7E00',
                                color: 'white'
                            }}
                            onClick={() => {
                                history.push('/SignUp')
                            }}
                        >
                            Sign Up
                        </Button>
                        : null
                }
            </div>
        </div>
    )
}

export default TopBar;