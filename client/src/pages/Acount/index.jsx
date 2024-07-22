import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { Box, Typography, Paper } from '@mui/material';
import AcountInfor from './AcountInfor';

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

const AcountBox = styled(Box)`
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

export default function Account() {
  const [activeButton, setActiveButton] = useState('Thông tin tài khoản');

  const renderContent = () => {
    switch (activeButton) {
      case 'Thông tin tài khoản':
        return <AcountInfor/>;
      case 'Sổ địa chỉ':
        return <Typography variant="h6">Đây là sổ địa chỉ của bạn.</Typography>;
      case 'Lịch sử đơn hàng':
        return <Typography variant="h6">Đây là lịch sử đơn hàng của bạn.</Typography>;
      case 'Đánh giá':
        return <Typography variant="h6">Đây là đánh giá của bạn.</Typography>;
      case 'Đăng xuất':
        return <Typography variant="h6">Bạn đã đăng xuất.</Typography>;
      default:
        return <Typography variant="h6">Vui lòng chọn một mục.</Typography>;
    }
  };

  return (
    <MainContainer>
      <Header />
      <TextDiv>Xin chào! QK KA</TextDiv>
      <AcountBox>
      
        <BoxButton>
          {['Thông tin tài khoản', 'Sổ địa chỉ', 'Lịch sử đơn hàng', 'Đánh giá', 'Đăng xuất'].map(buttonName => (
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
      </AcountBox>
      <Footer />
    </MainContainer>
  );
}
