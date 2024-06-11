import { AppBar, Button, Dialog, DialogActions, DialogContent, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function DialogModel ({
    children,
    title,
    maxWidth='xs',
    open,
    handleClose,
    handleSubmit,
}) {
    function appBarLabel(label) {
        return (
            <Toolbar sx={{
                minHeight: '48px !important',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0px 12px !important'
            }}>
                <Typography textTransform={'capitalize'} variant="h6" noWrap component="div">
                {label}
                </Typography>
                <IconButton aria-label="" onClick={handleClose}>
                    <CloseRoundedIcon sx={{
                        color: '#fff'
                    }} />
                </IconButton>
            </Toolbar>
        );
    }
    return (
        <Dialog
            fullWidth
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
        >
            <AppBar position="static" color="primary">
                {appBarLabel(title)}
            </AppBar>
        <DialogContent>
            {children}

        </DialogContent>
        <DialogActions sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Button variant='contained' onClick={() => handleSubmit(id)}>Submit</Button>
            <Button variant='contained' color='error' onClick={handleClose}>Close</Button>
        </DialogActions>
    </Dialog>
    );
}