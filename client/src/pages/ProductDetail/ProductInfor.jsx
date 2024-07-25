import React from 'react'
import { Box, Typography } from '@mui/material'
import Rating from '../../components/Rating'
import styled from 'styled-components'

const BoxRating = styled.div`
    width: 100%;
     display: flex;

    align-items: center;
   
`;
const BoxStatus = styled.div`
    display: flex;
    flex-direction: row;
     display: flex;
    justify-content: center;
    align-items: center;

`;
const InforStatus = styled.p`

`;
export default function ProductInfor() {
  return (
    <>
        <Typography variant='h5'> Bánh sừng bò nhân kem</Typography>
        <BoxStatus>
            <BoxRating>
                <Rating  value={{ value: 4, 
                        reviews: ' (150 đánh giá)'}} />
                | <Typography variant='h6'> Còn hàng </Typography>
               
            </BoxRating>
          
           
           
            

        </BoxStatus>
       

      
    
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '1.3vw'}}>
            20.000đ
        </Typography>
    </>
  )
}
