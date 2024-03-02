import { Box, FormControl, Grid, InputLabel, TextField, Typography, Select, MenuItem } from '@mui/material'
import React from 'react'
import PreForm from './Constant/PreForm';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import Loader from '../../../Components/Common/Loader';
import { ToastContainer } from 'react-toastify';

const CreateOrEdit = () => {
    const [data, setData] = React.useState(PreForm.Job);
    function handleChange(e){
        let {name, value} = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }
    return (
        <Box bgcolor={ThemeColor.white} p={'15px'}>
            <Loader loading={false} />
            <ToastContainer />
            <Grid textAlign={'center'}>
                <Typography variant='h5'>{ false ? 'Edit': 'Create'} Job</Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Title</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        label="Title"
                        name='title'
                        defaultValue={data.title}
                        value={data.title}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Industry Type</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        label="Industry Type"
                        name='industry_type'
                        value={data.industry_type}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Description</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        multiline
                        rows={3}
                        size='small'
                        label="Description"
                        name='description'
                        value={data.description}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Preferred Skills</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        multiline
                        rows={3}
                        label="Preferred Skills"
                        name='preferred_skills'
                        value={data.job_location}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Department</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        label="Department"
                        name='department'
                        value={data.department}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Education</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        label="Education"
                        name='education'
                        value={data.education}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Key Skills</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        label="Key Skills"
                        name='key_skills'
                        value={data.key_skills}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Job Location</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        label="Job Location"
                        name='job_location'
                        value={data.job_location}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Benefits</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        multiline
                        rows={3}
                        label="Benefits"
                        name='benefits'
                        value={data.job_location}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <Typography fontWeight='bolder' fontSize='14px' component='small' sx={{marginBottom:'10px'}}>Responsibilities</Typography>
                    <TextField
                        error={false ? true : false}
                        type='text'
                        size='small'
                        multiline
                        rows={3}
                        label="Responsibilities"
                        name='responsibilities'
                        value={data.job_location}
                        onChange={handleChange} fullWidth required
                        helperText=""
                    />
                </Grid>

                <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                    <FormControl required size='small'>
                        <InputLabel>Experience</InputLabel>
                        <Select
                            value={data.experience}
                            label="Experience"
                            onChange={handleChange}
                        >
                            <MenuItem value={'fresher'}>Fresher</MenuItem>
                            {
                                Array.from({length: 10}, (_, index) => index + 1)
                            }
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default CreateOrEdit;
