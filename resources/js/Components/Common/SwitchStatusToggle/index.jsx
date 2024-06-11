import * as React from 'react';
import {Switch, Typography, DialogActions, DialogContent, Box, Button, Dialog} from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function SwitchStatusToggle({
    id,
    status,
    handleSubmit,
}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Switch
                checked={status ? true : false}
                onChange={handleClickOpen}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <Dialog
                fullWidth
                maxWidth={'xs'}
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <ErrorOutlineOutlinedIcon style={{ fontSize: 80 }} />
                    </Box>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <Typography variant="body1" color="initial">
                            Do you really want to active status.
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button
                        variant='contained' onClick={() => handleSubmit(id)}>Submit</Button>
                    <Button
                        variant='contained' color='error' onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
