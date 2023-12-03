import React from 'react';
import { Divider, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography, Button } from '@mui/material';
import ThemeButton from '../../../../Components/Common/ThemeButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import RegisterImage from '../../../../assets/SVG/Register';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
            <Grid container mt={3}>
                <Grid item lg={7} display={'flex'} flexDirection={'column'} justifyContent={'center'} >
                    <RegisterImage />
                </Grid>
                <Grid item lg={5}>
                    <Paper sx={{padding:'25px', borderRadius:'5px'}}>
                        <Typography fontWeight={`bolder`} variant='h5'>Register</Typography>
                        <Typography fontWeight={`bolder`}>If you already have an account,
                            <Link to="/login">Sign In</Link>
                        </Typography>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Name</Typography>
                            <TextField type='text' size='small'  label="Full Name" fullWidth ></TextField>
                        </Grid>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Phone</Typography>
                            <TextField type='number' size='small'  label="Phone" fullWidth ></TextField>
                        </Grid>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Email Address</Typography>
                            <TextField type='email' size='small'  label="Enter Address" fullWidth ></TextField>
                        </Grid>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Password</Typography>
                            <TextField type='password' size='small'  label="Password" fullWidth ></TextField>
                        </Grid>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Confirm Password</Typography>
                            <TextField type='password' size='small'  label="Confirm Password" fullWidth ></TextField>
                        </Grid>
                        <Grid my={2}>
                            <ThemeButton variant={'contained'} color='secondary' fullWidth={true}>Register</ThemeButton>
                        </Grid>
                        <Divider sx={{fontSize:'20px'}}>or register with</Divider>
                        <Grid display={'flex'}  justifyContent={'space-between'} gap={2} m={2}>
                            <Button variant='outlined' color='error' fullWidth
                            startIcon={
                            <GoogleIcon color='error' />
                            }>
                                Google
                            </Button>
                            <Button variant='outlined' color='primary' fullWidth startIcon={
                                <FacebookIcon/>
                            }>Facebook</Button>
                        </Grid>
                    </Paper>
                </Grid>
                {/* <Grid item lg={7} display={'flex'} justifyContent={'center'} >
                    <RegisterImage />
                </Grid> */}
            </Grid>
        </>
    );
}

export default Register;