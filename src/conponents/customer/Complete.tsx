import React from 'react';
import CompleteLayout from '../layout/CompleteLayout';
import { Link } from 'react-router-dom';
import ColoredButton from '../ColoredButton';
import styled from 'styled-components';

const Complete: React.FC = () => {
  const ColoredButtonStyle: React.CSSProperties = {};
  return (
    <CompleteLayout>
      <p>
        <span>회원 탈퇴</span>가 완료되었습니다.
      </p>
      <span>BUCL을 이용해주셔서 감사합니다.</span>
      <SubTextWrap>
        <SubTextSpan>해당 계정은 15일 후 영구 삭제 될 예정입니다.</SubTextSpan>
        <SubTextSpan>
          15일 전에 다시 가입시 해당 계정은 복구 됩니다.
        </SubTextSpan>
      </SubTextWrap>

      <HomeButtonDiv>
        <Link to={'/'} style={ColoredButtonStyle}>
          <ColoredButton font="Subhead1" color="white">
            홈으로
          </ColoredButton>
        </Link>
      </HomeButtonDiv>
    </CompleteLayout>
  );
};

const HomeButtonDiv = styled.div`
  margin-top: 25px;
  width: 70%;
`;

const SubTextWrap = styled.div`
  margin-top: 5px;
`;

const SubTextSpan = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body1};
`;

export default Complete;
