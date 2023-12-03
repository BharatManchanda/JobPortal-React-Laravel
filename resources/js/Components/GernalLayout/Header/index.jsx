import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import ThemeButton from '../../Common/ThemeButton';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import { Links } from './Constant/Constant';
import { NavLink } from 'react-router-dom';
import "./style.scss"
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

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
                        <ThemeButton sx={{m:"10px"}} variant='outlined' to="/login" component={Link} color='secondary'>Login</ThemeButton>
                        <ThemeButton sx={{m:"10px"}} variant='contained' to="/register" component={Link} color='secondary'>Register</ThemeButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DrawerAppBar;