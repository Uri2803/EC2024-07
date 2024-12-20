import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Griller from './Griller';
import { getUserInfor } from '../../service/api';

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.header};
  font-family: Tahoma, sans-serif;
`;

const ChefBox = styled(Box)`
  margin: 0px 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

const TextDiv = styled.div`
  width: 80vw;
  text-align: right;
  padding: 10 0px;
  margin-top: 50px;
  font-family: Tahoma, sans-serif;
  
`;

const BoxButton = styled.div`
  width: 20vw;
  margin: 2vw;
  display: flex;
  flex-direction: column; 
`;

const ItemButton = styled(Box)`
  height: 5vh;
  width: 17vw;
  padding: 10px;
  margin: 1vw 0;
  background-color: ${props => props.active ? '#FFAD33' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : '#000000'};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-family: Tahoma, sans-serif;
  font-size: 1vw;
  @media (max-width: 768px) {
    font-size: 1.5vw;
  }
  @media (max-width: 480px) {
    font-size: 1.4vw;
     width: 20vw;
  }
  &:hover {
    background-color: ${props => props.active ? '#FFAD33' : '#FFEBCC'};
  }
`;

const ContentContainer = styled(Box)`
  width: 60vw;
  margin: 1vw;
  padding: 20px;
  font-family: Tahoma, sans-serif;
  border-radius: 5px;

`;

export default function Chef() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('Quản lý bếp');
  const renderContent = () => {
    switch (activeButton) {
      case 'Quản lý bếp':
        return <Typography variant="h6">Quản lý bếp.</Typography>;
      case 'Quản lý lò nướng':
        return <Griller userInfor={userInfor}/>;
      case 'Đăng xuất':
        handleLogout();
        return <Typography variant="h6">Bạn đã đăng xuất.</Typography>;
      default:
        return <Typography variant="h6">Vui lòng chọn một mục.</Typography>;
    }
  };
  const [userInfor, setUserInfor] = useState('');
  const [error, setError] = useState('');
  const getUser = async ()=>{
    try{
      const result = await getUserInfor();
      setUserInfor(result.userInfor)
    }catch(err){
      setError(err.response?.data?.message || 'Login failed.');
    }
  }
  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    navigate('/');
  }, [navigate]);
  useEffect(()=>{
    getUser();
  }, []);

  return (
    <MainContainer>
      <Header />
      <TextDiv>Xin chào! <strong>{userInfor.Username}  </strong> </TextDiv>
      <ChefBox>
      
        <BoxButton>
          {['Quản lý bếp', 'Quản lý lò nướng', 'Đăng xuất'].map(buttonName => (
            <ItemButton
              key={buttonName}
              active={activeButton === buttonName}
              onClick={() => setActiveButton(buttonName)}
            >
              {buttonName}
            </ItemButton>
          ))}
        </BoxButton>
        <ContentContainer>
          {renderContent()}
        </ContentContainer>
      </ChefBox>
      <Footer />
    </MainContainer>
  );
}