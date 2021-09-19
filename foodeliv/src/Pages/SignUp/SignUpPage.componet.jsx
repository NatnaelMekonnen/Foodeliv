import React, { useState } from 'react';
import TopBar from '../../Components/TopBar/TopBar.component';
import { Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './SignUpPage.style.scss';
import { Box } from '@mui/system';
import SignUpForm from './SignUpForm/SignUpForm.component';
import LogInForm from './LogInForm/LogInForm.compoent';

const SignUpPage = () => {

    //-------------------------------------------TAB---------------------------------------------------

    const [value, setValue] = useState('1');

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <TopBar />
            <div className='SignUpBody'>
                <div className='SignUpFormContainer'>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: '#fbaf00' }}>
                            <TabList
                                onChange={handleTabChange}
                            >
                                <Tab
                                    label="Log In"
                                    value="1"
                                    style={{
                                        color: '#fb7e00',
                                    }}
                                />
                                <Tab
                                    label="Sign Up"
                                    value="2"
                                    style={{
                                        color: '#fb7e00',
                                    }}
                                />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <LogInForm />
                        </TabPanel>
                        <TabPanel value="2">
                            <SignUpForm />
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;