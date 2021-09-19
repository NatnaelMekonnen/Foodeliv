import React from 'react';
import { TextField } from "@mui/material";
import { useField } from 'formik';

const TextFieldWrapper = ({name,...otherProps}) => {

    const [field, mata] = useField(name)

    const textFieldConfig = {
        ...field,
        ...otherProps,
        // variant: "outlined",
    };

    if (mata && mata.touched && mata.error){
        textFieldConfig.error = true;
        textFieldConfig.helperText = mata.error;
    }

    return (
        <TextField {...textFieldConfig}/>
    )
}

export default TextFieldWrapper
