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

const returnPolicy = () => {
  return (
  <MainContainer>
    <Header/>
        <BodyBox>
            <AboutBox>
                <TitleBox >
                    <TextTitle > Chính sách đổi trả  </TextTitle>
                </TitleBox>
                
                <StoryBox>
                <Heading>ĐIỀU KIỆN ĐỔI TRẢ</Heading>
                    <ol>
                        <li>Khách hàng cung cấp đầy đủ hoá đơn mua hàng, nhãn mác trên sản phẩm vẫn còn đầy đủ.</li>
                        <li>
                        Khách hàng cung cấp hình ảnh hoặc video của sản phẩm được cho là không đạt chất lượng cùng với lí do yêu cầu đổi trả. Hình ảnh hoặc video phải rõ nét, ghi lại cụ thể và chân thực quá trình kiểm tra bánh khi phát hiện có vấn đề.
                        </li>
                        <li>Sản phẩm phải được đổi trả trong vòng 24 giờ kể từ thời điểm nhận hàng để đảm bảo hạn sử dụng vẫn còn.</li>
                    </ol>

                </StoryBox>
                
                <StoryBox>
                <Heading>CÁC TRƯỜNG HỢP CHẤP NHẬN ĐỔI TRẢ HOẶC HOÀN TIỀN</Heading>
                    <ol>
                        <li>Sản phẩm bị hỏng hoặc biến dạng nặng trong quá trình vận chuyển.</li>
                        <li>Sản phẩm bị hỏng, có mùi ôi thiu.</li>
                        <li>Sản phẩm có dị vật bên trong. Trong trường hợp này, quý khách lưu ý vui lòng ghi hình rõ nét để thể hiện rõ rằng dị vật xuất hiện từ trong bánh.</li>
                        <li>Sản phẩm đã hết hạn sử dụng ghi trên bao bì (tính tại thời điểm nhận sản phẩm).</li>
                    </ol>

                </StoryBox>

                <StoryBox>
                <Heading>CHÍNH SÁCH ĐỔI TRẢ HOẶC HOÀN TIỀN</Heading>
                    <ol>
                        <li>Nếu khiếu nại của khách hàng đáp ứng đủ tất cả các điều kiện đã nêu, chúng tôi sẽ tiến hành đổi sản phẩm khác hoặc hoàn tiền cho khách hàng.</li>
                        <li>Trong trường hợp đổi sản phẩm, nếu sản phẩm mới có giá cao hơn, khách hàng sẽ phải thanh toán phần chênh lệch</li>
                        <li>Trường hợp không còn sản phẩm tương tự: chúng tôi sẽ hoàn tiền 100% cho khách hàng.</li>
                        <li>Chi phí ship hai chiều sẽ do QKAA Bakery phụ trách nếu yêu cầu đổi trả được chúng tôi chấp nhận.</li>
                        <li>Hoàn tiền sẽ được thực hiện qua hình thức thanh toán mà khách hàng đã sử dụng khi mua hàng. Nếu khách hàng thanh toán bằng tiền mặt, chúng tôi sẽ hoàn tiền qua tài khoản ngân hàng của khách hàng. Quá trình hoàn tiền sẽ mất từ 3-7 ngày làm kể từ ngày chấp nhận yêu cầu hoàn tiền.</li>
                        <li>Địa điểm đổi trả: Khách hàng có thể đến trực tiếp cửa hàng của QKAA Bakery để đổi trả sản phẩm. Nếu khách hàng ở xa, chúng tôi sẽ hỗ trợ đổi trả qua dịch vụ vận chuyển.</li>
                    </ol>
                    Cảm ơn Quý khách hàng đã tin tưởng và đồng hành cùng QKKA Bakery!
                </StoryBox>
            </AboutBox> 
        </BodyBox>
    <Footer/>
   </MainContainer>
    
    
  );
};

export default returnPolicy;