import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Box, Typography, Paper } from '@mui/material';

import { getUserInfor } from '../../../service/api';
import AccountTable from './AccountTable';
import ChefTable from './ChefTable';

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;

const BodyBox = styled.div`
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
  margin: 2vw;
  padding: 20px;
  font-family: Tahoma, sans-serif;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

`;

export default function Admin() {
  const [activeButton, setActiveButton] = useState('Quản lý tài khoản');
  const renderContent = () => {
      switch (activeButton) {
      case 'Quản lý tài khoản':
        return <AccountTable/>;
        // return <Typography variant="h6">Danh sách tài khoản</Typography>;
      case 'Quản lý bếp':
        return <ChefTable/>;
        // return <Typography variant="h6">Danh sách các bếp</Typography>;
      case 'Duyệt đơn hàng':
        return <Typography variant="h6">Đơn hàng cần duyệt</Typography>;
      case 'Đăng xuất':
        return <Typography variant="h6">Đăng xuất</Typography>;
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
  useEffect(()=>{
      getUser();
  }, []);
  return (
      <MainContainer>
          <Header/>
          <TextDiv>Xin chào! <strong>{userInfor.Username}</strong> </TextDiv>
          <BodyBox>
              <BoxButton>
              {['Quản lý tài khoản', 'Quản lý bếp', 'Duyệt đơn hàng',  'Đăng xuất'].map(buttonName => (
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
          </BodyBox>
          <Footer/>
      </MainContainer>
    )
};