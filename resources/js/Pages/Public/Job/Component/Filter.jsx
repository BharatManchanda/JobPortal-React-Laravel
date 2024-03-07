import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Slider } from '@mui/material';

export default function Filter() {
    return (
        <Card sx={{ maxWidth: 345, position: 'sticky', top:80}}>
            <CardContent>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="button" component="div">
                        All Filters
                    </Typography>
                    <Button>Clear Filter</Button>
                </Box>
                <Divider />
                <Typography my={2} variant="subtitle1" fontWeight={'bolder'}>
                    Work mode
                </Typography>
                <FormGroup>
                    {['Work from office', 'Hybrid', 'Remote', 'Temp. WFH due to  Covid'].map((value, index) => (
                        <FormControlLabel key={index} control={<Checkbox />} label={`${value} (${Math.floor(Math.random() * (30 - 20 + 1)) + 20})`} />
                    ))}
                </FormGroup>
                <Divider />
                <Typography my={2} variant="subtitle1" fontWeight={'bolder'}>
                    Experience
                </Typography>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                <Divider />
                <Typography my={2} variant="subtitle1" fontWeight={'bolder'}>
                    Location
                </Typography>
                <FormGroup>
                    {['Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Mumbai', 'Noida', 'Gurugram', 'Kolkata', 'Ahmedabad', 'Coimbatore', 'Thiruvananthapuram', 'Chandigarh'].map((value, index) => (
                        <FormControlLabel key={index} control={<Checkbox />} label={`${value} (${Math.floor(Math.random() * (30 - 20 + 1)) + 20})`} />
                    ))}
                </FormGroup>
                <Divider />
                <Typography my={2} variant="subtitle1" fontWeight={'bolder'}>
                    Salary
                </Typography>
                <FormGroup>
                    {['3-6 Lakhs', '6-10 Lakhs', '10-15 Lakhs'].map((value, index) => (
                        <FormControlLabel key={index} control={<Checkbox />} label={`${value} (${Math.floor(Math.random() * (30 - 20 + 1)) + 20})`} />
                    ))}
                </FormGroup>
                <Divider />
                <Typography my={2} variant="subtitle1" fontWeight={'bolder'}>
                    Company type
                </Typography>
                <FormGroup>
                    {['India MNC'].map((value, index) => (
                        <FormControlLabel key={index} control={<Checkbox />} label={`${value} (${Math.floor(Math.random() * (30 - 20 + 1)) + 20})`} />
                    ))}
                </FormGroup>
                <Divider />
                <Typography my={2} variant="subtitle1" fontWeight={'bolder'}>
                    Education
                </Typography>
                <FormGroup>
                    {['B.Tech', 'MCA', 'M.Tech'].map((value, index) => (
                        <FormControlLabel key={index} control={<Checkbox />} label={`${value} (${Math.floor(Math.random() * (30 - 20 + 1)) + 20})`} />
                    ))}
                </FormGroup>
                <Divider />
                <Typography my={2} variant="subtitle1" fontWeight={'bolder'}>
                    Freshness
                </Typography>
            </CardContent>
        </Card>
    );
}