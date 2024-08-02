import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, InputBase, IconButton, Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import LanguageSelect from '../LanguageSelect';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { useCart } from '../../context/CartContext'; 

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid`,
    
    padding: '0 4px',
  },
}));


const StyledToolbar = styled(Toolbar)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${props => props.theme.colors.header}
 
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

const IconButtonStyled = styled(IconButton)`
  &:hover {
    background-color: #f0f0f0;
  }
  &.active {
    color: #F48C48; 
  }
`;

const Header = () => {
  const navigate = useNavigate(); 
  const { cartCount } = useCart();
  const [selectedLanguage, setSelectedLanguage] = useState('VI');
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Add logic to change language settings in your application
  };
  const handleButtonClick = (path) => {
    navigate(path); 
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

          <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }} >
            <Logo src="/public/Logo.jpg" alt="Logo" onClick={() => handleButtonClick("/")} />
            
          </Grid>

          <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                  <SearchIcon sx={{ fontSize: '2vw' }} />
                </IconButton>
              }
            />
            <LanguageSelect selectedLanguage={selectedLanguage} onChange={handleLanguageChange}  />
            <StyledNavLink to="/acount">
              <AccountCircleIcon sx={{ fontSize: '2vw' }} />
            </StyledNavLink>
            <StyledNavLink to="/cart">
              <StyledBadge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon  sx={{ fontSize: '2vw' }}/>
              </StyledBadge>
            </StyledNavLink>
            

            
          </Grid>
        </Grid>
      </Container>
    </StyledToolbar>
  );
};

export default Header;
