import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import styled from 'styled-components'
import Rating from '../../components/Rating'

const BoxEvaluate = styled(Box)`
    width: 20vw;
    display: flex;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin: 2vw;
`;

const BoxAva = styled(Box)`
    margin: 0.5vw;


`;
const BoxInfor = styled(Box)`
    width: 15vw;
    padding: 0.5vw;
`;
const TextBox = styled(Box)`
    display: flex;
    align-items: center;
    
`;


export default function Evaluate() {
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
                <Typography  variant='h6'>Kiênn</Typography>
                <Typography variant='body1' color="text.secondary" sx={{marginLeft: '1vw'}}> 22 tuổi </Typography>
            </TextBox>
           
            <Rating  value={{ value: 4}}/>
            <Typography sx={{marginTop: '0.4vw'}}  variant='body2' >6 Tháng Sáu, 2024 06:06</Typography>

             <Typography sx={{marginTop: '0.4vw', color: 'orange', fontWeight: 500}}variant='body1' >Bánh ngon</Typography>   
            
           
            
        </BoxInfor>

    
    </BoxEvaluate>
  )
}
