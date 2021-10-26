import React, { useEffect } from "react";
import * as Yup from "yup";
import { Button, InputLabel } from "@mui/material";
import { Form, Formik } from "formik";
import { useMutation } from "@apollo/client";

import SelectFieldWrapper from "../../../Components/SelectFieldWrapper/Select.component";
import TextFieldWrapper from "../../../Components/TextFieldWrapper/Textfield.component";
import SIGNUP_MUTATION from "./signUpMutation";

const SignUpForm = () => {
    //-----------------------------------------MUTATION-------------------------------------------------------------
    const [signUpMutation, { data, loading, error }] =
        useMutation(SIGNUP_MUTATION);

    //--------------------------------------------------------------------------------------------------------------
    let strongPass =
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})";
    let mediumPass =
        "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))";

    const INITIAL_VALUES = {
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        email: "",
        accountType: "",
        restaurantName: "",
        restaurantType: "",
        restaurantLocation: "",
        password: "",
        confirmPassword: "",
    };

    const FORM_VALIDATION = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        gender: Yup.string().required("Required"),
        dateOfBirth: Yup.date().default(function () {
            return new Date();
        }),
        email: Yup.string().email().required("Required"),
        accountType: Yup.string().required("Required"),
        restaurantName: Yup.string().required("Required"),
        restaurantType: Yup.string().required("Required"),
        restaurantLocation: Yup.string().required("Required"),
        password: Yup.string()
            .min(8)
            .matches(new RegExp(strongPass) || new RegExp(mediumPass))
            .required("Please enter a strong Password"),
    });

    const GENDER_OPTIONS = {
        MALE: "Male",
        FEMALE: "Female",
        OTHER: "Other",
    };

    const ACCOUNT_TYPES = {
        CONSUMER: "Consumer",
        RESTAURANT: "Restaurant Owner",
    };

    const RESTAURANT_TYPES = {
        FAST_FOOD: "Fast Food",
        HOTEL: "Hotel",
        CAFE: "Cafe",
        BAR: "Bar",
    };

    return (
        <Formik
            initialValues={{ ...INITIAL_VALUES }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, actions) => {
                const userIn = values;
                signUpMutation({ variables: { userIn } });
                actions.resetForm();
            }}
        >
            {(props) => (
                <Form className="Form">
                    <TextFieldWrapper
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                    />
                    <TextFieldWrapper
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                    />
                    <SelectFieldWrapper
                        className="SingleRow"
                        name="gender"
                        label="Gender"
                        options={GENDER_OPTIONS}
                        variant="outlined"
                    />
                    <div className="SingleRow">
                        <InputLabel>Date of Birth</InputLabel>
                        <TextFieldWrapper
                            name="dateOfBirth"
                            type="date"
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <SelectFieldWrapper
                        className="SingleRow"
                        name="accountType"
                        label="Account Type"
                        options={ACCOUNT_TYPES}
                        variant="outlined"
                    />
                    {props.values.accountType === "RESTAURANT" ? (
                        <div className="RestaurantOptions">
                            <TextFieldWrapper
                                name="restaurantName"
                                label="Restaurant Name"
                                variant="outlined"
                            />
                            <SelectFieldWrapper
                                name="restaurantType"
                                label="Restaurant Type"
                                options={RESTAURANT_TYPES}
                                variant="outlined"
                            />
                            <TextFieldWrapper
                                className="SingleRow"
                                name="restaurantLocation"
                                label="Restaurant Location"
                                variant="outlined"
                            />
                        </div>
                    ) : null}

                    <TextFieldWrapper
                        className="SingleRow"
                        name="email"
                        label="Email"
                        variant="outlined"
                    />

                    <TextFieldWrapper
                        name="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                    />
                    <TextFieldWrapper
                        name="confirmPassword"
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                    />
                    <Button
                        type="submit"
                        style={{
                            gridColumn: "1 / 3",
                            color: "#f5f5f5",
                            backgroundColor: "#fb7e00",
                            width: "20%",
                            justifySelf: "right",
                        }}
                    >
                        Sign Up
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SignUpForm;
