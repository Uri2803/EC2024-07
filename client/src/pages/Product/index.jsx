import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, TextField, Grid, Slider, Pagination } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter from './Filter';
import Data from './Data';
import FilterPrice from './FilterPrice';
import ProductItem from './Product';

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

const BodyBox = styled(Box)`
    min-height: 80vh;
    width: 100vw;
    margin: 0 0;
    padding: 0 1vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
 
`;

const Category = styled(Box)`
    width: 20vw;
    margin: 2vw 0;
    padding-top: 3vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 15vw;
        margin: 3vw;
    }
   @media (max-width: 480px) {
        width: 29vw;
        margin: 1vw;
  }
    
`;

const BoxProduct = styled(Box)`
    display: flex;
    width: 55vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    pading: 2vw;
    margin-left: 1vw;
    @media (max-width: 768px) {
        width: 60vw;
        margin-left: 3vw;
    }
    @media (max-width: 480px) {
        width: 65vw;
        margin-left: 2vw;
    }
`;

const CategoryTile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.3vw;
`;
const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: #000; 
    &:hover {
      color: #F48C48; 
    }
  }
  .Mui-selected {
    color: #fff; 
    background-color: #F48C48 !important;
  }
`;


export default function Product({ filter }) {



    return (
        <MainContainer>
            <Header/>
            <BodyBox>
                <Category>
                    <CategoryTile>
                        <FilterAltIcon sx={{ fontSize: '2.5vw' }}/>
                        BỘ LỌC TÌM KIẾM
                    </CategoryTile>
                    <Filter filter={Data.filter_1}/>
                    <Filter filter={Data.filter_2}/>
                    <FilterPrice/>
                    
                </Category>
                <BoxProduct>
                    <ProductItem />
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </BoxProduct>
            </BodyBox>
            <StyledPagination count={5} shape="rounded"  sx={{fontSize: '5vw'}}/>
            <Footer/>
        </MainContainer>
    );
}
