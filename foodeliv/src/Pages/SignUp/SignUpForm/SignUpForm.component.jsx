import React from 'react';
import * as Yup from 'yup';
import TextFieldWrapper from '../../../Components/TextFieldWrapper/Textfield.component';
import SelectFieldWrapper from '../../../Components/SelectFieldWrapper/Select.component';
import { Button, InputLabel } from '@mui/material';
import { Form, Formik } from 'formik';

const SignUpForm = () => {

    let strongPass = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})';
    let mediumPass = '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))';

    const INITIAL_VALUES = {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const FORM_VALIDATION = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
        dateOfBirth: Yup.date().default(function () {
            return new Date();
        }),
        email: Yup.string().email().required('Required'),
        password: Yup.string().min(8)
            .matches((new RegExp(strongPass) || (new RegExp(mediumPass))))
            .required('Please enter a strong Password'),
    })

    const GENDER_OPTIONS = {
        MALE: 'Male',
        FEMALE: 'Female',
        OTHER: 'Other'
    }

    return (
        <Formik
            initialValues={{ ...INITIAL_VALUES }}
            validationSchema={FORM_VALIDATION}
        >
            <Form className='Form'>
                <TextFieldWrapper
                    name='firstName'
                    label='First Name'
                    variant='outlined'
                />
                <TextFieldWrapper
                    name='lastName'
                    label='Last Name'
                    variant='outlined'
                />
                <SelectFieldWrapper
                    className='SingleRow'
                    name='gender'
                    label='Gender'
                    options={GENDER_OPTIONS}
                    variant='outlined'
                />
                <div className='SingleRow'>
                    <InputLabel>Date of Birth</InputLabel>
                    <TextFieldWrapper
                        name='dateOfBirth'
                        type='date'
                        variant='outlined'
                        fullWidth
                    />
                </div>

                <TextFieldWrapper
                    className='SingleRow'
                    name='email'
                    label='Email'
                    variant='outlined'
                />
                <TextFieldWrapper
                    name='password'
                    label='Password'
                    variant='outlined'
                    type='password'
                />
                <TextFieldWrapper
                    name='confirmPassword'
                    label='Confirm Password'
                    variant='outlined'
                    type='password'
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
                    Sign Up
                </Button>
            </Form>
        </Formik>
    )
}

export default SignUpForm;