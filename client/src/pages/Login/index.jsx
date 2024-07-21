import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {  Box, Button, Grid, FormControl, InputLabel, OutlinedInput, Input,InputAdornment, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Footer from '../../components/Footer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockPersonIcon from '@mui/icons-material/LockPerson';
const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;


const ImgLogin = styled.img`
    height: 100vh;
    max-width: 55vw;
    object-fit: cover;
    border-top-right-radius: 20px; /* bo góc trên bên phải */
    border-bottom-right-radius: 20px;
    @media (max-width: 768px) {
     height: 70vh;
   }
    @media (max-width: 480px) {
        height: 30vh;
    }
`;

const FormLogin = styled.div`
    margin: 2vw;
    padding: 2vw;
    width: 100%;
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    

`;

const InputStyled = styled(TextField)`
    width: 80%;
    padding: 10px;
    
`;

const TitleLogin = styled.p`
    font-size: 2vw;
    font-weight: 500;
    margin: 10px 0px;
`;

const TextLogin = styled.p`
  font-size: 1.2vw;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  margin-bottom: 50px;

  
  @media (max-width: 768px) {
    font-size: 2.2vw;
  }
  
  @media (max-width: 480px) {
    font-size: 2vw;
  }
`;

const SubmitButon = styled(Box)`
    width: 80%;
    height: 5vh;
    pading: 10px;
    margin: 20px 0;
    background-color: #F48C48;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  color: orange;
`;
export default function Login() {
  return (
    <MainContainer>
        
        <ImgLogin src="/public/login_img1.png" alt="login_img" />
        <FormLogin>
            <TitleLogin> Sign in</TitleLogin>
            < TextLogin> If you don't have an account register <br/>
              You can 
              <StyledNavLink to="/" exact activeClassName="active">
               Register here! </StyledNavLink>
              </TextLogin>
            <InputStyled 
             placeholder="Enter email"
            sx={{mb: 4}}
            id="input-with-icon-textfield"
            label="Email"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <MailOutlineIcon/>
                </InputAdornment>
            ),
            }}
            variant="standard"/>
            <InputStyled 
                placeholder="Enter password"
                sx={{mb: 4}}
                id="input-with-icon-textfield"
                label="Password"
                InputProps={{
                startAdornment: (
                    <InputAdornment  position="start">
                        <LockPersonIcon />
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
            <SubmitButon>  Login </SubmitButon>
        </FormLogin>
        

      
        
    </MainContainer>
  )
}
