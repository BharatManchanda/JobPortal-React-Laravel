import React from 'react'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { Grid, Typography } from '@mui/material';
import { ThemeColor } from '../../../Helpers/StyleConstant';
export default function NotFound(){
    return (
        <>
            <Grid sx={{height:'82.5vh'}} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Grid display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                    <ContentPasteSearchIcon sx={{ fontSize:'150px', color: ThemeColor.secondary}} />
                    <Typography sx={{marginTop:'15px'}} variant='h5'>No content found!</Typography>
                    <Typography variant='caption'>Oops! No data found yet!</Typography>
                </Grid>
            </Grid>
        </>
    );
}