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


const ProductImage = styled.img`
width: 90%;
max-height: 95%;
object-fit: cover;
boder-radius: 15px;
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
  border-radius: 15px;
  background-color: #fff;
  font-size: 1.3vw;
  min-width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;



const TitleBox = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;

`;


export default function OrderHistory({ orders, Address }) {
  
  console.log('abc', orders)
  return (
    <>
   <TileDiv style={{ color: '#F48C48', fontWeight: 600 }}>Sổ địa chỉ</TileDiv>
   <OrderContainer >
        <OrderHeader>
          <TitleBox>
          <span> {Address} </span>
          </TitleBox>

        <DataContainer style={{ color: '#4285F4' }}>Mặc định</DataContainer>
        </OrderHeader>

    
        </OrderContainer>
      {orders.map((order) => (
        <OrderContainer key={order.OrderID}>
        <OrderHeader>
          <TitleBox>
          <span>{order.ShippingAddress} </span>
          </TitleBox>

        <DataContainer style={{ color: '#4285F4' }}>Thiết lập mặc định</DataContainer>
        </OrderHeader>

    
        </OrderContainer>
      ))}


    </>
      
    
  );
}
