import React from 'react';
import { SetterOrUpdater } from 'recoil';
import styled from 'styled-components';

interface PrevPopupButtonProps {
  setFunction:
    | SetterOrUpdater<boolean>
    | React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const PrevPopupButton: React.FC<PrevPopupButtonProps> = ({ setFunction }) => {
  return (
    <PrevPopupButtonContainer onClick={() => setFunction(false)}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="black"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </PrevPopupButtonContainer>
  );
};

const PrevPopupButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 8%;
  transform: translate(-50%, 0%);
  display: flex;
  cursor: pointer;
  paddingbottom: 5px;
`;

export default PrevPopupButton;
