import React, { useState } from 'react';
import styled from 'styled-components';
import SecessionPopup from './SecessionPopup';

const SecessionBtn: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const secessionBtnOnClick = () => {
    setPopupOpen(!popupOpen);
  };
  return (
    <SecessionBtnContainer>
      <SecessionButton onClick={secessionBtnOnClick}>탈퇴하기</SecessionButton>
      {popupOpen && (
        <SecessionPopup secessionBtnOnClick={secessionBtnOnClick} />
      )}
    </SecessionBtnContainer>
  );
};

const SecessionBtnContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

const SecessionButton = styled.button`
  background-color: transparent;
  border: none;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;

export default SecessionBtn;
