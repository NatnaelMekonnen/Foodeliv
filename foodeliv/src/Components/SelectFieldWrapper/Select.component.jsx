import React from 'react';
import { MenuItem, InputLabel, Select, FormHelperText } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { FormControl } from '@mui/material';

const SelectWrapper = ({
    name,
    label,
    options,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = evt => {
        const { value } = evt.target;
        setFieldValue(name, value);
    };

    const configControl = {
        fullWidth: true,
        variant: "outlined"
    }
    let errorMessage = null;

    const handleBlur = evt => {
        // const { value } = evt.target;
        // if (value === '') {
        //     configControl.error = true;
        //     errorMessage = "Dosage Form is Required";
        //     console.log("ERROR")
        // }
    }

    const configSelect = {
        ...field,
        ...otherProps,
        onChange: handleChange,
        onBlur: handleBlur,
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        errorMessage = meta.error;
        configControl.error = true;
    }

    return (
        <FormControl {...configControl}>
            <InputLabel>{label}</InputLabel>
            <Select
                {...configSelect}
                inputProps={{
                    name: '',
                    id: 'outlined-age-native-simple',
                }}
                MenuProps={{
                    style: { zIndex: 35001 }
                }}
            >
                {Object.keys(options).map((item, pos) => {
                    return (
                        <MenuItem
                            key={pos}
                            value={item}
                        >
                            {options[item]}
                        </MenuItem>
                    )
                })}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>
        </FormControl>
    );
};

export default SelectWrapper;