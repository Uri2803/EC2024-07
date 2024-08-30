import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductItem from './ProductItem';
import ProductQuantity from './ProductQuantity';
import { useCart } from '../../context/CartContext'; 
import { useNavigate } from "react-router-dom";

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
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
`;

const Table = styled.table`
  padding: 3vw;
  width: 90%;
  border-collapse: collapse;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const TableHeader = styled.th`
  padding: 15px;
  text-align: center;
`;

const TableHeaderleft = styled.th`
  padding: 15px;
  text-align: left;
`;

const TableCellLeft = styled.td`
  padding: 15px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: center; 
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #f48c48;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e67c73;
  }
`;
const TotalTitel = styled.td`
  padding: 15px 1px;
  text-align: right;
  font-weight: bold;
`;

const TotalCell = styled.td`
  padding: 15px 1px;
  text-align: center;
  font-weight: bold;
`;

const Cart = () => {
  const { cart, removeFromCart } = useCart(); 

  // Hàm tính tổng giá trị giỏ hàng
  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.CartItemQuantity, 0);
  };
  const handleRemoveFromCart = async (productID) => {
    try {
      await removeFromCart(productID);
      // Giỏ hàng sẽ tự động cập nhật nhờ useCart hook
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <MainContainer>
      <Header />
      <BodyBox>
        <Table>
          <thead>
            <tr>
              <TableHeaderleft>Sản phẩm</TableHeaderleft>
              <TableHeader>Đơn Giá</TableHeader>
              <TableHeader>Số Lượng</TableHeader>
              <TableHeader>Số Tiền</TableHeader>
              <TableHeader>Thao Tác</TableHeader>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <TableRow key={item.ProductID}>
                <TableCellLeft>
                  <ProductItem product={{ ImageUrl: item.ImageUrl, ProductName: item.ProductName }} />
                </TableCellLeft>
                <TableCell>{item.Price.toLocaleString('vi-VN')}đ</TableCell>
                <TableCell>
                  <ProductQuantity  quantity={item.CartItemQuantity} productID = {item.ProductID}/>
                </TableCell>
                <TableCell>{(item.Price * item.CartItemQuantity).toLocaleString('vi-VN')}đ</TableCell>
                <TableCell>
                  <Button onClick={() => removeFromCart(item.ProductID)}>Xóa</Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TotalTitel colSpan="4">Tổng giỏ hàng:</TotalTitel>
              <TotalCell colSpan="2">{calculateCartTotal().toLocaleString('vi-VN')}đ</TotalCell>
            </TableRow>
          </tbody>
        </Table>
      </BodyBox>
      <Footer />
    </MainContainer>
  );
};

export default Cart;
