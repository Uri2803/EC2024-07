import React from 'react';
import { Typography, Box, TextField } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from "react";

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
    margin-top: 1rem;
`;

const ProductContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`;

const ProductImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
`;

const ProductDetails = styled.div`
  margin-top: 2rem;
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

const AdvantagesContainer = styled.div`
  position: relative;
  margin: 1vw 0;
  height: 400px;
  z-index: 2;
  text-align: center;
  color: black; 
  background-color: #BFE8D5;
`;

const AdvantagesBox = styled.div`
  width: 98vw;
  padding: 2vw;
  color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  text-align: center;
`;

const SmallBox = styled.div`
  display: flex;
  width: 262px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const ReviewContainer = styled.div`
  width: 98vw;
  height: 400px;
  flex-shrink: 0;
  text-align: center;
`;

const SubcribeContainer = styled.div`
  width: 98vw;
  height: 350px;
  flex-shrink: 0;
  text-align: center;
  background: #BFE8D5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1cm;
  width: 30vw;
`;

const slideStyles = {
  width: "98vw",
  height: "400px",  // Set a fixed height
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#F48C48",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#F48C48",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
      </div>
    </div>
  );
};

const slides = [
  { url: "./public/mainpage/giangsinh.png", title: "Slide 1" },
  { url: "./public/mainpage/midautumn.png", title: "Slide 2" },
  { url: "./public/mainpage/opening.png", title: "Slide 3" },
];

const Mainpage = () => {
  return (
    <MainContainer>
      <Header />
      <BodyBox>
      
        <ImageSlider slides={slides} />
        <BoxContent>
    
          <ProductContainer>
            <ProductDetails>
              <Typography variant="h4"> DANH MỤC SẢN PHẨM</Typography>
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
      <AdvantagesContainer>
        <Typography variant="h4"sx={{ fontWeight: '600', margin: '2rem' }}>ƯU ĐIỂM</Typography>
        <AdvantagesBox>
          
          <SmallBox>
              <Icon src="./public/mainpage/ship.jfif" alt="Icon 1" />
              <Typography variant="h6"sx={{ fontWeight: '600' }}>GIAO HÀNG TẬN NƠI</Typography>
              <Typography variant="body1">Miễn phí giao hàng cho hoá đơn trên 200k và giao trong vòng 2h*</Typography>
            </SmallBox>
            <SmallBox>
              <Icon src="./public/mainpage/cskh.jfif" alt="Icon 2" />
              <Typography variant="h6"sx={{ fontWeight: '600' }}>HỖ TRỢ KHÁCH HÀNG</Typography>
              <Typography variant="body1">Đội ngũ chăm sóc khách hàng hỗ trợ từ 9h-18h mỗi ngày </Typography>
            </SmallBox>
            <SmallBox>
              <Icon src="./public/mainpage/money.jfif" alt="Icon 3" />
              <Typography variant="h6"sx={{ fontWeight: '600' }}>GIÁ CẢ HỢP LÝ</Typography>
              <Typography variant="body1"> </Typography>
            </SmallBox>
            <SmallBox>
              <Icon src="./public/mainpage/shield.jfif" alt="Icon 4" />
              <Typography variant="h6" sx={{ fontWeight: '600' }}>ĐẢM BẢO CHẤT LƯỢNG</Typography>
              <Typography variant="body1">Chất lượng nguyên liệu và bánh luôn được đảm bảo ở mức cao nhất </Typography>
            </SmallBox>
          </AdvantagesBox>
      </AdvantagesContainer>
       
       <ReviewContainer>
       <Typography variant="h4"sx={{ fontWeight: '600', margin: '2rem' }}>CẢM NHẬN KHÁCH HÀNG</Typography>
       </ReviewContainer>

       <SubcribeContainer>
       <Typography variant="h4"sx={{ fontWeight: '600', margin: '1rem' }}>Tham gia QKKA Club</Typography>
       <Typography variant="body1">Đăng ký để nhận những tin tức mới nhất, ưu đãi đặc biệt và hơn thế nữa</Typography>
       <InputContainer> 
        <TextField
          variant="outlined"
          placeholder="Nhập email của bạn"
          sx={{ backgroundColor: 'white', flexGrow: 1 }}
        />
        </InputContainer>
       </SubcribeContainer>
      </BodyBox>
      
      <Footer />
    </MainContainer>
  );
};

export default Mainpage;
