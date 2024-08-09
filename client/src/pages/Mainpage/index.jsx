import React from 'react';
import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

const BodyBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Baner = styled.img`
  width: 98vw;
  margin: 1vw 0;
  height: 35vh;
`;

const BoxContent = styled.div`
  width: 98vw;
  height: 50vh;
  background-image: url('./public/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); 
    z-index: 1;
  }
`;

const ProductContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white; /* Màu chữ cho sản phẩm */
`;

const ProductImage = styled.img`
  width: auto;
  height: 100%;
`;

const ProductDetails = styled.div`
  margin-top: 1rem;
`;
const BoxImg = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FrameImg = styled.div`
  width: 20vw;
  height: 20vw;
  max-heigh:20vw;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  margin: 1vw;


`;


const Mainpage = () => {
  return (
    <MainContainer>
      <Header />
      <BodyBox>
        <Baner src="./public/Banner.png" alt="Banner" />
        <BoxContent>
    
          <ProductContainer>
            <ProductDetails>
              <Typography variant="h6"> DANH MỤC SẢN PHẨM</Typography>
              <BoxImg>
                < FrameImg>
                  <ProductImage src="./public/danhmuc/donut.png" alt="abc" />
                </FrameImg>
                < FrameImg>
                  <ProductImage src="./public/danhmuc/muffin.png" alt="abc" />
                </FrameImg>
                < FrameImg>
                <ProductImage src="./public/danhmuc/bread.png" alt="abc" />
                </FrameImg>
                < FrameImg>
                  <ProductImage src="./public/danhmuc/croissant.png" alt="abc" />
                </FrameImg>
               
                
                
              </BoxImg>
             
            </ProductDetails>
          </ProductContainer>
        </BoxContent>
      </BodyBox>
      <Footer />
    </MainContainer>
  );
};

export default Mainpage;
