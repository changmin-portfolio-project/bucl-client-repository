import React from 'react';
import styled from 'styled-components';

const LogoutBtn: React.FC = () => {
  return (
    <LogoutBtnContainer>
      <button>로그아웃</button>
    </LogoutBtnContainer>
  );
};

const LogoutBtnContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  button {
    background-color: transparent;
    border: none;
    font: ${({ theme }) => theme.fontSizes.Body2};
    color: ${({ theme }) => theme.grey.Grey5};
  }
`;

export default LogoutBtn;
