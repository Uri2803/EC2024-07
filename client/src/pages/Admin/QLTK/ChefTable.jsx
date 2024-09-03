import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import tdl from '@mui/material/tdl';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import { Box, Button } from '@mui/material';
import {  getAllProductBatchs } from '../../../service/api';


const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9vw;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    font-size: 1.2vw;
  }
  @media (max-width: 480px) {
    font-size: 1.5vw;
  }
`;

const DeleteButton = styled(EditButton)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px; 
    tr {
        &:nth-child(even):
            background-color: #F48C48;

        &:hover:
            background-color: #f1f1f1;
    } 
                  
    th {
        padding: 10px;
        border: 1px solid #ddd;
        text-align: left;
        background-color: #F48C48;
        font-weight: bold;
    }
        
    
    tbody tr {
        :nth-child(even):
            background-color: #f9f9f9;

        :hover:
            background-color: #f1f1f1;
    }

    td {
        padding: 10px;
        border: 1px solid #ddd;
        text-align: left;

        &.center:
            text-align: center;
    }                       
`;

const TableContainer = styled(Box)`
    margin: 10px 10px;
    padding: 0 2vw;
    @media (max-width: 768px) {
    width: 50vw;
    }
    @media (max-width: 480px) {
        width: 60vw;
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

export default function ChefTable(){
    const [productBatchs, setProductBatchs] = useState([]);
    const getProductBatchs = async() => {
        try{
            const data = await getAllProductBatchs();
            console.log('test' , data)
            
            if (data.status) {
                console.log(data)
                setProductBatchs(data.productBatchs);
            } else {
                console.error('ProductBatch is not an array or status is false:', data.productBatchs);
            }
            
        }catch(err){
            console.error('Error fetching data:', err);
        }
    }
    useEffect(()=>{
        getProductBatchs();
        console.log('res: ', );
    },[]) 
    return (
        <TableContainer>
            <TileDiv style={{ color: '#F48C48', fontWeight: 600 }}>Danh sách chờ của các bếp</TileDiv>
            <Table>
                <thead>
                <tr>
                    <th>GrillerID</th>
                    <th>ProductID</th>
                    <th>Quantity</th>
                    <th>Time</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {productBatchs.map((item, index) => (
                    <tr key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <td>{item.GrillerID}</td>
                        <td>{item.ProductID}</td>
                        <td>{item.Quantity}</td>
                        <td>{item.CookingTime}</td>
                        <td align="center"><DeleteButton className='btn btn-danger'>Đang nấu</DeleteButton></td>
                    </tr>
                ))}
                </tbody>
            </Table> 
        </TableContainer>
    )
};
