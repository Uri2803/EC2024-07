import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {getOrder} from '../../service/api';
import { Pagination } from '@mui/material';


const formatDateTimeForInput = (isoDateTime) => {
  const date = new Date(isoDateTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  
  return `${day}-${month}-${year}`;
};

const OrderContainer = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 10px;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  background-color: #FFAD33;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
`;

const OrderContent = styled.div`
  padding: 15px 15px 10px 15px;
  background-color: #FFFBF3;
  border-radius: 0 0 8px 8px;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const BoxImg = styled.div`
    width: 7vw;
    height: 7vw;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0  2vw 0 0;
    border-radius: 10px;

`;
const ProductImage = styled.img`
width: 90%;
max-height: 95%;
object-fit: cover;
boder-radius: 15px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TileDiv = styled.div`
  width: 100%;
  margin: 10px 0px;
  padding: 10px 5px;
  font-family: Tahoma, sans-serif;
  font-size: 1.3vw;
  @media (max-width: 768px) {
    font-size: 2vw;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;
const DataContainer = styled.div`
  padding: 0px 7px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #fff;
`;

const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: #000; 
    &:hover {
      color: #F48C48; 
    }
  }
  .Mui-selected {
    color: #fff; 
    background-color: #F48C48 !important;
  }
`;

const TitleBox = styled.div`
margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const FoterBox = styled.div`
  height: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 550;
  font-size: 1.3vw;
  padding: 10px;
  border-radius: 8px;
`;
const TaltalBox = styled.div`
  padding: 0px 7px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #fff;
`;

export default function OrderHistory({ orders }) {
  
  console.log('abc', orders)
  return (
    <>
   <TileDiv style={{ color: '#F48C48', fontWeight: 600 }}>Lịch sử đơn hàng</TileDiv>
     
      {orders.map((order) => (
        <OrderContainer key={order.OrderID}>
        <OrderHeader>
          <TitleBox>
          <span>#{order.OrderID} </span>
          {formatDateTimeForInput(order.OrderDate)}
          </TitleBox>

        <DataContainer style={{ color: '#4285F4' }}>{order.OrderStatus}</DataContainer>
        </OrderHeader>

        <OrderContent>
      {order.od.map((item) => (
        <OrderItem key={item.ProductID}>
          < BoxImg>
          <ProductImage src={`${item.ImageUrl}/img1.jpg`} alt={item.ProductName} />
          </BoxImg>
          
          <ProductInfo>
            <span style={{ display: 'block' }}>{item.ProductName}</span>
            <span style={{ display: 'block' }}>x{item.Quantity}</span>
            <span style={{ display: 'block' }}>{(item.Price * item.Quantity).toLocaleString('vi-VN')}đ</span>
          </ProductInfo>
        </OrderItem>
      ))}
      <FoterBox>
          <TitleBox>
          </TitleBox>
        <TaltalBox >{(order.OrderPrice + order.ShippingPrice).toLocaleString('vi-VN')}đ</TaltalBox>
        </FoterBox>
    </OrderContent>
    
        </OrderContainer>
      ))}


    </>
      
    
  );
}
