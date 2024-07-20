import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components';

const FooterContainer = styled(Box)`
  width: 100vw;
  max-height: 50vh;
  background-image: url('/public/footer_backgroud.png');
  padding: 32px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Payment = styled.img`
  height: 2vw;
  width: auto;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    height: 3vw;
  }
  @media (max-width: 480px) {
    height: 4vw;
  }
`;

const StyledTypography = styled.p`
  font-family: Tahoma, sans-serif;
  font-size: 1.2vw;
  color: #fff; 
   @media (max-width: 768px) {
    font-size: 1.8vw;
  }
  @media (max-width: 480px) {
    font-size: 2vw;
  }
`;

const Menu = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  & > * {
    margin-right: 16px;
    text-decoration: none;
    color: #666;
    font-size: 14px;
  }

  & > *:last-child {
    margin-right: 0;
  }

  & > *:hover {
    color: #fbf6f0;
  }
`;

const Contact = styled.div`
  margin-bottom: 16px;

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    & > svg {
      margin-right: 8px;
      color: #fbf6f0;
    }
  }
`;



const Copyright = styled(Typography)`
  font-size: 14px;
  color: #666;
  margin-top: 16px;
`;



const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2}>
        <Grid item xs={5} style={{ marginLeft: '4vw' }}>
          <StyledTypography variant="h5" gutterBottom>QKAA Bakery</StyledTypography>
          <StyledTypography gutterBottom>Địa chỉ: 227 Nguyễn Văn Cừ, phường 4, Quận 5, TP. HCM</StyledTypography>
          <StyledTypography gutterBottom>Hotline: 0987654321</StyledTypography>
          <StyledTypography gutterBottom>Email: qkaa.bakery@gmail.com</StyledTypography>
          <Grid container spacing={1}>
            <Grid item>
              <IconButton aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Grid>
            <Grid item> 
              <IconButton aria-label="Email">
                <EmailIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <StyledTypography variant="h6" gutterBottom>Liên kết nhanh</StyledTypography>
          <StyledTypography gutterBottom>Giới thiệu</StyledTypography>
          <StyledTypography gutterBottom>Chính sách đổi trả</StyledTypography>
          <StyledTypography gutterBottom>Chính sách bảo mật</StyledTypography>
          <StyledTypography gutterBottom>Điều khoản dịch vụ</StyledTypography>
          <StyledTypography gutterBottom>Câu hỏi thường gặp</StyledTypography>
        </Grid>
        <Grid item xs={3} container direction="column" alignItems="center">
          <StyledTypography variant="h5" gutterBottom>Hỗ trợ thanh toán</StyledTypography>
          <Grid item>
            <Payment src="/public/paypal.png" alt="logo paypal" />
          </Grid>
          <Grid item>
            <Payment src="/public/momo.png" alt="logo momo" />
          </Grid>
          <Grid item>
            <Payment src="/public/vnp.png" alt="logo vnp" />
          </Grid>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
