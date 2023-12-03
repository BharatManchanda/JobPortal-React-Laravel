import React from 'react';
import { Button } from '@mui/material';
import { ThemeColor } from '../../Helpers/StyleConstant';

export default function ThemeButton({variant, color, fullWidth, component, rounded, children, to}){
    console.log();
    return (
        <Button fullWidth={fullWidth?true:false}
        variant={variant}
        to={to}
        component={component}
        style={{
            background: variant=='contained' ? ThemeColor[color]:'',
            outline:'red',
            color: variant=='outlined' ? ThemeColor[color] : '#1B1A17',
            margin:'5px',
            border: `1px solid ${ThemeColor[color]}`,
            }}>
            {children}
        </Button>
    );
}