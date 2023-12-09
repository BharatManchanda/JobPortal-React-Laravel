import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Badge} from '@mui/material';
import ThemeButton from '../../Common/ThemeButton';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import { Links } from './Constant/Constant';
import { NavLink } from 'react-router-dom';
import "./style.scss"
import { Link } from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

function DrawerAppBar(props) {
    
    return (
        <Box sx={{ display: 'flex'  }}>
            <AppBar component="nav" sx={{background: ThemeColor['primary']}}>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant="h5" component="span"
                        sx={{display: { xs: 'none', sm: 'block' }}}
                    >
                        Moonlight
                    </Typography>
                    <Box>
                        {Links.map((value, index) => {
                            const {to, label} = value;
                            return (
                            <NavLink to={to} key={index}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                marginLeft:'15px',
                                fontSize:'18px'
                            }}    
                            >
                                {label}
                            </NavLink>
                            );
                        })}
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <IconButton  sx={{marginRight:'10px'}} aria-label={notificationsLabel(10)}>
                            <Badge badgeContent={10} color='error'>
                                <NotificationsActiveIcon sx={{color:ThemeColor.secondary}} />
                            </Badge>
                        </IconButton>
                        <ThemeButton sx={{m:"10px"}} variant='outlined' to="/login" component={Link} color='secondary'>Login</ThemeButton>
                        <ThemeButton sx={{m:"10px"}} variant='contained' to="/register" component={Link} color='secondary'>Register</ThemeButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DrawerAppBar;