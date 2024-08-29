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
import { getAllAccounts } from '../../../service/api';


export default function AccountTable(){
    const [account, setAccounts] = useState();
    const getAccounts = async() => {
        try{
            const data = await getAllAccounts();
            
            if (data.status && Array.isArray(data.account)) {
                setAccounts(data.account);
            } else {
                console.error('Accounts is not an array or status is false:', data.account);
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
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Username</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Role</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {account.map((item, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left">{item.username}</TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left">{item.role}</TableCell>
                <TableCell align="center"><Button className='btn btn-success'>Edit</Button></TableCell>
                <TableCell align="center"><Button className='btn btn-danger'>Delete</Button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <Button variant='primary'>Add Account</Button>
        </TableContainer>
    )
};
