import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { getAllProductBatch } from '../../../service/api';


export default function AccountTable(){
    const [productBatch, setProductBatchs] = useState();
    const getProductBatch = async() => {
        try{
            const data = await getAllProductBatch();
            
            if (data.status && Array.isArray(data.productBatch)) {
                setProductBatchs(data.productBatch);
            } else {
                console.error('Accounts is not an array or status is false:', data.productBatch);
            }
            
        }catch(err){
            console.error('Error fetching data:', err);
        }
    }
    useEffect(()=>{
        getProductBatch();
        console.log('res: ', );
    },[]) 
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Griller ID</TableCell>
                <TableCell align="left">Product ID</TableCell>
                <TableCell align="left">Cooking Time</TableCell>
                <TableCell align="left">Quantity</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {productBatch.map((item, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left">{item.grillerID}</TableCell>
                <TableCell align="left">{item.productID}</TableCell>
                <TableCell align="left">{item.cookingTime}</TableCell>
                <TableCell align="left">{item.quantity}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <Button variant='primary'>Add Account</Button>
        </TableContainer>
    )
};
