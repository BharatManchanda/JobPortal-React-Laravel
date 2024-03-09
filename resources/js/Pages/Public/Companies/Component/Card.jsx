import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Chip, Grid, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CompanyCard() {
    return (
        <Card sx={{ maxWidth: 500, p:2, borderRadius:5, m:1 }} variant='outlined'>
            <Grid conatiner display={'flex'}>
                <Grid item sm={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <CardMedia
                        component="img"
                        height="194"
                        alt="Paella dish"
                        sx={{ width: 50, height:50, background: 'red', borderRadius:'50%' }}
                        image="https://static-01.daraz.com.np/other/shop/a16737a524303c0fa1f667832c227e76.png_2200x2200q75.jpg_.webp"
                    />
                </Grid>
                <Grid item sm={9}>
                    <Typography variant="body1" fontWeight={'bolder'}>Gaea Technologies</Typography>
                    <Typography variant="body2" color="text.secondary"><StarIcon sx={{color: 'gold', marginBottom: '-5px'}}/> 3.8 | 4 reviews</Typography>
                    <Chip size='small' label="Forign MNC" sx={{mr:2, mt:1}} />
                    <Chip size='small' label="Eng. & Construction" sx={{mr:2, mt:1}} />
                </Grid>
            </Grid>
        </Card>
    );
}