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
`;

const privacyPolicy = () => {
  return (
  <MainContainer>
    <Header/>
        <BodyBox>
            <AboutBox>
                <TitleBox >
                    <TextTitle > Chính sách bảo mật  </TextTitle>
                </TitleBox>
                
                <StoryBox>
                <Heading>MỤC ĐÍCH VÀ PHẠM VI THU THẬP</Heading>
                <ol>
                    <li>Việc thu thập dữ liệu trên website bao gồm: họ tên, email, điện thoại, địa chỉ khách hàng. Đây là các thông tin mà chúng tôi  cần thành viên cung cấp bắt buộc khi gửi thông tin nhờ tư vấn hay muốn mua sản phẩm và để chúng tôi   liên hệ xác nhận lại với khách hàng trên website nhằm đảm bảo quyền lợi cho cho người tiêu dùng. </li>
                    <li>Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới thông tin mà mình cung cấp và hộp thư điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho webiste chúng tôi về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp. </li>
                </ol>
                

                </StoryBox>
                
                <StoryBox>
                <Heading>PHẠM VI SỬ DỤNG THÔNG TIN</Heading>
                Chúng tôi sử dụng thông tin thành viên cung cấp để:
                    <ul>
                        <li>Liên hệ xác nhận đơn hàng và giao hàng cho thành viên khi nhận được yêu cầu từ thành viên;</li>
                        <li>Cung cấp thông tin về sản phẩm đến khách hàng nếu có yêu cầu từ khách hàng;</li>
                        <li>Gửi email tiếp thị, khuyến mại về hàng hóa do chúng tôi bán;</li>
                        <li>Gửi các thông báo về các hoạt động trên website</li>
                        <li>Liên lạc và giải quyết với người dùng trong những trường hợp đặc biệt;</li>
                        <li>Không sử dụng thông tin cá nhân của người dùng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch </li>
                        <li>Khi có yêu cầu của cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng. </li>
                    </ul>

                </StoryBox>

                <StoryBox>
                <Heading>THỜI GIAN LƯU TRỮ THÔNG TIN</Heading>
                Dữ liệu cá nhân của thành viên sẽ được lưu trữ cho đến khi có yêu cầu ban quản trị hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của chúng tôi   

                </StoryBox>

                <StoryBox>
                <Heading>NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN VỚI THÔNG TIN CÁ NHÂN </Heading>
                    <ul>
                        <li>Ban quản trị website</li>
                        <li>Khách hàng sở hữu thông tin cá nhân đó</li>
                        <li>Các cơ quan Pháp luật Việt Nam có thẩm quyền</li>
                    </ul>
                </StoryBox>
            </AboutBox> 
        </BodyBox>
    <Footer/>
   </MainContainer>
    
    
  );
};

export default privacyPolicy;