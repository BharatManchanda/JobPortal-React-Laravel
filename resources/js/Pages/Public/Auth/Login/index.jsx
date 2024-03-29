import React from 'react';
import { Divider, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography, Button, Box } from '@mui/material';
import ThemeButton from '../../../../Components/Common/ThemeButton';
import { Link, NavLink } from 'react-router-dom';
import { ThemeColor } from '../../../../Helpers/StyleConstant';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LoginImage from '../../../../assets/SVG/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserRequest } from '../../../../Store/Auth/Login/actions';
import { ToastContainer } from 'react-toastify';
import Loader from '../../../../Components/Common/Loader';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [data, setData] = React.useState({
        email:'admin@yopmail.com',
        password:'password',
    });
    const navigate = useNavigate();
    React.useEffect(()=>{
        let  token = localStorage.getItem('token');
        let  user = JSON.parse(localStorage.getItem('user'));
        if (token && user) {
            if (user.role == 'admin' || user.role == 'recruiter'){
                navigate(`/${user.role}/dashboard`);
            } else {
                navigate(`/`);
            }
        }
    }, []);
    const dispatch = useDispatch();
    const login = useSelector(state => state.login);

    function handleChange(e){
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        });
    }
    function handleSubmit(){
        dispatch(loginUserRequest(data, navigate));
    }

    return (
        <>
        <Box component="main" sx={{ p: 10 }}>
            <Grid container mt={3}>
                <Grid item lg={5}>
                    <ToastContainer />
                    <Loader loading={login.loading} />
                    <Paper sx={{padding:'25px', borderRadius:'25px'}}>
                        <Typography fontWeight={`bolder`} variant='h5'>Login</Typography>
                        <Typography fontWeight={`bolder`}>Doesn't have an account yet?
                            <Link to="/register">Sign up</Link>
                        </Typography>
                        <Grid mt={2} display={'flex'} flexDirection={'column'}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Email Address</Typography>
                            <TextField
                                type='email'
                                name='email'
                                size='small'
                                label="Enter Address"
                                fullWidth
                                value={data.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid display={'flex'} justifyContent={'space-between'} mt={2}>
                            <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}} >Password</Typography>
                            <NavLink to="/hgh" style={{
                                fontWeight: '600',
                                color:ThemeColor.secondary
                            }} >Forgot Password?</NavLink>
                        </Grid>
                        <Grid>
                            <TextField
                                type='password'
                                name='password'
                                size='small'
                                label="Password"
                                fullWidth
                                value={data.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid my={1}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                            </FormGroup>
                        </Grid>
                        <Grid my={1}>
                            <ThemeButton variant={'contained'} onClick={handleSubmit} color='secondary' fullWidth={true}>Login</ThemeButton>
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
        </Box>
        </>
    );
}

export default Login;