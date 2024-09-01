import React from 'react';
import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer'


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

const AboutBox = styled(Box)`
    width: 95vw;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TitleBox = styled(Box)`
    padding :0 2vw;
`;
const TextTitle = styled.h2`
  font-size: 2vw;
  margin-bottom: 0px;
  color: #F48C48;
  text-transform: uppercase;
`;
const StoryBox = styled(Box)`
    width: 72vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
`;

const Heading = styled.h3`
  margin-bottom: 0px;
  color: #85200C;   
  text-transform: uppercase;
`;

const paymentPolicy = () => {
  return (
  <MainContainer>
    <Header/>
        <BodyBox>
            <AboutBox>
                <TitleBox >
                    <TextTitle > Chính sách thanh toán  </TextTitle>
                </TitleBox>
                
                <StoryBox>
                <Heading>Hình thức thanh toán bằng tiền mặt</Heading>
                - COD là viết tắt của Cash On Delivery, nghĩa là thanh toán khi nhận hàng. Với phương thức thanh toán này, Quý khách trả tiền mặt cho nhân viên giao hàng ngay khi nhận được đơn hàng của mình. Chúng tôi chấp nhận hình thức thanh toán khi nhận hàng (COD) cho tất cả các đơn hàng trên phạm vi toàn quốc.<br /><br />
                - Lưu ý: Chỉ áp dụng cho đơn hàng có tổng giá trị nhỏ hơn 2 triệu đồng. Nếu đơn hàng trên 2 triệu đồng, Quý khách hàng vui lòng chọn hình thức thanh toán khác.

                </StoryBox>
                
                <StoryBox>
                <Heading>Hình thức Thanh toán bằng chuyển khoản</Heading>
                    <ul>
                        <li>Qua VNPAY.</li>
                        <li>Qua Momo</li>
                        <li>Qua PayPal</li>
                    </ul>
                    Cảm ơn Quý khách hàng đã tin tưởng và đồng hành cùng QKKA Bakery!
                </StoryBox>
            </AboutBox> 
        </BodyBox>
    <Footer/>
   </MainContainer>
    
    
  );
};

export default paymentPolicy;