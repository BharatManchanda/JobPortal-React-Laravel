import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FastForward() {
  return (
    <Card sx={{ maxWidth: 345, position: 'sticky', top:80 }}>
        <CardContent>
            <Typography gutterBottom variant="subtitle1" fontWeight={'bolder'}>
                Get 3X more profile views from it recruiters
            </Typography>
            <Typography variant="body2" color="text.primary">
                Increase your chances of callback with Naukri FastForward
            </Typography>
            <Button size="small" sx={{mt:2, fontWeight:'bolder'}}>
                Know More
            </Button>
        </CardContent>
    </Card>
  );
}