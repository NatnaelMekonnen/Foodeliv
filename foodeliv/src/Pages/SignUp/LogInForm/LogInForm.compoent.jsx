import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Button, Divider, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";

import GoogleIcon from "../../../Assets/Icons/google.svg";
import TextFieldWrapper from "../../../Components/TextFieldWrapper/Textfield.component";
import LOGIN_MUTATION from "./logInMutation";
import { userLog } from "../../../Redux/LogInState";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router";

const LogInForm = () => {
    //----------------------------------------------------------MUTATION-----------------------------------------------
    const [logInMutation, { data, loading, error }] =
        useMutation(LOGIN_MUTATION);

    //--------------------------------------------------------FORM VALIDATIONS-----------------------------------------
    const INITIAL_VALUES = {
        userName: "",
        password: "",
    };

    const FORM_VALIDATION = Yup.object().shape({
        userName:
            Yup.string().required("Enter Username or Email") ||
            Yup.string().email().required("Enter Username or Email"),
        password: Yup.string().required("Enter Password"),
    });

    //--------------------------------------------------------Dispatch Data---------------------------------------------
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (data) {
            dispatch(userLog(data));
            history.push("/Foods");
        }
    }, [data, error, loading, dispatch, history]);

    //------------------------------------------------------BACKDROP---------------------------------------------------

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (data || error) {
            handleClose();
        }
    }, [data, error]);
    //------------------------------------------------------------------------------------------------------------------

    return (
        <div className="LogIn">
            {loading && (
                <Backdrop
                    sx={{
                        color: "#fff",
                    }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            <Formik
                initialValues={{ ...INITIAL_VALUES }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values, actions) => {
                    const logInInput = {
                        email: values.userName,
                        password: values.password,
                    };
                    try {
                        logInMutation({ variables: { logInInput } });
                    } catch (error) {
                        throw new Error("Couldn't log In");
                    }
                }}
            >
                <Form className="LogInForm">
                    <TextFieldWrapper
                        name="userName"
                        label="User Name"
                        variant="outlined"
                        fullWidth
                    />
                    <TextFieldWrapper
                        name="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
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
                        Log In
                    </Button>
                    <p>Forgot password ?</p>
                </Form>
            </Formik>
            <Divider />
            <div className="GoogleSign">
                <img src={GoogleIcon} alt="" />
                <Typography>Sign up by Google Account</Typography>
            </div>
        </div>
    );
};

export default LogInForm;
