import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import Rating from '../../components/Rating'
import styled from 'styled-components'

const BoxRating = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 1vw 0; 
`;
const BoxStatus = styled.div`
    display: flex;
    flex-direction: row;
     display: flex;
    justify-content: center;
    align-items: center;

`;

const BoxDescription = styled(Box)`
    border-bottom: 1px solid black;
    margin: 1vw 0;
  
`;

const TextDescrip = styled.p`


`;

export default function ProductInfor() {
  return (
    <>
        <Typography variant='h5'> Bánh sừng bò nhân kem</Typography>
        <BoxStatus>
            <BoxRating>
                <Rating  value={{ value: 4, 
                        reviews: ' (150 đánh giá)'}} />
                <Typography sx={{marginLeft: '1vw'}}>|</Typography>
                <Typography variant='body1' sx={{color: '#59A076', marginLeft: '1vw'}}> Còn hàng </Typography>
               
            </BoxRating>
        </BoxStatus>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '1.3vw'}}>
            20.000đ
        </Typography>
        <BoxDescription>
            <TextDescrip>
                Mô tả:  
                <br/>
                Bánh sừng bò với lớp vỏ ngoài giòn và nhiều lớp bên trong mềm mịn, tạo hình cong đặc trưng.
                    
            </TextDescrip>
        </BoxDescription>
       
    </>
  )
}
