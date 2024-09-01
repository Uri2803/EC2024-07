import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import tdl from '@mui/material/tdl';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import { Box, Button } from '@mui/material';
import { getAllAccounts } from '../../../service/api';


const SubmitButton = styled.button`
    width: 20%;
    height: 5vh;
    padding: 10px;
    background-color: #F48C48;
    border-color: black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1vw;
    media (max-width: 768px) {
        font-size: 1.5vw;
        width: 40%;
    }
    @media (max-width: 480px) {
        font-size: 2vw;
        width: 45%;
    }
`;

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

export default function AccountTable(){
    
    const [accounts, setAccounts] = useState([]);
    const getAccounts= async() => {
        try{
            const data = await getAllAccounts();
            console.log('test' , data)
    
            if (data.status ) {
                console.log(data)
                setAccounts(data.accounts);
            } else {
                console.error('Grillers is not an array or status is false:', data.griller);
            }
            
        }catch(err){
            console.error('Error fetching data:', err);
        }
    }
    useEffect(()=>{
        getAccounts();
        console.log('res: ', );
    },[]) 
    return (
        <TableContainer>
            <TileDiv style={{ color: '#F48C48', fontWeight: 600 }}>Danh sách tài khoản</TileDiv>
            <Table>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                    <th></th>
                    
                </tr>
                </thead>
                <tbody>
                {accounts.map((item, index) => (
                    <tr key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <td>{item.Username}</td>
                        <td>{item.Email}</td>
                        <td>{item.Role}</td>
                        <td align="center"><EditButton className='btn btn-success'>Edit</EditButton></td>
                        <td align="center"><DeleteButton className='btn btn-danger'>Delete</DeleteButton></td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <SubmitButton variant='primary'>Add Account</SubmitButton> 
        </TableContainer>
    )
};
