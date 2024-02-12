import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ColoredButton from '../ColoredButton';
import CompleteLayout from '../layout/CompleteLayout';

const Complete: React.FC = () => {
  const ColoredButtonStyle: React.CSSProperties = {
    padding: '13px 0',
  };
  return (
    <CompleteLayout>
      <p>
        <span>인출 요청</span>이 완료되었습니다.
      </p>
      <BtnBox>
        <ColoredButton font="Subhead1" color="white" style={ColoredButtonStyle}>
          <Link to={'/'}>홈으로</Link>
        </ColoredButton>
        <ColoredButton
          font="Subhead1"
          color="white"
          backgroundColor="Grey8"
          style={ColoredButtonStyle}
        >
          <Link to={'/reward-withdrawals'}>인출 내역 보러가기</Link>
        </ColoredButton>
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

export default Complete;
