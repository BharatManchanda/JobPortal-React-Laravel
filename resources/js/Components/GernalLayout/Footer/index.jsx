import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Footer() {
  return (
    <React.Fragment>
        <Box>
            <Grid container spacing={3}>
                <Grid item lg={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus soluta saepe ipsa, id quo, et illum incidunt excepturi est ea necessitatibus tempora veniam. Nostrum ducimus quae eligendi corrupti, dolore voluptate.</Grid>
                <Grid item lg={3}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item lg={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus soluta saepe ipsa, id quo, et illum incidunt excepturi est ea necessitatibus tempora veniam. Nostrum ducimus quae eligendi corrupti, dolore voluptate.</Grid>
                <Grid item lg={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus soluta saepe ipsa, id quo, et illum incidunt excepturi est ea necessitatibus tempora veniam. Nostrum ducimus quae eligendi corrupti, dolore voluptate.</Grid>=
            </Grid>
        </Box>
    </React.Fragment>
  );
}
