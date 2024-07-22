import React from 'react'
import { Card, Box,Typography, CardContent, CardActions, Button } from '@mui/material'
import RatingBox from '../../components/Rating';
import styled from 'styled-components';

const ItemBox = styled(Box)`
    width: 25%;
    margin: 2vw;
`;
const BoxImg = styled.div`
    width: 13vw;
    height: 17vw;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2vw  0;
    border-radius: 10px;

`;
const ProductImg = styled.img`
    width: 80%;
    max-height: 70%;
    object-fit: cover;
`;
export default function ProductItem() {
  return (

    <ItemBox >
    <BoxImg>
        <ProductImg src="/public/product1.png" alt="" />
    </BoxImg>
   
    <CardContent sx={{padding: 0}}>
      <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '1.3vw'}}>
        Muffin chocolate
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{fontSize: '1vw'}}>
        20,000đ
      </Typography>
    </CardContent>
      <RatingBox value={5}/> 
    </ItemBox>
  )
}
