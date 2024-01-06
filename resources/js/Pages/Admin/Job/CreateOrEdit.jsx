import { Radio, RadioGroup, FormControlLabel, FormLabel, Box, Button, FormControl, Grid, IconButton, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'
import PreForm from './Constant/PreForm';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { createUsersRequest, UpdateUserRequest, getUserRequest } from '../../../Store/User/actions';
import Loader from '../../../Components/Common/Loader';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router';

const CreateOrEdit = () => {
    const [data, setData] = React.useState(PreForm.Job);
    function handleChange(e){

    }
    return (
        <Box bgcolor={ThemeColor.white} p={'15px'}>
            <Loader loading={false} />
            <ToastContainer />
            <Grid textAlign={'center'}>
                <Typography variant='h5'>{ false ? 'Edit': 'Create'} User</Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid item lg={6} mt={2} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Title</Typography>
                    <TextField
                        error={false ? true : false}
                        type='name'
                        size='small'
                        label="Title"
                        name='title'
                        value={data.title}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>
                <Grid item lg={6} mt={2} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Title</Typography>
                    <TextField
                        error={false ? true : false}
                        type='name'
                        size='small'
                        label="Title"
                        name='title'
                        value={data.title}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

            </Grid>
        </Box>
    )
}

export default CreateOrEdit;
