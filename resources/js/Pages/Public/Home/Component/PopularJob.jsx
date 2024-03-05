import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

export default function PopularJob() {
    return (
        <Card sx={{ borderRadius: '15px' }} p={15}>
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight={'bolder'} component="p">
                    Deloitee.
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="p">
                    Deloitee Touche Tohmatsu Limited
                </Typography>
                <Typography gutterBottom variant="h5" component="span" color={'blue'} fontWeight={'bolder'}>
                    $457,677
                </Typography>
                <Typography gutterBottom variant="h6" component="div" fontWeight={'bolder'}>
                    Senior Investment Advisor
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div" fontWeight={'bolder'} color={'#536269'}>
                    New York, USA
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div" fontWeight={'bolder'} color={'#536269'}>
                    Full Time
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'center'}}>
                <Button size="medium" color="primary" variant='contained'>
                    Apply Now
                </Button>
            </CardActions>
        </Card>
    );
}