import React, { useState, useEffect } from 'react';
import { Box, Avatar, Typography } from '@mui/material'
import styled from 'styled-components'
import Rating from '../../components/Rating'
import { getProductDetail} from '../../service/api';
import { useNavigate } from "react-router-dom";

const BoxEvaluate = styled(Box)`
    width: 25vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
`;

const BoxAva = styled(Box)`

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


export default function ProductItem({product}) {
    console.log(product)
    const productName = product.ProductName || '';
    const [name, ...flavorParts] = productName.split(' ');
    const flavor = flavorParts.join(' ');
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate(`/productdetail/${product.ProductID}`);
      };
  return (
    <BoxEvaluate onClick={handleClick}>

        <BoxAva>
        <Avatar
            alt=""
            src={`${product.ImageUrl}/img1.jpg`}
            sx={{ width: '7vw', height: '7vw' }}
        />

        </BoxAva>
        <BoxInfor>
            <TextBox>
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='body1'>Hương vị: {flavor}</Typography>
            </TextBox>    
        </BoxInfor>
    </BoxEvaluate>
  )
}
