import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, InputBase, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import LanguageSelect from './LanguageSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledToolbar = styled(Toolbar)`
  background-color: #fbf6f0;
  width: 100%;
  z-index: 100;
  padding: 0;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 12px;
  text-decoration: none;
  color: inherit;
  padding: 0 10px;
  &.active {
    font-weight: bold;
    color: orange;
  }
`;

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language is English

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Add logic to change language settings in your application
  };

  return (
    <StyledToolbar>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-between', width: '43%' }}>
            <StyledNavLink to="/" exact activeClassName="active">
              TRANG CHỦ
            </StyledNavLink>
            <StyledNavLink to="/about" activeClassName="active">
              VỀ CHÚNG TÔI
            </StyledNavLink>
            <StyledNavLink to="/products" activeClassName="active">
              SẢN PHẨM
            </StyledNavLink>
            <StyledNavLink to="/news" activeClassName="active">
              TIN TỨC
            </StyledNavLink>
          </Grid>

          <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Logo src="/public/Logo.jpg" alt="Logo" />
          </Grid>

          <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '43%' }}>
            <InputBase
              placeholder="Tìm kiếm..."
              sx={{
                width: 200,
                height: 50,
                backgroundColor: '#fff',
                borderRadius: 4,
                paddingLeft: 2,
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
            />
            <LanguageSelect selectedLanguage={selectedLanguage} onChange={handleLanguageChange} />
            <IconButton sx={{ p: '10px' }} aria-label="account">
              <AccountCircleIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton sx={{ p: '10px' }} aria-label="cart">
              <ShoppingCartIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </StyledToolbar>
  );
};

export default Header;
