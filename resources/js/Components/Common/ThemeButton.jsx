import React from 'react';
import { Button } from '@mui/material';
import { ThemeColor } from '../../Helpers/StyleConstant';

export default function ThemeButton(props){
    return (
        <Button {...props}
            // sx={{
                
            // }}
        >
            {props.children}
        </Button>
    );
}