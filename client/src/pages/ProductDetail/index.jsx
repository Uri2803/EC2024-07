import React, { useState , useEffect} from 'react';
import { useParams} from "react-router-dom";
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductSlider from './ProductSlider'; 
import styled from 'styled-components';
import ProductInfor from './ProductInfor';
import Evaluate from './Evaluate';
import Product from '../../components/Product'
import { useCart } from '../../context/CartContext';
import { getProductDetail } from '../../service/api';

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

const BoxButton = styled(Box)`
  width: 30vw;
  display: flex;
  flex-direction: row;
  maxHeight: 3vw;

`;
const EvaluateBox = styled(Box)`
    width: 90vw;
    display: flex;
    flex-direction: row;
    
    flex-wrap: wrap;

`;
const BoxTitle = styled (Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1vw;
`;
const Flag = styled(Box)`
    width: 1.5vw;
    height: 3vw;
    pading: 10px;
    margin: 1vw;
    background-color: #F48C48;
    border-radius: 5px;
`;
const BoxProduct = styled(Box)`
  min-height: 3vw;
  max-height: 3vw;
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`;


const ProductDetail = () => {
  const {id} = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [product, setProduct] = useState([]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    addToCart();
  };
  const getProduct = async (productID)=>{
      try{
        const data = await getProductDetail(productID);
        setProduct(data.product)
      }catch(err){
        console.error('Error fetching data:', err);
      }
  }
  useEffect(()=>{
    getProduct(id);
    console.log(product)
  }, [])
 
  return (
    <MainContainer>
      <Header />
      <ProductBox>
        <ProductImgBox>
          <ProductSlider img={product.ImageUrl}/>
        </ProductImgBox>
        <ProductInforBox >
          <ProductInfor product={product} />
          <BoxButton>
          <Button onClick={handleDecrement}
            sx={{
                borderRadius: "5px 0 0 5px",
                maxHeight: '3vw',
                minWidth: '3vw',
                width: '2.5vw',
                backgroundColor: 'transparent',
                color: '#000',
                border: '1px solid #ccc',
                padding: 0,
                '&:hover': {
                  backgroundColor: 'orange',
                  borderColor: 'transparent', 
                },
                
              }}
            >
            -
            </Button>
            
            <TextField
              value={quantity}
              variant="outlined"
              size="small"
              inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
              sx={{
                width: '4vw',
                maxHeight: '3vw',
                minWidth: '3vw',
                backgroundColor: 'transparent',
                color: '#000',
                border: '1px solid #ccc',
                padding: 0,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  border: 'none',
                  '& fieldset': {
                    border: '1px solid #ccc',
                  },
                },
              }}
            />
           <Button onClick={handleIncrement}
            sx={{
                borderRadius: "0 5px 5px 0",
                maxHeight: '3vw',
                width: '2.5vw',
                minWidth: '3vw',
                backgroundColor: 'transparent',
                color: '#000',
                border: '1px solid #ccc',
                padding: 0,
                '&:hover': {
                  backgroundColor: 'orange',
                  borderColor: 'transparent', // Loại bỏ màu viền khi hover
                },
                
              }}
            >
            +
            </Button>
            <Button 
            onClick={handleAddToCart}
            sx={{
                marginLeft: '5vw',
                borderRadius: "5px",
                width: '15vw',
                backgroundColor: 'orange',
                color: '#000',
              
                padding: 0,
              }}
            >
            Thêm vào giỏ hàng
            </Button>
        </BoxButton>
        </ProductInforBox>
      </ProductBox>
      <Box>
        <BoxTitle>
            <Flag/>
            <Typography variant='h6' sx={{color: 'orange', fontWeight: 650}}>  Đánh giá</Typography>
        </BoxTitle>
        <EvaluateBox>
            <Evaluate/>
            <Evaluate/>
            <Evaluate/>
        </EvaluateBox>
      </Box>
      <Box>
        <BoxTitle>
            <Flag/>
            <Typography variant='h6' sx={{color: 'orange', fontWeight: 650}}>  Sản phẩm liên quan</Typography>
        </BoxTitle>
        <BoxProduct>
           <Product/>
           <Product/>
           <Product/>
           <Product/>


        </BoxProduct>
      </Box>
        



      <Footer />
    </MainContainer>
  );
};

export default ProductDetail;
