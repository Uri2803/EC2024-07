import React, {useState} from 'react';
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

export default function AcountInfor({ userInfor }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert('Mật khẩu mới và xác nhận mật khẩu không khớp!');
      return;
    }
    
    // Thực hiện logic thay đổi mật khẩu ở đây, ví dụ như gọi API
    console.log('Thay đổi mật khẩu thành công:', { currentPassword, newPassword });
    
    // Reset các trường mật khẩu sau khi xử lý xong
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };
  
  return (
    <>
      <FormBox>
        <TileDiv style={{ color: '#F48C48', fontWeight: 600 }}>Thông tin tài khoản</TileDiv>
        <Grid container spacing={4} sx={{ width: '50vw' }}>
          <Grid item xs={6}>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-Họ" shrink >Họ Tên</InputLabel>
              <OutlinedInput
                id="outlined-adornment-Họ"
                label="Họ Tên"
                name="Họ Tên"
                value={userInfor? userInfor.UserFullName: ''}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-Email"  shrink>Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-Email"
                label="Email"
                name="Email"
                value={userInfor?userInfor.Email : ''}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-Địa chỉ" shrink>Địa chỉ</InputLabel>
              <OutlinedInput
                id="outlined-adornment-Địa chỉ"
                label="Địa chỉ"
                name="Địa chỉ"
                value={userInfor?userInfor.Address : ''}
              />
            </FormControl>
          </Grid>
        </Grid>
        <TileDiv style={{ fontWeight: 400 }}>Thay đổi mật khẩu</TileDiv>

        <Grid container spacing={4} sx={{ width: '55vw' }}>
          <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Họ">Mật khẩu hiện tại</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-Matkhauhientai"
                  label="Mật khẩu hiện tại"
                  name="Mật khẩu hiện tại"
                  value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Họ" >Mật khẩu mới</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-Matkhaumoi"
                  label="Mật khẩu mới"
                  value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
            </Grid>
            
            
            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-Họ" >Xác nhận mật khẩu mới</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-xacnhanmatkhaumoi"
                  label="Xác nhận mật khẩu mới"
                  name="Xác nhận mật khẩu mới"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormControl>
            </Grid>
        </Grid>
      </FormBox>
      <SubmitButonContainer>
        <CancelButton>Huỷ</CancelButton>
        <SubmitButon>Lưu thay đổi</SubmitButon>
      </SubmitButonContainer>
    </>
  );
}
