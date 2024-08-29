import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Box, style } from '@mui/system';
import AcountInfor from '../../Acount/AcountInfor';
import { getUserInfor } from '../../../service/api';


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

const BoxButton = style(Box)`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #F48C48;
`;


const AdminChef = () => {
    const [userInfor, setUserInfor] = useState('');
    const [error, setError] = useState('');
    const getUser = async ()=>{
        try{
        const result = await getUserInfor();
        setUserInfor(result.userInfor)
        }catch(err){
        setError(err.response?.data?.message || 'Login failed.');
        }
    }
    useEffect(()=>{
        getUser();
  }, []);
    return (
        <MainContainer>
            <Header/>
            <BodyBox>
            <AcountInfor userInfor={userInfor}/>
            <TextDiv>Xin chào! <strong>{userInfor.Username}  </strong> </TextDiv>
                <BoxButton>
                {['Quản lý bếp', 'Quản lý lò nướng',  'Đăng xuất'].map(buttonName => (
                    <ItemButton
                        key={buttonName}
                        active={activeButton === buttonName}
                        onClick={() => setActiveButton(buttonName)}
                        >
                        {buttonName}
                    </ItemButton>
                ))}
                </BoxButton>

            </BodyBox>
            <ChefTable/>
            <Footer/>
        </MainContainer>
    )
}

export default AdminChef;