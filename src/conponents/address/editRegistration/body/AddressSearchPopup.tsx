/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import PopupLayout from '../../../layout/PopupLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchPopupVisibleAtom } from '../../../../states/addressAtom';

const AddressSearchPopup: React.FC = () => {
  const [visible, setVisible] = useRecoilState(searchPopupVisibleAtom);

  const popupLayoutStyle: React.CSSProperties = {
    opacity: 0,
    display: 'none',
  };

  const popupLayoutStyle2: React.CSSProperties = {
    opacity: 1,
    display: 'flex',
  };

  return (
    <PopupLayout style={visible ? popupLayoutStyle2 : popupLayoutStyle}>
      <AddressPopupBox id="wrap">
        <ModalCloseWrapper>
          <ModalCloseButton onClick={() => setVisible(false)}>
            x
          </ModalCloseButton>
        </ModalCloseWrapper>
      </AddressPopupBox>
    </PopupLayout>
  );
};

const AddressPopupBox = styled.div`
  position: absolute;
  bottom: 0;
  top: 150px;
  left: 0;
  /* transform: translate(0, -50%); */
  width: 100%;
  /* height: 100vh; */
`;
const ModalCloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ModalCloseButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

export default AddressSearchPopup;
