import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Badge, Box, Grid, Menu, MenuItem, Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import './style.scss'
import { ThemeColor } from '../../../Helpers/StyleConstant';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Menus from './Constant/constant';

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [subMenu, setSubMenu] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const mobileMenuId = 'primary-search-account-menu-mobile';
    let role = JSON.parse(localStorage.getItem('user')).role;

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChangeSubMenuToggle = (index) => {
        setSubMenu(subMenu == index ? false : index);
    }

    return (
        <>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Grid item>
                            <Typography variant="h6">MoonLight</Typography>
                        </Grid>
                        <Grid item>
                            <Badge sx={{mr:2}} badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                            <Badge sx={{mr:1}} badgeContent={17} color="error">
                                <MailIcon />
                            </Badge>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem>
                                    <Link to='/logout'>Logout</Link>
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>


                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Grid>
                            <Typography variant='h5' component='h5' color='white'>
                                MoonLight
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </Grid>
                    </Grid>
                </DrawerHeader>
                <Divider color='white' />
                <List>
                    {Menus[role].map((menu, index) => (
                        <React.Fragment key={index}>
                            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                    component={menu.isSubmenu ? 'li' : NavLink} to={menu.to}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                    >
                                        {menu.icon}
                                        {/* <DashboardIcon sx={{ color: ThemeColor.secondary }} /> */}
                                        {/* {index % 2 === 0 ? <InboxIcon sx={{ color: ThemeColor.secondary }} /> : <MailIcon sx={{ color: ThemeColor.secondary }} />} */}
                                    </ListItemIcon>
                                    <ListItemText onClick={() => {
                                        handleChangeSubMenuToggle(index);
                                    }} primary={menu.label} sx={{ opacity: open ? 1 : 0, color: 'white !important' }} />
                                    {(menu.isSubmenu && open) && (index == subMenu ? <KeyboardArrowDownIcon onClick={() => { handleChangeSubMenuToggle(index) }} sx={{ color: '#fff' }} /> : <KeyboardArrowRightIcon onClick={() => { handleChangeSubMenuToggle(index) }} sx={{ color: '#fff' }} />)}
                                </ListItemButton>
                            </ListItem>

                            {(menu.isSubmenu && !!menu.subMenu.length && subMenu == index && open) && (
                                <List sx={{ paddingLeft: 2 }}>
                                    {menu.subMenu.map((subMenuItem, subIndex) => (
                                        <ListItem key={subIndex} disablePadding>
                                            <ListItemButton sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                            }}
                                                component={NavLink} to={subMenuItem.to}
                                            >
                                                <ListItemIcon>
                                                    {subIndex % 2 === 0 ? <InboxIcon sx={{ color: ThemeColor.secondary }} /> : <MailIcon sx={{ color: ThemeColor.secondary }} />}
                                                </ListItemIcon>
                                                <ListItemText primary={subMenuItem.label} sx={{ color: 'white !important' }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        </>
    );
}