import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Toolbar, Typography, IconButton, Drawer, styled, TextField, AppBar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useDispatch, useSelector } from 'react-redux';

export default function GernalLayout({children}){
    const [state, setState] = React.useState({
        right: false,
        // 350: true
    });

    const [message, setMessage] = React.useState(Array(15).fill());
    const dispatch = useDispatch();
    let scrollRef = useRef(null);

    const Message = styled(Typography)(({ theme }) => ({
        maxWidth: 220,
        background: "#84baf9",
        color: '#fff',
        padding: '5px 10px',
        margin:'2px',
        display: 'inline-block',
        borderRadius: '10px',
    }));

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    }

    function scrollBottom() {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            });
        }
    }

    // React.useEffect(() => {
    //     if (state[350]) {
    //         scrollBottom();
    //     }
    // },[state, scrollRef])

    React.useEffect(() => {
        const container = scrollRef.current;
        console.log(container,"container");
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }, [message]);

    const list = () => (
        <Box sx={{ width: 350 }} role="presentation">
            <AppBar position="static" sx={{
                height:'50px !important',
                padding:'0px 10px !important',
            }}>
                <Toolbar sx={{
                    maxHeight: '50px !important',
                    minHeight: '50px !important',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    p:'0 !important',
                }}>
                    <IconButton aria-label="" sx={{color: '#fff'}} onClick={toggleDrawer(350, false)}>
                        <KeyboardBackspaceOutlinedIcon />
                    </IconButton>
                    <Typography variant="body1" component="p">
                        Help Desk
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box p={1} gap={2} sx={{
                marginTop: '15%',
                width: '95%',
                position: 'absolute',
                top: '1px',
                height: '80% !important',
                overflowY: 'auto',
            }}
            ref={scrollRef}
            >
                {message.map((item, key) => ( <React.Fragment key={key}>
                    <Box textAlign={'right'}>
                        <Message variant='subtitle1' component={'span'}>Hi Admin</Message>
                    </Box>

                    <Box textAlign={'left'}>
                        <Message variant='subtitle1' component={'span'}>Hi Client</Message>
                    </Box>
                </React.Fragment>))}
                {/* <Box ref={scrollRef}>
                    
                </Box> */}
            </Box>


            <Box p={1} gap={2} display={'flex'} sx={{
                width: '95%',
                position: 'absolute',
                bottom: '1px',
                justifyContent: 'space-between',
            }}>
                <Box p={1} gap={2} display={'flex'} sx={{
                    width: '90%',
                    position: 'absolute',
                    bottom: '1px',
                    justifyContent: 'absolute',
                }}>
                    <TextField
                        id=""
                        value={""}
                        label="Type Message..."
                        size='small'
                        onClick={(e) => {e.stopPropagation()}}
                        fullWidth
                    />
                    <IconButton aria-label="" onClick={(e) => {e.stopPropagation()}}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )

    return(
        <React.Fragment>
            <Box sx={{
                position:'fixed',
                bottom:'10px',
                right: '10px',
            }}>
                <IconButton
                    aria-label=""
                    onClick={
                        toggleDrawer(350, true)
                    }
                    sx={{
                        width: '50px',
                        height: '50px',
                        color: '#fff',
                        background: '#0000ff',
                        "&:hover":{
                            background: '#fff',
                            color: '#0000ff',
                            transition: '.5s all',
                            boxShadow: '1px 0px 5px 2px #0000006b'
                        }
                    }}
                    >
                    <ChatIcon/>
                </IconButton>

                <Drawer
                    anchor={"right"}
                    open={state[350]}
                    onClose={toggleDrawer(350, false)}
                >
                    {list()}
                </Drawer>
            </Box>
            <Box>
                <Header />
                    {children}
                <Footer />
            </Box>
        </React.Fragment>
    );
}