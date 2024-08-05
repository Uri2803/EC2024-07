import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import styled from 'styled-components'
import Rating from '../../components/Rating'


const BoxEvaluate = styled(Box)`
    width: 25vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
`;

const BoxAva = styled(Box)`
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;
const BoxInfor = styled(Box)`
    width: 20vw;
    padding: 0.5vw;
    margin-left: 1vw;
`;
const TextBox = styled(Box)`
    display: flex;
    flex-direction: column;
`;


export default function ProductItem() {
  return (
    <BoxEvaluate>

        <BoxAva>
        <Avatar
            alt=""
            src="/public/Logo.jpg"
            sx={{ width: '7vw', height: '7vw' }}
        />

        </BoxAva>
        <BoxInfor>
            <TextBox>
                <Typography  variant='h6'>Sừng bò</Typography>
                <Typography  variant='body1'>  Hương vị: Hạnh nhân</Typography>
            </TextBox>
           
           
           
            
           
            
        </BoxInfor>

    
    </BoxEvaluate>
  )
}
