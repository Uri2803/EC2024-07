import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import AcountInfor from './AcountInfor';
import { getUserInfor, getOrderHistory, getOrder } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import Address from './Address';

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
  padding: 10px 0;
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
  const [userInfor, setUserInfor] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const result = await getUserInfor();
      setUserInfor(result.userInfor);
    } catch (err) {
      console.error('Error fetching user information:', err);
    }
  };

  const getoders = async () => {
    console.log('Fetching order history');
    try {
        const data = await getOrderHistory();
        if (data && data.order) {
          const o =data.order;
            const updatedOrders = await Promise.all(
                o.map(async (order) => {
                    const details = await fetchOrderDetails(order.OrderID);
                    const od = details.order;
                    return { ...order, od };
                })
            );
            setOrders(updatedOrders);
        } else {
            console.error('Error: Orders is not an array or status is false:', data.order);
        }
    } catch (err) {
        console.error('Error fetching order history:', err);
    }
};

  const fetchOrderDetails = async (orderID) => {
    try {
        const details = await getOrder(orderID);
        return details;
    } catch (error) {
        console.error(`Error fetching details for OrderID ${orderID}:`, error);
        return [];
    }
  };


  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
        await getUser();
        await getoders();
    };
    fetchData();
}, []);

  const renderContent = useCallback(() => {
    switch (activeButton) {
      case 'Thông tin tài khoản':
        return <AcountInfor userInfor={userInfor} />;
      case 'Sổ địa chỉ':
        return <Address orders={orders} Address={userInfor.Address}/>;
      case 'Lịch sử đơn hàng':
        return <OrderHistory orders={orders}  />;
      case 'Đánh giá':
        return <Typography variant="h6">Đây là đánh giá của bạn.</Typography>;
      case 'Đăng xuất':
        handleLogout();
        return <Typography variant="h6">Bạn đã đăng xuất.</Typography>;
      default:
        return <Typography variant="h6">Vui lòng chọn một mục.</Typography>;
    }
  }, [activeButton, userInfor, orders, handleLogout]);

  return (
    <MainContainer>
      <Header />
      <TextDiv>Xin chào! <strong>{userInfor?.Username}</strong></TextDiv>
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
