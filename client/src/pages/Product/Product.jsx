import React from 'react'
import { Card, Box,Typography, CardContent } from '@mui/material'
import RatingBox from '../../components/Rating';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const ItemBox = styled(Box)`
    width: 25%;
    margin: 1.5vw;
    cursor: pointer;
    
`;
const BoxImg = styled.div`
    width: 15vw;
    height: 15vw;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1.5vw  0;
    border-radius: 10px;

`;
const ProductImg = styled.img`
    width: 95%;
    min-height: 95%;
    max-height: 95%;
    object-fit: cover;
    boder-radius: 15px;
`;
export default function ProductItem({product}) {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate(`/productdetail/${product.ProductID}`, { state: { scrollToTop: true } });
  };

  React.useEffect(() => {
    if (window.location.pathname.includes('/productdetail')) {
      window.scrollTo(0, 0);
    }
  }, [window.location.pathname]);
  return (

    <ItemBox  onClick={handleClick}>
    <BoxImg>
        <ProductImg src={`${product.ImageUrl}/img1.jpg`} alt="" />
    </BoxImg>
   
    <CardContent sx={{padding: 0}}>
      <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '1.3vw'}}>
        {product.ProductName}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{fontSize: '1vw'}}>
        {product.Price.toLocaleString('vi-VN')} 
      </Typography>
    </CardContent>
      <RatingBox value={{ value: 5, 
                        reviews: '(88)'}}/> 
    </ItemBox>
  )
}
