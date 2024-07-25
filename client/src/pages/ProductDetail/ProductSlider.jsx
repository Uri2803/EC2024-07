import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


const BoxImg = styled.div`
    width: 20vw;
    min-height: 20vw;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 2vw;

`;
const ProductImg = styled.img`
    width: 80%;
    max-height: 60%;
    object-fit: cover;
  
`;

const Thumbnai = styled.div`
    width: 5vw;
    min-height: 5vw;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 1vw;


`;
const ThumbnailContainer = styled.div`
  width: 7vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

`;


const ProductSlider = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const images = [
    '/public/Momo.png',
    '/public/paypal.png',
    '/public/vnp.png',
  ];
  return (
   <>
    <ThumbnailContainer>
        {images.map((image, index) => (
            <Thumbnai  key={index}  onClick={() => setMainImageIndex(index)}>
                 <ProductImg 
               
                src={image}
                alt={`Thumbnail ${index}`}
                isActive={index === mainImageIndex}
               
          />
            </Thumbnai>
           
          
        ))}
      </ThumbnailContainer>
      <BoxImg>
        <ProductImg src={images[mainImageIndex]} alt="Main Product" />
     </BoxImg>
   

   </>
  );
};

export default ProductSlider;
