import React from 'react';
import { Divider, Grid, Paper, TextField, Typography, Button } from '@mui/material';
import ThemeButton from '../../../../Components/Common/ThemeButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import RegisterImage from '../../../../assets/SVG/Register';
import { Link } from 'react-router-dom';
import Constant from './Constant';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../../../../Store/Auth/Register/actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [data, setData] = React.useState(_.cloneDeep(Constant.register));
    const register = useSelector(store => store.register);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({
            ...data,
            [name]:value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerRequest(data));
    }
    return (
        <>
            <Grid container mt={3}>
                <ToastContainer />
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
                            <TextField
                                error={false?true:false}
                                type='text'
                                size='small'
                                label="Full Name"
                                name='name'
                                value={data.name}
                                onChange={handleChange} fullWidth required 
                                helperText=""
                            />
                        </Grid>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Phone</Typography>
                            <TextField
                                error={false?true:false}
                                type='number'
                                size='small'
                                label="Phone"
                                name='phone'
                                value={data.phone}
                                onChange={handleChange} fullWidth required
                                helperText=""
                            />
                        </Grid>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Email Address</Typography>
                            <TextField
                                error={false?true:false}
                                type='email'
                                size='small'
                                label="Enter Address"
                                name='email'
                                value={data.email}
                                onChange={handleChange} fullWidth required
                                helperText=""
                            />
                        </Grid>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Password</Typography>
                            <TextField
                                error={false?true:false}
                                type='password'
                                size='small'
                                label="Password"
                                name='password'
                                value={data.password}
                                onChange={handleChange} fullWidth required
                                helperText=""
                            />
                        </Grid>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Confirm Password</Typography>
                            <TextField
                                error={false?true:false}
                                type='password'
                                size='small'
                                label="Confirm Password"
                                name='confirm_password'
                                value={data.confirm_password}
                                onChange={handleChange} fullWidth required
                                helperText=""
                            />
                        </Grid>
                        <Grid my={2}>
                            <ThemeButton variant={'contained'} color='secondary' fullWidth onClick={handleSubmit}>Register</ThemeButton>
                        </Grid>
                        <Divider sx={{fontSize:'20px'}}>or register with</Divider>
                        <Grid display={'flex'}  justifyContent={'space-between'} gap={2} m={2}>
                            <Button variant='outlined' color='error' fullWidth startIcon={ <GoogleIcon color='error' />}>Google</Button>
                            <Button variant='outlined' color='primary' fullWidth startIcon={<FacebookIcon/>}>Facebook</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default Register;