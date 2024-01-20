import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { editRegistrationModeAtom } from '../../../../states/addressAtom';
import ColoredButton from '../../../ColoredButton';

const AddressAddBtn: React.FC = () => {
  const setEditRegistrationMode = useSetRecoilState(editRegistrationModeAtom);
  const addressAddBtnOnClick = () => {
    setEditRegistrationMode(true);
  };

  const ColoredButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <AddressAddBtnContainer>
      <ColoredButton
        font="Subhead2"
        color="white"
        onClick={addressAddBtnOnClick}
        style={ColoredButtonStyle}
      >
        <img src="/assets/PlusIcon.svg" />새 배송지 추가하기
      </ColoredButton>
    </AddressAddBtnContainer>
  );
};

const AddressAddBtnContainer = styled.div`
  padding-bottom: 10px;
  img {
    margin-bottom: -2px;
  }
`;

export default AddressAddBtn;
