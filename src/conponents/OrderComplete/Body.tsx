import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ColoredButton from '../ColoredButton';

const Body: React.FC = () => {
  const ColoredButtonStyle: React.CSSProperties = {
    padding: '13px 0',
  };
  return (
    <CompleteContainer>
      <TextWrap>
        <Text>결제가 완료되었습니다</Text>
        <SubText>최대한 빠르게</SubText>
        <SubText>받아보실 수 있도록</SubText>
        <SubText>최선을 다하겠습니다.</SubText>
      </TextWrap>
      <BtnBox>
        <BtnWrap>
          <Link to={'/'}>
            <ColoredButton
              font="Subhead1"
              color="white"
              style={ColoredButtonStyle}
            >
              더 둘러보기
            </ColoredButton>
          </Link>
        </BtnWrap>
        <MarginDiv />

        <BtnWrap>
          <Link to={'/my/orders'}>
            <ColoredButton
              font="Subhead1"
              color="white"
              backgroundColor="Grey8"
              style={ColoredButtonStyle}
            >
              주문 내역
            </ColoredButton>
          </Link>
        </BtnWrap>
      </BtnBox>
    </CompleteContainer>
  );
};

const CompleteContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;

  padding: 0 ${({ theme }) => theme.paddings.base};
`;

const TextWrap = styled.div`
  margin-bottom: 50px;
`;

const Text = styled.p`
  font: ${({ theme }) => theme.fontSizes.Display1};
  color: black;
  span {
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

const SubText = styled.p`
  font: ${({ theme }) => theme.fontSizes.Subhead4};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    flex: 0.85;
  }
`;

const BtnWrap = styled.div`
  width: 100%;
`;

const MarginDiv = styled.div`
  margin-right: 10px;
`;

export default Body;
