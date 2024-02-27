import React from 'react';
import ColoredButton from '../conponents/ColoredButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BuclLogo from '../conponents/BuclLogo';

const BadRequestPage: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <BuclLogo />
      </HeaderContainer>
      <Wrap>
        <Title>잘못된 API 요청을 보냈습니다.</Title>
        <SubTitleContainer>
          <SubTitle>
            잘못된 API 요청을 보내 다음 페이지로 이동 했습니다.
          </SubTitle>
        </SubTitleContainer>
        <Link to="/">
          <ButtonWrap>
            <ColoredButton
              font="Subhead1"
              color="white"
              backgroundColor="Orange5"
            >
              홈으로
            </ColoredButton>
          </ButtonWrap>
        </Link>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: table;
  min-height: 100vh;
  width: 100%;
`;

const Wrap = styled.div`
  text-align: center;

  display: table-cell;
  vertical-align: middle;
`;

const Title = styled.div`
  font: ${({ theme }) => theme.fontSizes.Display1};
  padding-bottom: 20px;
`;

const SubTitleContainer = styled.div`
  padding-bottom: 10px;
`;

const SubTitle = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const ButtonWrap = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const HeaderContainer = styled.header`
  position: fixed;
  max-width: 600px;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0 6px 0;
  width: 100%;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

export default BadRequestPage;
