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

const shippingPolicy = () => {
  return (
  <MainContainer>
    <Header/>
        <BodyBox>
            <AboutBox>
                <TitleBox >
                    <TextTitle > Chính sách vận chuyển  </TextTitle>
                </TitleBox>
                
                <StoryBox>
                <Heading>CÁC PHƯƠNG THỨC GIAO HÀNG</Heading>
                <ul>
                    <li>Khách hàng mua trực tiếp hàng tại cửa hàng</li>
                    <li>Ship hàng tận nơi</li>
                </ul>

                </StoryBox>
                
                <StoryBox>
                <Heading>Thời hạn ước tính cho việc giao hàng</Heading>
                    <ul>
                        <li>Thời gian nhận hàng: tùy thuộc vào loại hình dịch vụ/ hình thức gửi hàng, Bên cung cấp dịch vụ sẽ thông báo cụ thể về thời gian nhận hàng của khách hàng sau khi khách hàng xác nhận đơn hàng. </li>
                        <li> Hình thức chuyển hàng: Nhân viên giao hàng đến địa chỉ khách hàng cung cấp. (bỏ chuyển phát) </li>
                        <li>Trước khi chuyển hàng, Bên cung cấp dịch vụ sẽ thông báo cho khách hàng về thời gian và cước phí giao hàng (nếu có). </li>
                        <li>Trường hợp phát sinh chậm trễ trong việc giao hàng không phải do lỗi của Bên cung cấp dịch vụ thì Bên cung cấp dịch vụ sẽ có thông tin kịp thời cho khách hàng và khách hàng có thể hủy giao dịch (nếu muốn). </li>
                    </ul>
                    Tuy nhiên, cũng có trường hợp việc giao hàng kéo dài hơn nhưng chỉ xảy ra trong những tình huống bất khả kháng như sau:
                    <ul>
                        <li>Nhân viên chúng tôi liên lạc với khách hàng qua điện thoại không được nên không thể giao hàng. </li>
                        <li>Địa chỉ giao hàng bạn cung cấp không chính xác hoặc khó tìm.</li>
                        <li>Số lượng đơn hàng tăng đột biến khiến việc xử lý đơn hàng bị chậm.</li>
                        <li>Đối tác cung cấp hàng chậm hơn dự kiến khiến việc giao hàng bị chậm lại hoặc đối tác vận chuyển giao hàng bị chậm
                        Về phí vận chuyển, chúng tôi sử dụng dịch vụ vận chuyển ngoài nên cước phí vận chuyển sẽ được tính theo phí của các đơn vị vận chuyển tùy vào vị trí và khối lượng của đơn hàng, khi liên hệ lại xác nhận đơn hàng với khách sẽ báo mức phí cụ thể cho khách hàng. </li>
                    </ul>

                </StoryBox>

                
            </AboutBox> 
        </BodyBox>
    <Footer/>
   </MainContainer>
    
    
  );
};

export default shippingPolicy;