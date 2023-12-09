import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ThemeColor } from '../../../Helpers/StyleConstant';
import HexToRGBA from '../../../Util/hexToRGBA';

export default function Loader({loading}) {
  return (
    <>
        {loading &&
        <Box sx={{
          display: 'flex',
          position:'fixed',
          top:'0',
          left:'0',
          justifyContent:'center',
          width:'100vw',
          height:'100vh',
          alignItems:'center',
          background:HexToRGBA(ThemeColor.background,.4),
          zIndex:2,
          }} >
            <CircularProgress sx={{
              color: ThemeColor.primary,
              width:'50px !important',
              height:'50px !important',
              fontWeight:'900 !important',
              }} />
        </Box>}
    </>
  );
}