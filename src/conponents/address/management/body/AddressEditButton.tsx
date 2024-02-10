import React from 'react';
import styled from 'styled-components';
import { editRegistrationModeAtom } from '../../../../states/addressAtom';
import { useSetRecoilState } from 'recoil';
import ColoredButton from '../../../ColoredButton';

const AddressEditButton: React.FC = () => {
  const setEditRegistrationMode = useSetRecoilState(editRegistrationModeAtom);
  const addressAddBtnOnClick = () => {
    setEditRegistrationMode(true);
  };

  const ColoredButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 0',
  };
  return (
    <AddressEditBtnContainer>
      <ColoredButton
        style={ColoredButtonStyle}
        color="white"
        font="Subhead2"
        onClick={addressAddBtnOnClick}
      >
        <img src="/assets/PlusIcon.svg" />
        배송지 수정하기
      </ColoredButton>
    </AddressEditBtnContainer>
  );
};

const AddressEditBtnContainer = styled.div`
  padding-bottom: 10px;
  <<<<<<< HEAD =======>>>>>>>02dba0a99144e6fd3d36dce4ed8a98a3a0818099 img {
    margin-bottom: -2px;
  }
`;

export default AddressEditButton;
