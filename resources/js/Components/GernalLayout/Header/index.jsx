import React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Toolbar, Typography, IconButton, Badge, Tooltip, Avatar, Menu, MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Drawer, Divider, styled, TextField} from '@mui/material';
import ThemeButton from '../../Common/ThemeButton';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import { Links } from './Constant/Constant';
import { NavLink } from 'react-router-dom';
import "./style.scss"
import { Link } from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SendIcon from '@mui/icons-material/Send';

const Message = styled(Typography)(({ theme }) => ({
    maxWidth: 220,
    background: "#84baf9",
    color: '#fff',
    padding: '5px 10px',
    margin:'2px',
    display: 'inline-block',
    borderRadius: '10px',
}));

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
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [state, setState] = React.useState({
        right: false,
    });
    const user = JSON.parse(localStorage.getItem('user'));
    const settings = [
        {
            href:`/${user?.role}/dashboard`,
            label: 'Dashboard',
        },

        {
            href:'/logout',
            label: 'Logout'
        }
    ];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ display: 'flex'  }}>
            <AppBar component="nav" sx={{background: ThemeColor['primary']}}>
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant="h5" component="span"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        Moonlight
                    </Typography>
                    <Box>
                        {Links.map((value, index) => {
                            const {to, label} = value;
                            return (
                            <NavLink to={to} key={index} style={{
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
                    {
                        (user?.role ===  'client' || user?.role ===  'admin' || user?.role ===  'recruiter') ?
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <IconButton  sx={{marginRight:'10px'}} aria-label={notificationsLabel(10)}>
                                <Badge badgeContent={10} color='error'>
                                    <NotificationsActiveIcon sx={{color:ThemeColor.secondary}} />
                                </Badge>
                            </IconButton>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin = {{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting, index) => (
                                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                                        <NavLink to={setting.href} style={{color: "#000", textDecoration: "none"}}>
                                            <Typography textAlign="center">
                                                {setting.label}
                                            </Typography>
                                        </NavLink>
                                    </MenuItem>
                                ))}                                
                            </Menu>
                        </Box>
                        :
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <IconButton  sx={{marginRight:'10px'}} aria-label={notificationsLabel(10)}>
                                <Badge badgeContent={10} color='error'>
                                    <NotificationsActiveIcon sx={{color:ThemeColor.secondary}} />
                                </Badge>
                            </IconButton>
                            <ThemeButton sx={{m:"10px"}} variant='outlined' to="/login" component={Link} color='secondary'>Login</ThemeButton>
                            <ThemeButton sx={{m:"10px"}} variant='contained' to="/register" component={Link} color='secondary'>Register</ThemeButton>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DrawerAppBar;