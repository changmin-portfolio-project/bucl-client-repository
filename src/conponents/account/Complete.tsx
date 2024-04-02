import React from 'react';
import styled from 'styled-components';
import ColoredButton from '../ColoredButton';
import CompleteLayout from '../layout/CompleteLayout';
import { Link } from 'react-router-dom';
import { HOME_PATH, REWARD_WITHDRAWAL_PATH } from '../../const/PathVar';

const Complete: React.FC = () => {
  const ColoredButtonStyle: React.CSSProperties = {
    padding: '13px 0',
    width: '100%',
  };
  return (
    <CompleteLayout>
      <p>
        <span>인출 계좌</span>가 변경되었습니다.
      </p>
      <BtnBox>
        <Link to={HOME_PATH} style={ColoredButtonStyle}>
          <ColoredButton font="Subhead1" color="white">
            홈으로
          </ColoredButton>
        </Link>
        <MarginDiv></MarginDiv>
        <Link to={REWARD_WITHDRAWAL_PATH} style={ColoredButtonStyle}>
          <ColoredButton font="Subhead1" color="white" backgroundColor="Grey8">
            인출 내역 보러가기
          </ColoredButton>
        </Link>
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
