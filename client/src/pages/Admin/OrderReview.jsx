import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllOrders , orderConfirmation ,orderDelete } from '../../service/api';
import { Pagination } from '@mui/material';
// import orders from './Data';


const ContentContainer = styled.div`
  width: 100%;
  padding: 2vw;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 480px) {
    width: 60vw;
  }
`;

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
  padding: 15px 15px 50px 15px;
  background-color: #FFFBF3;
  border-radius: 0 0 8px 8px;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const ActionButton = styled.div` 
  float: right;                         
                                     
  padding: 1px 7px;   
  margin: 5px;                               
  background-color: ${props => props.primary ? '#FFAD33' : '#FFFBF3'};
  color: ${props => props.primary ? '#000000' : '#000'}; 
  border: ${props => props.primary ? 'none' : '2px solid #000000'};
  border-radius: 5px;                                
  cursor: pointer;                                   
  font-size: 0.9em;                                  
  
  &:hover {                                          
    background-color: ${props => props.primary ? '#FFB68A' : '#FFAD33'}; 
  }
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
export default function OrderReview() {
  const [rawData , setRawData] = useState([]);
  const handleCheckTrue = async (orderID) => {
    try {
      await orderConfirmation(orderID); 
      await getRawData(); 
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  const handleCheckFalse = async (orderID) => {
    try {
      await orderDelete(orderID); 
      await getRawData(); 
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  const getRawData = async () =>{
      try{
          const data = await getAllOrders();
          
          if (data.status && Array.isArray(data.products)) {
            setRawData(data.products);
            console.log(setRawData);
          } else {
              console.error('Orders is not an array or status is false:', data.products);
          }
          
      }catch(err){
          console.error('Error fetching data:', err);
      }
  }
  useEffect(()=>{
    getRawData();
    console.log('res: ', );
  },[])

  const orders = rawData.reduce((acc, cur) => {
    let existingOrder = acc.find(order => order.orderId === cur.orderId);

    if (existingOrder) {
        existingOrder.items.push({
            name: cur.name,
            quantity: cur.quantity,
            price: cur.price,
            image: cur.image
        });
    } else {
        acc.push({
            orderId: cur.orderId,
            status: cur.status,
            items: [{
                name: cur.name,
                quantity: cur.quantity,
                price: cur.price,
                image: cur.image
            }]
        });
    }

    return acc;
}, []);
const [currentPage, setCurrentPage] = useState(1);
const orderPerPage = 5;
const indexOfLastOrder = currentPage * orderPerPage;
const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

const pageCount = Math.ceil(orders.length / orderPerPage);

const handleChangePage = (event, value) => {
  setCurrentPage(value);
};
  return (
    <ContentContainer>
      <TileDiv style={{ color: '#F48C48', fontWeight: 600 }}>Duyệt đơn hàng</TileDiv>
      {currentOrders.map((order, index) => (
        <OrderContainer key={index}>
          <OrderHeader>
            <span>{order.orderId}</span>
            <DataContainer style={{ color: '#4285F4' }}>{order.status}</DataContainer>
          </OrderHeader>
          <OrderContent>
            {order.items.map((item, idx) => (
              <OrderItem key={idx}>
                <ProductImage src={item.image} alt={item.name} />
                <ProductInfo>
                <span style={{ display: 'block' }}>{item.name}</span>        
                <span style={{ display: 'block' }}>x{item.quantity}</span>   
                <span style={{ display: 'block' }}>{item.price}</span> 
                </ProductInfo>
              </OrderItem>
            ))}
            <ActionButton onClick={() => handleCheckTrue(order.orderId)}>Xác nhận đơn hàng</ActionButton>
            <ActionButton onClick={() => handleCheckFalse(order.orderId)}>Hủy đơn hàng</ActionButton>
          </OrderContent>
        </OrderContainer>
      ))}
      <StyledPagination
                count={pageCount}
                page={currentPage}
                onChange={handleChangePage}
                shape="rounded"
                sx={{ fontSize: '5vw', display: 'flex', justifyContent: 'center' }}
            />
    </ContentContainer>
  );
}
