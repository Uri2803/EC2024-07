import React, { useState } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HederRight';
import Logo from './Logo';
import { Box, Grid } from '@mui/material';

const Header = ()=>{
    return(
        <Box sx={{
        bgcolor: '#fbf6f0',
        width: "100%",
        zIndex: 100,
        top: 0, 
        padding: 0 }}
        >
            <Grid container sx={{justifyContent: "space-between",
                                alignContent: "center"}}
            >
                <Grid item xs={4}>
                    <HeaderLeft/>
                </Grid>
                <Grid item xs={3}>
                   <Logo/>
                </Grid>
                <Grid item xs={4}>
                    <HeaderRight/>
                </Grid>

            </Grid>
                
              
        </Box>
       

    )
}

export default Header;