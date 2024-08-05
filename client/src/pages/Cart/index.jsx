import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductItem from './ProductItem';
import ProductQuantity from './ProductQuantity';
import { DataGrid } from '@mui/x-data-grid';

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
  margin: 2vw 2vw;
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: center; 
  margin: 2vw 2vw;
  padding: 15px;
  
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
const columns = [
    { field: 'product', headerName: 'Sản phẩm', width: 300, renderCell: (params) => <ProductItem  /> },
    { field: 'price', headerName: 'Giá', width: 150, renderCell: (params) => `${params.value}đ` },
    { field: 'quantity', headerName: 'Số lượng', width: 200, renderCell: (params) => <ProductQuantity /> },
    { field: 'total', headerName: 'Số Tiền', width: 150,  },
    {
      field: 'actions',
      headerName: 'Thao Tác',
      width: 150,
      renderCell: (params) => (
        <Button onClick={() => handleRemove(params.row.id)}>Xóa</Button>
      ),
    },
  ];


const cart = [
  { id: 1, product: 'Product 1', price: 100, quantity: 2 },
  { id: 2, product: 'Product 2', price: 200, quantity: 1 },
  { id: 2, product: 'Product 2', price: 200, quantity: 1 },
  // Thêm sản phẩm khác ở đây
];


const Cart = () => {
  return (
    <MainContainer>
      <Header />
      <BodyBox>
        <Table>
          <thead>
            <tr>
              <TableHeaderleft width="20vw">Sản phẩm</TableHeaderleft>
              <TableHeader >Đơn Giá</TableHeader>
              <TableHeader>Số Lượng</TableHeader>
              <TableHeader>Số Tiền</TableHeader>
              <TableHeader>Thao Tác</TableHeader>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCellLeft ><ProductItem/></TableCellLeft>
                <TableCell>{item.price}đ </TableCell>
                <TableCell><ProductQuantity/></TableCell>
                <TableCell>${item.price * item.quantity}</TableCell>
                <TableCell>
                  <Button onClick={() => handleRemove(item.id)}>Xóa</Button>
                </TableCell>
              </TableRow>
              
            ))}
          </tbody>
        </Table>

       
      </BodyBox>
      <Footer />
    </MainContainer>
  );
};

const handleRemove = (id) => {
  console.log(`Remove product with id ${id}`);
};

export default Cart;
