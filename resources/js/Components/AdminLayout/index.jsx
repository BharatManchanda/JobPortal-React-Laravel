import React from 'react';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const AuthenticatedLayout = ({children}) => {
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));
    
    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <Sidebar/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {children}
                </Box>
            </Box>
        </>
    );
}
export default AuthenticatedLayout;