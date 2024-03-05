import { Box, Grid } from '@mui/material';
import React from 'react';
import JobCard from './Component/JobCard';

export default function Job() {
    return (
        <>
            <Grid container component="main" sx={{ p: 10 }}>
                <Grid lg={3}>
                </Grid>
                <Grid lg={6}>
                    {
                        Array(4).fill("").map((value, key) => (
                            <>
                                <JobCard />
                            </>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    );
}