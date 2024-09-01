import React, { useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box, InputAdornment, TextField, CircularProgress } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { loginUser } from '../../service/api'; 
import HomeIcon from '@mui/icons-material/Home';

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

const SubmitButton = styled(Box)`
  width: 80%;
  height: 5vh;
  padding: 10px;
  margin: 20px 0;
  background-color: #f48c48;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Thêm cursor pointer để hiển thị con trỏ khi hover */
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  color: orange;
  
  &.active {
    font-weight: bold; /* Hoặc bất kỳ style nào bạn muốn áp dụng cho link active */
  }
`;

const Spinner = styled(CircularProgress)`
  position: absolute;
`;
const HomeButton = styled.div`
  position: absolute;
  bottom: 15px; 
  right: 15px;  
  background-color: #f48c48; 
  border-radius: 15px; 
  padding: 10px 20px; 
  color: white;
  cursor: pointer; 
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    setLoading(true); // Set loading state to true
    try {
      console.log(email, password);
      const result = await loginUser(email, password);
      localStorage.setItem('token', result.token);
      console.log(result);
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true }); 
      window.location.reload(); 
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };
  const handleHome = ()=>{
    navigate('/');
  }

  return (
    <MainContainer>
      <ImgLogin src="/public/login_img1.png" alt="login_img" />
      <FormLogin>
        <TitleLogin>Sign in</TitleLogin>
        <TextLogin>
          If you don't have an account register <br />
          You can 
          <StyledNavLink to="/register" end>
            Register here!
          </StyledNavLink>
        </TextLogin>
        < InputStyled
          placeholder="Enter your Email"
          sx={{ mb: 4 }}
          id="input-with-icon-textfield"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <InputStyled
          placeholder="Enter your Password"
          sx={{ mb: 4 }}
          id="input-with-icon-textfield"
          label="Password"
          value={password}
           type="password"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockPersonIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <SubmitButton onClick={handleLogin}>
          {loading ? <Spinner /> : 'Login'}
        </SubmitButton>

        <HomeButton onClick={handleHome}>
          <HomeIcon />
        </HomeButton>
        
      </FormLogin>

    </MainContainer>
    
  );
}
