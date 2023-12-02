import React from 'react';
import { Box, Divider, Grid, Input, InputAdornment, TextField, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import Constants from './Constant/Constant';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './style.scss'
import ThemeButton from '../../Common/ThemeButton';

export default function Footer() {

    function generateLinks(links) {
        return (
            <Grid item p={3} lg={2} md={3}>
                <List sx={{marginLeft: '15px'}}>
                    {links.map((value, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemText primary={value.label} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        );
    }

    return (
        <React.Fragment>
            <Box sx={{background: ThemeColor.primary, color:'white', borderTopLeftRadius:'100px'}} >
                <Grid container marginTop={3}>
                    <Grid item md={.5}>
                    </Grid>
                    <Grid item md={4} lg={2.5} p={3}>
                        <Typography variant='h5' color={'white'}>Moonlight</Typography>
                        <Typography color={`white`} variant='subtitle1'>
                            3rd Floor, Kanji Kihetsey Building,
                            <br/>
                            K G Road, Girgaon</Typography>
                        <Box mt={3}>
                            <Typography>Connect with us</Typography>
                            <Box display={`flex`} justifyContent={`space-around`}>
                                {
                                    Constants.SocialMedia.map((value, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                {value.icon}
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>

                    {generateLinks(Constants.FooterLinkStep1)}
                    {generateLinks(Constants.FooterLinkStep2)}
                    {generateLinks(Constants.FooterLinkStep3)}

                    <Grid item p={3} lg={3}>
                        <Typography>Newsletter</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '10px' }}>
                            <MailOutlineIcon sx={{ color: ThemeColor.secondary, mr: 1, my: 0.5 }} />
                            <TextField  type='email' id="input-with-sx" label="Enter your email id" variant="standard"
                            />
                        </Box>
                        <Box mt={2}>
                            <ThemeButton variant="contained" color="secondary">Subscribe</ThemeButton>
                        </Box>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{background: '#fff', border:'1px solid #fff'}} />
                <Grid display={'flex'} justifyContent={'space-between'} p={3}>
                    <Typography> © 2023 Moonlight all right are reserved </Typography>
                    <Typography> Develope By <a href="http://" target="_blank" rel="noopener noreferrer">Bharat Manchanda</a></Typography>
                </Grid>
            </Box>
        </React.Fragment>
    );
}
