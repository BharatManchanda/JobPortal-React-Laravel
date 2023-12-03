import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Toolbar, Typography } from '@mui/material';
export default function GernalLayout({children}){
    return(
        <React.Fragment>
            <Box>
                <Header />
                    <Box component="main" sx={{ p: 10 }}>
                    {children}
                    </Box>
                <Footer />
            </Box>
        </React.Fragment>
    );
}