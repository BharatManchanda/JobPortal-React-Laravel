import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function JobCard() {
    return (
        <Card sx={{borderRadius:'10px', mb: '15px'}}>
            <CardContent>
                <Grid container>
                    <Grid item lg={9}>
                        <Typography gutterBottom variant="subtitle1" fontWeight={'bolder'} component="div">
                            Java Developer
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" fontWeight={'bolder'} component="div">
                            Capgemini <StarRoundedIcon sx={{fontSize: '16px', marginBottom:'-2px', color: 'gold'}} /> 3.9 | 34229 Reviews
                        </Typography>
                        <Box display={'flex'}>
                            <Typography variant="body2" color="text.secondary">
                                <WorkOutlineOutlinedIcon sx={{fontSize: '16px', marginBottom:'-2px'}} /> 6-9 Years
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <CurrencyRupeeOutlinedIcon sx={{fontSize: '16px', marginBottom:'-2px', ml:1}}/> Not Disclosed
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <WorkOutlineOutlinedIcon sx={{fontSize: '16px', marginBottom:'-2px', ml:1}} /> Hybrid
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            <LocationOnIcon sx={{fontSize: '16px', marginBottom:'-2px', }} /> Kolkata, Hyderabad/Secunderabad, Pune, Chennai, Bangalore/Bengaluru, Delhi / NCR, Mumbai (All Areas)
                        </Typography>
                        {
                            ['Html', 'Javascript', 'Laravel', 'Php', 'CSS'].map((value, index) => (
                                <Typography color="text.secondary" variant='caption' sx={{
                                    mr: '15px',
                                    mt: '15px',
                                    display: 'inline-block'
                                }}>
                                    {value}
                                </Typography>
                            ))
                        }
                    </Grid>
                    <Grid item lg={3} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                        <CardMedia
                            component="img"
                            sx={{ width: 50, background: 'red', borderRadius:'50%' }}
                            image="https://static-01.daraz.com.np/other/shop/a16737a524303c0fa1f667832c227e76.png_2200x2200q75.jpg_.webp"
                            alt="Live from space album cover"
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}
