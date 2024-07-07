import React, { useState } from 'react';
import { Box, Grid, Typography, InputBase,IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LanguageSelect from "../LanguageSelect";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const HeaderRight = ()=>{
    const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language is English

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        // Add logic to change language settings in your application
    };
    return (
        <Box xs={{with: "43%", height: "10vh"}}>
            <Grid container justifyContent="space-between" alignContent="center" spacing={3} sx={{ justifyContent: "space-between", alignContent: "center", bgcolor: '#fbf6f0', with: "43%", height: "10vh"}} >
                <Grid item xs="auto">
                <InputBase
                placeholder="Tìm kiếm..."
                sx={{
                  width: 200,
                  height: 50,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                  '&:focus': {
                    backgroundColor: '#f0f0f0',
                    boxShadow: '0 0 0 2px #a5c3f7',
                  },
                }}
                endAdornment={
                  <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                }
              >
              </InputBase>
                </Grid>
                <Grid item xs="auto">
                    <LanguageSelect
                    selectedLanguage={selectedLanguage}
                    onChange={handleLanguageChange}/>
                </Grid>
                <Grid item xs="auto">
                    <IconButton sx={{ p: '10px' }} aria-label="account">
                        <AccountCircleIcon sx={{ fontSize: 32 }} /> 
                    </IconButton>
                </Grid>
                <Grid item xs="auto">
                    <Typography fontSize={12} >
                        <IconButton sx={{ p: '10px' }} aria-label="cart">
                            <ShoppingCartIcon sx={{ fontSize: 32 }} /> 
                        </IconButton>
                    </Typography>
                </Grid>

            </Grid>
        </Box>
        

    )

}
export default HeaderRight;