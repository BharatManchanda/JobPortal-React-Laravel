import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import Card from './Component/Card';
import PaginationButton from '../../../Components/Common/Pagination/Pagination';
import Filter from './Component/Filter';

const CompanyCard = () => {
    return (
        <React.Fragment>
            <Box component="main" sx={{ p: 10 }}>
                <Typography variant="h6" fontWeight={'bolder'}>Top company hiring now</Typography>
                <Grid container>
                    <Grid item lg={3}>
                        <Filter />
                    </Grid>
                    <Grid item lg={9}>
                        <Grid container>
                            {Array(30).fill("").map((value, key) => (
                                <Grid key={key} item lg={6}>
                                    <Card/>
                                </Grid>
                            ))}
                        </Grid>
                        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
                            <PaginationButton />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default CompanyCard;
