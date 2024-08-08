import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


const BoxImg = styled.div`
    width: 25vw;
    min-height: 25vw;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 2vw;

`;
const ProductImg = styled.img`
    width: 95%;
    min-height: 95%;
    max-height: 100%;
    object-fit: cover;
    boder-radius: 15px;
  
`;

const Thumbnai = styled.div`
    width: 7vw;
    min-height: 7vw;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 1vw;


`;
const ThumbnailContainer = styled.div`
  width: 10vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

`;


const ProductSlider = ({img}) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const images = [
    `${img}/img1.jpg`,
    `${img}/img2.jpg`,
    `${img}/img3.jpg`
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
