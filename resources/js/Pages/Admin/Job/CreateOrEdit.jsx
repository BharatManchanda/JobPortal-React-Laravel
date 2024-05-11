import { Box, FormControl, Grid, InputLabel, TextField, Typography, Select, MenuItem, Chip, Button } from '@mui/material'
import React from 'react'
import PreForm from './Constant/PreForm';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import Loader from '../../../Components/Common/Loader';
import { ToastContainer } from 'react-toastify';
import Constant from './Constant/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { createJobRequest, getJobRequest } from '../../../Store/Job/actions';
import { useParams } from 'react-router';

const CreateOrEdit = () => {
    const [data, setData] = React.useState(PreForm.Job);
    const [enter, setEnter] = React.useState("");
    const {id} = useParams();
    const dispatch = useDispatch();
    const job = useSelector(state => state.job);

    function handleChange(e) {
        let {name, value} = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    const handleDelete = (value) => {
        setData({
            ...data,
            key_skills: data.key_skills.filter((item) => item != value),
        });
    }

    const handleSubmit = () => {
        dispatch(createJobRequest(data));
    }

    React.useEffect(() => {
        if (id != null) {
            setData(job.data);
        }
    }, [job.loading]);
    
    React.useEffect(() => {
        if (id) {
            dispatch(getJobRequest({id:id}));
        }
    }, []);

    return (
        <Box bgcolor={ThemeColor.white} p={'15px'}>
            <Loader loading={job.loading} />
            <ToastContainer />
            {!job.loading && <>
                <Grid textAlign={'center'}>
                    <Typography variant='h5'>{ data.id ? 'Edit': 'Create'} Job</Typography>
                </Grid>
                <Grid container spacing={2} mt={1}>
                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
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

                    <Grid item lg={12} display={'flex'} flexDirection={'column'}>
                        <Box>
                            {data?.key_skills?.map((value, index) => (
                                <Chip key={index} label={value} color='primary' onDelete={() => handleDelete(value)} sx={{mr:1, mb:1}} />
                            ))}
                        </Box>
                        <TextField
                            error={false ? true : false}
                            type='text'
                            size='small'
                            label="Key Skills"
                            name='key_skills'
                            value={enter}
                            placeholder='Please type Key skill then preass enter'
                            onChange={(e) => { setEnter(e.target.value) } } fullWidth required
                            helperText=""
                            onKeyUp={(event) => {
                                if (event.key === 'Enter' && !data.key_skills.includes(event.target.value)) {
                                    setData({
                                        ...data,
                                        [event.target.name]: [...data.key_skills, event.target.value]
                                    })
                                    setEnter("");
                                }
                            }}
                        />
                        <Typography variant='caption' color={'success'}>Please type Key skill then preass enter</Typography>
                    </Grid>

                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
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
                        <FormControl required size='small'>
                            <InputLabel>Experience</InputLabel>
                            <Select
                                name={'experience'}
                                value={data.experience}
                                label="Experience"
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>Fresher</MenuItem>
                                {Array(10).fill().map((_, index) => (
                                    <MenuItem key={index} value={index+1}>{index+1} Year</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                        <TextField
                            error={false ? true : false}
                            type='text'
                            size='small'
                            multiline
                            rows={3}
                            label="Benefits"
                            name='benefits'
                            value={data.benefits}
                            onChange={handleChange} fullWidth required
                            helperText=""
                        />
                    </Grid>

                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                        <TextField
                            error={false ? true : false}
                            type='text'
                            size='small'
                            multiline
                            rows={3}
                            label="Responsibilities"
                            name='responsibilities'
                            value={data.responsibilities}
                            onChange={handleChange} fullWidth required
                            helperText=""
                        />
                    </Grid>

                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                        <TextField
                            error={false ? true : false}
                            type='text'
                            size='small'
                            label="Ablity to Relocate"
                            name='ability_to_relocate'
                            value={data.ability_to_relocate}
                            onChange={handleChange} fullWidth required
                            helperText=""
                        />
                    </Grid>


                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                        <TextField
                            error={false ? true : false}
                            type='text'
                            size='small'
                            label="Speak Employee Phone No"
                            name='speak_employe_phone_no'
                            value={data.speak_employe_phone_no}
                            onChange={handleChange} fullWidth required
                            helperText=""
                        />
                    </Grid>

                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                        <TextField
                            error={false ? true : false}
                            type='text'
                            size='small'
                            label="Shift Schedule"
                            name='shift_schedule'
                            value={data.shift_schedule}
                            onChange={handleChange} fullWidth required
                            helperText=""
                        />
                    </Grid>

                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                        <FormControl required size='small'>
                            <InputLabel>Job Type</InputLabel>
                            <Select
                                name='job_type'
                                value={data.job_type}
                                label="Job Type"
                                onChange={handleChange}
                            >
                                {Constant.JobType.map((value, index) => (
                                    <MenuItem key={index} value={value}>{value}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={6} display={'flex'} flexDirection={'column'}>
                        <FormControl required size='small'>
                            <InputLabel>Status</InputLabel>
                            <Select
                                name='status'
                                value={data.status}
                                label="Status"
                                onChange={handleChange}
                            >
                                <MenuItem value={'active'}>Active</MenuItem>
                                <MenuItem value={'inactive'}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <Button variant='contained' color='secondary' onClick={handleSubmit}>Save</Button>
                </Box>
            </>}
        </Box>
    )
}

export default CreateOrEdit;
