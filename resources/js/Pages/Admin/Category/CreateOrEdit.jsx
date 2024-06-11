import { Radio, RadioGroup, FormControlLabel, FormLabel, Box, Button, FormControl, Grid, IconButton, InputLabel, OutlinedInput, TextField, Typography, FormGroup, Switch } from '@mui/material'
import React from 'react'
import PreForm from './Constant/PreForm';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategoryRequest, createCategoryRequest, getCategoryListRequest } from '../../../Store/Category/actions';
import { UserRole } from '../../../Constant/UtilConstant';
import Loader from '../../../Components/Common/Loader';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router';

const CreateOrEdit = () => {
    let {id} = useParams();
    let user = useSelector(state => state.user)
    const [data, setData] = React.useState(id != null ? user.data : PreForm.Category);
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
        dispatch(data.id ? updateCategoryRequest(data) : createCategoryRequest(data));
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
    }, [id]);

    return (
        <>
            <Loader loading={user.loading} />
            {!user.loading && <Box sx={{background: ThemeColor.white }} p={'15px'}>
                <ToastContainer />
                <Grid textAlign={'center'}>
                    <Typography variant='h5'>{ id ? 'Edit': 'Create'} Category</Typography>
                </Grid>
                <Grid mt={2} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Title</Typography>
                    <TextField
                        error={false?true:false}
                        type='name'
                        size='small'
                        label="Title"
                        name='title'
                        value={data.title}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>
                <Grid mt={2} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Description</Typography>
                    <TextField
                        error={false?true:false}
                        type='email'
                        size='small'
                        label="Description"
                        name='description'
                        value={data.description}
                        onChange={handleChange} fullWidth required
                        rows={3} multiline
                        helperText=""
                    />
                </Grid>
                <Grid mt={2} display={'flex'} flexDirection={'column'}>
                    <Typography
                        fontWeight='bolder'
                        fontSize='14px'
                        component='small'
                        sx={{marginBottom:'10px'}}
                    >Status</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch
                                checked={data.status ? true : false}
                                name='status'
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        status : e.target.checked ? 1 : 0,
                                    });
                                }}
                            />}
                            label={`${data.status ? 'Active' : 'Deactive'}`}
                        />
                    </FormGroup>
                </Grid>
                <Grid mt={2}>
                    <Button variant='contained' color='secondary' onClick={handleSubmit}>Save</Button>
                </Grid>
            </Box>}
        </>
    )
}

export default CreateOrEdit;
