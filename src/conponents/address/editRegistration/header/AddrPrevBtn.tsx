import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  currentAddressNumAtom,
  editRegistrationModeAtom,
} from '../../../../states/addressAtom';

const AddrPrevBtn: React.FC = () => {
  const setEditRegistrationMode = useSetRecoilState(editRegistrationModeAtom);
  const setCurrentAddressNum = useSetRecoilState(currentAddressNumAtom);
  const addressAddBtnOnClick = () => {
    setEditRegistrationMode(false);
    setCurrentAddressNum(0);
  };

  return (
    <AddrPrevBtnContainer onClick={() => addressAddBtnOnClick()}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AddrPrevBtnContainer>
  );
};

const AddrPrevBtnContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translate(-50%, 18%);
  display: flex;
  cursor: pointer;
`;

export default AddrPrevBtn;
