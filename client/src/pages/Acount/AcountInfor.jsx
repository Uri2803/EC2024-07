import React from 'react';
import { Box, FormControl, InputLabel, OutlinedInput, Grid } from '@mui/material';
import styled from 'styled-components';

const TileDiv = styled.div`
  width: 100%;
  margin: 10px 0px;
  padding: 10px 5px;
  font-family: Tahoma, sans-serif;
  font-size: 1.3vw;
  @media (max-width: 768px) {
    font-size: 2vw;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

const FormBox = styled(Box)`
  margin: 10px 10px;
  padding: 0 2vw;
   @media (max-width: 768px) {
   width: 50vw;
  }
  @media (max-width: 480px) {
    width: 60vw;
  }
`;

const SubmitButonContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  margin: 30px 10px;
  padding: 0 2vw;
  justify-content: space-between;
`;

const SubmitButon = styled(Box)`
  width: 20%;
  height: 5vh;
  padding: 10px;
  background-color: #F48C48;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 1vw;
  media (max-width: 768px) {
    font-size: 1.5vw;
    width: 40%;
  }
  @media (max-width: 480px) {
    font-size: 2vw;
     width: 45%;
  }

`;

const CancelButton = styled(SubmitButon)`
  background-color: #CCCCCC; 
  color: #000000;
`;
export default function AcountInfor() {
  return (
    <>
      <FormBox>
        <TileDiv style={{ color: '#F48C48', fontWeight: 600 }}>Thông tin tài khoản</TileDiv>
        <Grid container spacing={4} sx={{width: '50vw'}}>
          {[
            'Họ',
            'Tên',
            'Email',
            'Địa chỉ'
          ].map((label, index) => (
            <Grid item xs={6} key={index}  >
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor={`outlined-adornment-${label.replace(/ /g, '')}`}>{label.charAt(0).toUpperCase() + label.slice(1)}</InputLabel>
                <OutlinedInput
                  id={`outlined-adornment-${label.replace(/ /g, '')}`}
                  label={label.toLocaleUpperCase()}
                  name={label.replace(/ /g, '')}
                />
              </FormControl>
            </Grid>
          ))}
        </Grid>
        <TileDiv style={{ fontWeight: 400 }}>Thay đổi mật khẩu</TileDiv>

        <Grid container spacing={4} sx={{width: '55vw'}}>
          {[
            'Mật khẩu hiện tại ',
            'Mật khẩu mới',
            'Xác nhận mật khẩu mới',
          ].map((label, index) => (
            <Grid item xs={12} key={index}>
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel  htmlFor={`outlined-adornment-${label.replace(/ /g, '')}`}>{label.charAt(0).toUpperCase() + label.slice(1)}</InputLabel>
                <OutlinedInput
                  id={`outlined-adornment-${label.replace(/ /g, '')}`}
                  label={label.toLocaleUpperCase()}
                  name={label.replace(/ /g, '')}
                  
                />
              </FormControl>
            </Grid>
          ))}
        </Grid>
      </FormBox>
      <SubmitButonContainer>
      <CancelButton>Huỷ</CancelButton>
        <SubmitButon>Lưu thay đổi</SubmitButon>
        
        
      </SubmitButonContainer>
    </>
  );
}
