import React, { useState } from "react";
import { MenuItem, InputLabel, Select, FormHelperText } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { FormControl } from "@mui/material";

const SelectWrapper = ({ name, label, options, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(name);
    const [isError, setError] = useState(false);

    const handleChange = (evt) => {
        const { value } = evt.target;
        setFieldValue(name, value);
    };

    const configControl = {
        fullWidth: true,
        variant: "outlined",
    };

    const handleBlur = (evt) => {
        const { value } = evt.target;
        if (!value) {
            setError(true);
        }
    };

    const configSelect = {
        ...field,
        ...otherProps,
        onChange: handleChange,
        onBlur: handleBlur,
    };

    return (
        <FormControl {...configControl} error={isError}>
            <InputLabel style={{ backgroundColor: "white" }}>
                {label}
            </InputLabel>
            <Select
                {...configSelect}
                inputProps={{
                    name: "",
                }}
                MenuProps={{
                    style: { zIndex: 35001 },
                }}
            >
                {Object.keys(options).map((item, pos) => {
                    return (
                        <MenuItem key={pos} value={item}>
                            {options[item]}
                        </MenuItem>
                    );
                })}
            </Select>
            {isError && (
                <FormHelperText style={{ color: "red" }}>
                    Required*
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default SelectWrapper;
