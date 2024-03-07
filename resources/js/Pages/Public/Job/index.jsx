import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import JobCard from './Component/JobCard';
import Filter from './Component/Filter';
import FastForward from './Component/RigthCard';
import PaginationButton from '../../../Components/Common/Pagination/Pagination';

export default function Job() {
    return (
        <>
            <Grid container spacing={2} component="main" sx={{ p: 10 }}>
                <Grid item lg={3}>
                    <Filter />
                </Grid>
                <Grid item lg={6}>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mb={3} alignItems={'center'}>
                        <Box width={'30%'}>
                            <Typography gutterBottom>1 - 20 of 4598</Typography>
                        </Box>
                        <Box width={'70%'} display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                            <Typography gutterBottom mr={3}>Send me jobs like these</Typography>
                            <FormControl>
                            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}
                                label="Sort By"
                                size='small'
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    {
                        Array(20).fill("").map((value, key) => (
                            <React.Fragment key={key}>
                                <JobCard />
                            </React.Fragment>
                        ))
                    }
                    <Box display={'flex'} justifyContent={'center'}>
                        <PaginationButton />
                    </Box>
                </Grid>
                <Grid item lg={3}>
                    <FastForward />
                </Grid>
            </Grid>
        </>
    );
}