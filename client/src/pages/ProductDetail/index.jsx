import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductSlider from './ProductSlider'; 
import styled from 'styled-components';
import ProductInfor from './ProductInfor';


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
const ProductBox = styled(Box)`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


`;
const ProductImgBox = styled(Box)`
    width: 55vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;

const ProductInforBox = styled(Box)`
    width: 30vw;

`;


const ProductDetail = () => {
  return (
    <MainContainer>
      <Header />
      <ProductBox>
        <ProductImgBox >
            <ProductSlider />
        </ProductImgBox>
        <ProductInforBox>
            <ProductInfor/>
           
           
        </ProductInforBox>

      </ProductBox>
     
      
      <Footer />
    </MainContainer>
  );
};

export default ProductDetail;
