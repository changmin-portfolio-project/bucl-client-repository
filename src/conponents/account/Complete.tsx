import React from 'react';
import styled from 'styled-components';
import ColoredButton from '../ColoredButton';
import CompleteLayout from '../layout/CompleteLayout';
import AppLink from '../AppLink';

const Complete: React.FC = () => {
  const ColoredButtonStyle: React.CSSProperties = {
    padding: '13px 0',
    width: '100%',
  };
  return (
    <CompleteLayout>
      <p>
        <span>인출 요청</span>이 완료되었습니다.
      </p>
      <BtnBox>
        <AppLink to={'/'} style={ColoredButtonStyle}>
          <ColoredButton font="Subhead1" color="white">
            홈으로
          </ColoredButton>
        </AppLink>
        <MarginDiv></MarginDiv>
        <AppLink to={'/reward-withdrawals'} style={ColoredButtonStyle}>
          <ColoredButton font="Subhead1" color="white" backgroundColor="Grey8">
            인출 내역 보러가기
          </ColoredButton>
        </AppLink>
      </BtnBox>
    </CompleteLayout>
  );
};

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px ${({ theme }) => theme.paddings.base} 0
    ${({ theme }) => theme.paddings.base};
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  button {
    flex: 0.48;
  }
`;

const MarginDiv = styled.div`
  margin-right: 10px;
`;

export default Complete;
