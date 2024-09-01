import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Pagination,Avatar, Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

import { getOrder , getUserInfor} from '../../service/api';
const formatDateTimeForInput = (isoDateTime) => {
  const date = new Date(isoDateTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  return `${day}-${month}-${year}`;
};
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

`;
const BodyBox = styled(Box)`
    min-height: 80vh;
    width: 70%;
    margin: 5vw 0;
    padding: 0 1vw;
    display: flex;
    flex-direction: column;
 
    align-items: center;
    flex-wrap: wrap;
    background: ${(props) => props.theme.colors.background};
`;
const BoxInfor = styled.div`
  width: 90%;

`;
const CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
`;
const OrangeCartItem = styled.div`
  background-color: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
   border-radius: 8px; 
  
`;
const ProductName = styled.div`
    flex: 1;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;

`;

const Quantity = styled.div`
    flex: 1;
    text-align: center;
    font-weight: bold;
`;
const Price = styled.div`
    flex: 1;
    text-align: right;
    font-size: 1rem;
    font-weight: bold;
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
const ProductImg = styled.img`
width: 90%;
max-height: 95%;
object-fit: cover;
boder-radius: 15px;
`;




export default function PaymentSuccess() {
  const { id } = useParams();
  const [order, setOrder] = useState([])
  const [orderInfo, setOrderInfo] = useState('')
  const fetchOrder = async (orderID) => {
    try {
      const data = await getOrder(orderID);
      if (data && data.order) {
       
        setOrder(data.order);
        setOrderInfo(data.order[0])
        console.log(data)
      } else {
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  useEffect(() => {
    fetchOrder(id);
    getUser();
    window.scrollTo(0, 0); 

  }, [id]);
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

  return (
    <MainContainer>
      <Header/>
      <BodyBox>

          <CheckCircleOutlineIcon 
                style={{ fontSize: 100, color: 'green' , margin: '2vw'}} // Chỉnh size và màu sắc bằng style
            />
            <p style={{ fontSize: 40, color: 'green' , margin: '2vw'}}>Thanh toán thành công #{id} </p>
            <BoxInfor>
              <p>Ngày đặt hàng: {  formatDateTimeForInput(orderInfo.OrderDate)}
                <br/>
                Ngày dự kiến giao: {  formatDateTimeForInput(orderInfo.ShippingDate)}
                <br/>
              Tên người nhận: { userInfor.UserFullName} 
              <br/>
              Địa chỉ Email: {userInfor.Email} 
              <br/>
              Số điện thoại: {  formatDateTimeForInput(orderInfo.OrderDate)} 
              <br/>
              Phương thức thanh toán: PayPal 
              <br/>
              Địa chỉ giao hàng: {  orderInfo.ShippingAddress}
              <br/>
              Gi chú:  
              </p>
            </BoxInfor>
            <BoxInfor>
            <OrangeCartItem>
                      <ProductName>Sản Phẩm</ProductName>
                      <Quantity>Số lượng</Quantity>
                      <Quantity>Giá niêm yết</Quantity>
                      <Price>Giá</Price>
              </OrangeCartItem>

              {order.map((item)=>(
                <CartItem key={item.ProductID}>
                    <ProductName> 
                      <BoxImg >
                      <ProductImg alt=""src={`${item.ImageUrl}/img1.jpg`}/>

                      </BoxImg>
                        
                        <Typography variant='body1'>{item.ProductName}</Typography>
                    </ProductName>
                    <Quantity>{item.Quantity}</Quantity>
                    <Quantity>{item.Price.toLocaleString('vi-VN')}đ</Quantity>
                    <Price>{(item.Price * item.Quantity).toLocaleString('vi-VN')}đ</Price>
                </CartItem>
              ))}
              

            </BoxInfor>
            <BoxInfor>
              <p>
                Mã giảm: {orderInfo.CouponID}
                <br/>
                Tổng giá trị sản phẩm: {orderInfo.OrderPrice } đ
                <br/>
                Tổng khuyến mãi: {(orderInfo.OrderPrice * 0/100)}đ
                <br/>
                Phí giao hàng: {(orderInfo.ShippingPrice)}đ
              </p>


            </BoxInfor>
            <BoxInfor>
            <OrangeCartItem>
                      <ProductName>Tổng thanh toán</ProductName>
                      <Quantity></Quantity>
                      <Quantity></Quantity>
                      <Price> {(orderInfo.OrderPrice + orderInfo.ShippingPrice - (orderInfo.OrderPrice * 0/100)).toLocaleString('vi-VN') }đ</Price>
              </OrangeCartItem>
              </BoxInfor>

      </BodyBox>
      <Footer/>
    </MainContainer>
  )
}
