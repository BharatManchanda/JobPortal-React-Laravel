import React from 'react';
import { Divider, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography, Button } from '@mui/material';
import ThemeButton from '../../../../Components/Common/ThemeButton';
import { NavLink } from 'react-router-dom';
import { ThemeColor } from '../../../../Helpers/StyleConstant';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LoginImage from '../../../../assets/SVG/Login';

function Login() {
    return (
        <>
            <Grid container mt={3}>
                <Grid item lg={5}>
                    <Paper sx={{padding:'25px', borderRadius:'25px'}}>
                        <Typography fontWeight={`bolder`} variant='h5'>Login</Typography>
                        <Typography fontWeight={`bolder`}>Doesn't have an account yet?
                            <a href="">Sign up</a>
                        </Typography>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Email Address</Typography>
                            <TextField type='email' size='small'  label="Enter Address" fullWidth ></TextField>
                        </Grid>
                        <Grid display={'flex'} justifyContent={'space-between'} mt={2}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}} >Password</Typography>
                            <NavLink to="/hgh" style={{
                                fontWeight: '600',
                                color:ThemeColor.secondary
                            }} >Forgot Password?</NavLink>
                        </Grid>
                        <Grid>
                            <TextField type='email' size='small'  label="Password" fullWidth></TextField>
                        </Grid>
                        <Grid my={1}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                            </FormGroup>
                        </Grid>
                        <Grid my={1}>
                            <ThemeButton variant={'contained'} color='secondary' fullWidth={true}>Login</ThemeButton>
                        </Grid>
                        <Divider sx={{fontSize:'20px'}}>or login with</Divider>
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
                <Grid item lg={7} display={'flex'} justifyContent={'center'} >
                    <LoginImage />
                </Grid>
            </Grid>
        </>
    );
}

export default Login;