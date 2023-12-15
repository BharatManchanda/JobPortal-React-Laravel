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
import { Grid} from '@mui/material';
import Menus from './Constant/constant';
import { NavLink } from 'react-router-dom';
import './style.scss'
import { ThemeColor } from '../../../Helpers/StyleConstant';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChangeSubMenuToggle = (index) => {
        setSubMenu(subMenu == index ? false : index);
    }

    return (
        <>
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
                    {Menus.map((menu, index) => (
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
                                        {index % 2 === 0 ? <InboxIcon sx={{ color: ThemeColor.secondary }} /> : <MailIcon sx={{ color: ThemeColor.secondary }} />}
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
                <Divider />
            </Drawer>
        </>
    );
}