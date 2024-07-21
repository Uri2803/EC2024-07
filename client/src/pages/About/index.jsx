import React from 'react';
import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header1';
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
    margin: 3vw 5vw;
    padding :0 2vw;

`;
const TextTitle = styled.span`
  font-family: 'Italianno', cursive;
  font-size: 6vw;
  color: #F48C48;
  &:first-child {
    margin-right: auto; 
  }
  &:last-child {
    padding-left: 10vw;
  }
  @media (max-width: 768px) {
    font-size: 7vw;
  }
  @media (max-width: 480px) {
    font-size: 8vw;
  }

`;
const StoryBox = styled(Box)`
    width: 60vw;
    margin: 0 2vw;
    pading: 3vw;
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media (max-width: 768px) {
        width: 70vw;
    }
    @media (max-width: 480px) {
       width: 75vw;
    }
`;
const StoryText = styled.p`
  font-family: 'Patrick Hand', cursive;
  font-size: 1.5vw;
  letter-spacing: 0.1px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
  @media (max-width: 480px) {
    font-size: 4.5vw;
  }

`;

const AboutImg = styled.img`
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    margin: 10px;
`;


const About = () => {
  return (
  <MainContainer>
    <Header/>
        <BodyBox>
            <AboutBox>
                <TitleBox >
                    <TextTitle> Câu chuyện  </TextTitle>
                    <br/>
                    <TextTitle > từ QKKA.Bakery </TextTitle> 
                </TitleBox>
                <StoryBox>
                    <div>
                    <StoryText>
                        QKKA Bakery được thành lập từ niềm đam mê và tâm huyết của một nhóm bạn trẻ yêu thích làm bánh. Mỗi chiếc bánh ra lò không chỉ là một sản phẩm ngon miệng, mà còn chứa đựng câu chuyện về tình yêu và sự sáng tạo không ngừng nghỉ.
                    </StoryText>
                    <StoryText>
                        Chúng tôi bắt đầu từ những chiếc bánh đơn giản, nhưng với sự tận tâm và khao khát mang lại niềm vui cho mọi người, QKKA.Bakery đã không ngừng phát triển và đa dạng hóa các sản phẩm của mình. Từ những chiếc bánh mì thơm phức đến những chiếc bánh kem tinh tế, mỗi sản phẩm đều được chúng tôi chăm chút tỉ mỉ từ khâu chọn nguyên liệu đến quy trình chế biến.
                    </StoryText>
                    {/* <StoryText>
                        Chúng tôi tin rằng, một chiếc bánh ngon không chỉ nằm ở hương vị mà còn ở câu chuyện phía sau nó. Với phương châm "Chất lượng từ tâm", QKKA.Bakery luôn nỗ lực mang đến những sản phẩm tốt nhất, an toàn và bổ dưỡng cho khách hàng. Mỗi khách hàng đến với chúng tôi đều là một phần của câu chuyện này, là nguồn động lực để chúng tôi tiếp tục sáng tạo và hoàn thiện mình.
                    </StoryText> */}
                    </div>
                    <AboutImg src="/public/about_img1.png" alt="" />


                </StoryBox>
            </AboutBox> 
        </BodyBox>
    <Footer/>
   </MainContainer>
    
    
  );
};

export default About;