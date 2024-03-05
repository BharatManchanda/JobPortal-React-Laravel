import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Category() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }} p={2} style={{
        border: '2px solid blue',
        borderRadius: '15px',
        cursor: 'pointer',
    }}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ width: '30%' }}>
            <AccountBalanceIcon sx={{fontSize: '70px', color:'blue', background: '#eef6ff', padding:'12px', borderRadius: '15px'}} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" fontWeight={'bold'}>
                    Account & Finance
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    (331) Position open
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Remote jobs 
                </Typography>
            </CardContent>
        </Box>
        </Card>
  );
}