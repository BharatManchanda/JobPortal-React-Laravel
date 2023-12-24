import { Box, Button, FormControl, Grid, IconButton, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'
import PreForm from './Constant/PreForm';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { createUsersRequest, editUsersRequest } from '../../../Store/User/actions';

const CreateOrEdit = ({id = null}) => {
    const [data, setData] = React.useState(PreForm.User);
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
        if (data.id != null) {
            dispatch(editUsersRequest());
        } else {
            dispatch(createUsersRequest(data));
        }
    }

    return (
        <Box sx={{background: ThemeColor.white }} p={'15px'}>
            <Grid textAlign={'center'}>
                <Typography variant='h5'>{ data.id ? 'Edit': 'Create'} User</Typography>
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
                <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Password</Typography>
                <FormControl
                    variant="outlined"
                    size='small'
                    required>
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
                <FormControl variant="outlined" size='small'
                required>
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
            <Grid mt={2}>
                <Button variant='contained' color='secondary' onClick={handleSubmit}>Save</Button>
            </Grid>
        </Box>
    )
}

export default CreateOrEdit;
