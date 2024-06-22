// Header.jsx

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, TextField, InputBase,  IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import theme from '../assets/theme'; 
import SearchIcon from '@mui/icons-material/Search';
import LanguageSelect from './LanguageSelect';

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Add logic to change language settings in your application
  };
  
  return (
      <Toolbar sx={{
        bgcolor: '#fbf6f0',
        width: "100%",
        position: "fixed",
        zIndex: 100,
        top: 0, 
        padding: 0 }}>
        <Container sx={{maxWidth: "lg" }}>
        <Grid container justifyContent="space-between" alignItems="center"> 
          <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '43%' }}>
            <Typography variant="h7" >
                TRANG CHỦ
              </Typography>
              <Typography variant="h7" >
                VỀ CHÚNG TÔI
              </Typography>
              <Typography variant="h7" >
                SẢN PHẨM
              </Typography>
              <Typography variant="h7" >
                TIN TỨC
              </Typography>
          </Grid>

          <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="../public/Logo.jpg" alt="Logo" style={{ width: 100, height: 'auto' }} />
          </Grid>

          <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '43%' }}>
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
  
              <LanguageSelect
                selectedLanguage={selectedLanguage}
                onChange={handleLanguageChange}
              />

              

          </Grid>
        </Grid>
        
      
          
        </Container>
      </Toolbar>

  );
};

export default Header;
