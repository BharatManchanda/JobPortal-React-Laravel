import { Radio, RadioGroup, FormControlLabel, FormLabel, Box, Button, FormControl, Grid, IconButton, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'
import PreForm from './Constant/PreForm';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { createUsersRequest, UpdateUserRequest, getUserRequest } from '../../../Store/User/actions';
import { UserRole } from '../../../Constant/UtilConstant';
import Loader from '../../../Components/Common/Loader';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router';

const CreateOrEdit = () => {
    let {id} = useParams();
    let user = useSelector(state => state.user)
    const [data, setData] = React.useState(id != null ? user.data : PreForm.User);
    const [showPassword, setShowPassword] = React.useState([]);
    const dispatch = useDispatch();

    function handleClickShowPassword(ind){
        if (showPassword.includes(ind)) {
            let newShowPassword = showPassword.filter((value) => value != ind);
            setShowPassword([...newShowPassword]);
        } else{
            setShowPassword([
                ...showPassword,
                ind,
            ]);
        }
    }
    
    function handleMouseDownPassword(event){
        event.preventDefault();
    }

    function handleChange(e){
        let {name, value} = e.target;
        setData({
            ...data,
            [name]:value,
        });
    }

    function handleSubmit(){
        dispatch(data.id ? UpdateUserRequest(data) : createUsersRequest(data));
    }

    React.useEffect(() => {
        if (id) {
            setData(user.data);
        }
    }, [user.loading]);

    React.useEffect(() => {
        if (id) {
            dispatch(getUserRequest({id:id}))
        }
    },[dispatch, id]);

    return (
        <Box sx={{background: ThemeColor.white }} p={'15px'}>
            <Loader loading={user.loading} />
            <ToastContainer />
            <Grid textAlign={'center'}>
                <Typography variant='h5'>{ id ? 'Edit': 'Create'} User</Typography>
            </Grid>
            <Grid mt={2} display={'flex'} flexDirection={'column'}>
                <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Name</Typography>
                <TextField
                    error={false?true:false}
                    type='name'
                    size='small'
                    label="Name"
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
                <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Email</Typography>
                <TextField
                    error={false?true:false}
                    type='email'
                    size='small'
                    label="Email"
                    name='email'
                    value={data.email}
                    onChange={handleChange} fullWidth required
                    helperText=""
                />
            </Grid>
            <Grid mt={2} display={'flex'} flexDirection={'column'}>
                <FormControl>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>User Role</Typography>
                    <RadioGroup row value={data.role} name="role" onChange={handleChange}>
                        {UserRole.map((value, index) => (
                            <FormControlLabel key={index} value={value.value} control={<Radio />} label={value.label} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Grid>
            {
                id == null && <>
                    <Grid mt={2} display={'flex'} flexDirection={'column'}>
                        <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Password</Typography>
                        <FormControl variant="outlined" size='small' required
                            sx={{
                                '& label.Mui-focused': {
                                    color: ThemeColor.secondary,
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: ThemeColor.secondary,
                                },
                            }}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput
                                type={showPassword.includes(1) ? 'text' : 'password'}
                                name="password"
                                onChange={handleChange}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => {handleClickShowPassword(1)}}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                    {showPassword.includes(1) ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Grid>
                    <Grid mt={2} display={'flex'} flexDirection={'column'}>
                        <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Confirm Password</Typography>
                        <FormControl variant="outlined" size='small' required sx={{
                                '& label.Mui-focused': {
                                    color: ThemeColor.secondary,
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: ThemeColor.secondary,
                                },
                            }}>
                            <InputLabel>Confirm Password</InputLabel>
                            <OutlinedInput
                                type={showPassword.includes(2) ? 'text' : 'password'}
                                name="confirm_password" onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => {handleClickShowPassword(2)}}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                        {showPassword.includes(2) ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                            />
                        </FormControl>
                    </Grid>
                </>
            }
            <Grid mt={2}>
                <Button variant='contained' color='secondary' onClick={handleSubmit}>Save</Button>
            </Grid>
        </Box>
    )
}

export default CreateOrEdit;
