import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, InputBase, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import LanguageSelect from './LanguageSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledToolbar = styled(Toolbar)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
 
`;
const Logo = styled.img`
  width: 7vw;
  height: auto;
  @media (max-width: 768px) {
    width: 8vw;
  }
  @media (max-width: 480px) {
    width: 9vw;
  }
`;

const StyledNavLink = styled(NavLink)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  text-decoration: none;
  color: inherit;
  padding: 0 0.5;
  &.active {
    font-weight: bold;
    color: orange;
  }
  @media (max-width: 768px) {
    font-size: 0.9vw;
  }
  @media (max-width: 480px) {
    font-size: 1.1vw;
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
          <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'space-between'}}>
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

          <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <InputBase
              placeholder="Tìm kiếm..."
              sx={{
                width: '26vh',
                height: '4vh',
                backgroundColor: '#f0f0f0',
                borderRadius: '15px',
                paddingLeft: '0.9vw',
                fontSize: '1.3vh',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                '&:focus': {
                  backgroundColor: '#f0f0f0',
                  boxShadow: '0 0 0 2px #a5c3f7',
                },
              }}
              endAdornment={
                <IconButton type="submit"  aria-label="search">
                  <SearchIcon sx={{ fontSize: '2.5vh' }} />
                </IconButton>
              }
            />
            <LanguageSelect selectedLanguage={selectedLanguage} onChange={handleLanguageChange} />
            <IconButton sx={{ p: '1vw' }} aria-label="account">
              <AccountCircleIcon sx={{ fontSize: '3vh' }} />
            </IconButton>
            <IconButton sx={{ p: '1vw' }} aria-label="cart">
              <ShoppingCartIcon sx={{ fontSize: '3vh' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </StyledToolbar>
  );
};

export default Header;
