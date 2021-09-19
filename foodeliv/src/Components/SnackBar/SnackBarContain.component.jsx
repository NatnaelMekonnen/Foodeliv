import { useEffect, useState } from "react";
import MuiAlert from '@mui/material';
import { Snackbar } from "@mui/material";
import './SnackBar.style.scss'

const SnackBarContain = (props) => {
    const [open, setOpen] = useState(false);
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const snackBarToggle = () => {
        setOpen(true)
    }

    useEffect(() => {
        if (props.error || props.data) snackBarToggle();
    }, [props.error, props.data])

    console.log(props.error + " " + props.data)

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            // style={{
            //     width: 'fit-content',
            //     height: 'fit-content',
            // }}
        >
            <Alert onClose={handleClose} severity={props.error ? "error" : props.data ? "success" : ""}>
                {props.msg && props.error ? props.msg : props.error ? "Error!" : null}
                {props.msg && props.data ? props.msg : props.data ? "Sucess!" : null}
            </Alert>
        </Snackbar>
    )
}

export default SnackBarContain;




