import React from 'react';
import * as Yup from 'yup';
import TextFieldWrapper from '../../../Components/TextFieldWrapper/Textfield.component';
import { Button, Divider, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import GoogleIcon from '../../../Assets/Icons/google.svg';

const LogInForm = () => {

    const INITIAL_VALUES = {
        userName: '',
        password: '',
    }

    const FORM_VALIDATION = Yup.object().shape({
        userName: Yup.string().required('Enter Username or Email') || Yup.string().email().required('Enter Username or Email'),
        password: Yup.string()
            .required('Enter Password'),
    })

    return (
        <div className='LogIn'>
            <Formik
                initialValues={{ ...INITIAL_VALUES }}
                validationSchema={FORM_VALIDATION}
            >
                <Form className='LogInForm'>
                    <TextFieldWrapper
                        name='userName'
                        label='User Name'
                        variant='outlined'
                        fullWidth
                    />
                    <TextFieldWrapper
                        name='password'
                        label='Password'
                        variant='outlined'
                        type='password'
                        fullWidth
                    />

                    <Button
                        style={{
                            gridColumn: '1 / 3',
                            color: '#f5f5f5',
                            backgroundColor: '#fb7e00',
                            width: '20%',
                            justifySelf: 'right'
                        }}
                    >
                        Log In
                    </Button>
                    <p>Forgot password ?</p>
                </Form>
            </Formik>
            <Divider />
            <div className='GoogleSign'>
                <img src={GoogleIcon} alt='' />
                <Typography>Sign up by Google Account</Typography>
            </div>
        </div>


    )
}

export default LogInForm;