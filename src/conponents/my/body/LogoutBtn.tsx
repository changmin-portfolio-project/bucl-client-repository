import React, { useState } from 'react';
import styled from 'styled-components';
import LogoutPopup from './LogoutPopup';

const LogoutBtn: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleLogout = () => {
    setPopupOpen(true);
  };
  return (
    <LogoutBtnContainer>
      <button onClick={handleLogout}>로그아웃</button>
      {popupOpen && <LogoutPopup setPopupOpen={setPopupOpen} />}
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
