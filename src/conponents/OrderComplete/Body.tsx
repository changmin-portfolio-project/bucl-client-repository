import React from 'react';
import styled from 'styled-components';
import ColoredButton from '../ColoredButton';
import AppLink from '../AppLink';
import { NAVIGATION_RESET } from '../../const/AppVars';

const Body: React.FC = () => {
  const ColoredButtonStyle: React.CSSProperties = {
    padding: '13px 0',
  };

  return (
    <CompleteContainer>
      <TextWrap>
        <Text>결제가 완료되었습니다</Text>
        <SubText>구매 확정시 리워드를 받을 수 있습니다.</SubText>
      </TextWrap>
      <BtnBox>
        <BtnWrap>
          <AppLink to={'/'} type={NAVIGATION_RESET}>
            <ColoredButton
              font="Subhead1"
              color="white"
              style={ColoredButtonStyle}
            >
              더 둘러보기
            </ColoredButton>
          </AppLink>
        </BtnWrap>
        <MarginDiv />

        <BtnWrap>
          <AppLink isApp={true} to={`/my/orders`} type={NAVIGATION_RESET}>
            <ColoredButton
              font="Subhead1"
              color="white"
              backgroundColor="Grey8"
              style={ColoredButtonStyle}
            >
              주문 내역
            </ColoredButton>
          </AppLink>
        </BtnWrap>
      </BtnBox>
    </CompleteContainer>
  );
};

const CompleteContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
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
