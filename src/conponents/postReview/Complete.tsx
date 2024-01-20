import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ColoredButton from '../ColoredButton';

const Complete: React.FC = () => {
  const ColoredButtonStyle: React.CSSProperties = {
    padding: '13px 0',
  };
  return (
    <CompleteContainer>
      <Text>
        <span>리뷰 작성</span>이 완료되었습니다.
      </Text>
      <BtnBox>
        <ColoredButton font="Subhead1" color="white" style={ColoredButtonStyle}>
          <Link to={'/'}>더 둘러보기</Link>
        </ColoredButton>
        <ColoredButton
          font="Subhead1"
          color="white"
          backgroundColor="Grey8"
          style={ColoredButtonStyle}
        >
          <Link to={'/my/orders'}>주문 내역</Link>
        </ColoredButton>
      </BtnBox>
    </CompleteContainer>
  );
};

const CompleteContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.p`
  font: ${({ theme }) => theme.fontSizes.Headline};
  span {
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 7% 0 7%;
  width: calc(100% - 14%);
  button {
    flex: 0.85;
  }
`;

export default Complete;
