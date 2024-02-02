import React, { useState } from 'react';
import styled from 'styled-components';
import SecessionPopup from './SecessionPopup';
import TextButton from '../../TextButton';

const SecessionButton: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const secessionBtnOnClick = () => {
    setPopupOpen(!popupOpen);
  };
  return (
    <SecessionBtnContainer>
      <TextButton onClick={secessionBtnOnClick} font="Body2">
        탈퇴하기
      </TextButton>
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

export default SecessionButton;
