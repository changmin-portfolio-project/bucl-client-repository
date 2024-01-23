import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { editRegistrationModeAtom } from '../../../../states/addressAtom';

const AddressAddBtn: React.FC = () => {
  const setEditRegistrationMode = useSetRecoilState(editRegistrationModeAtom);
  const addressAddBtnOnClick = () => {
    setEditRegistrationMode(true);
  };
  return (
    <AddressAddBtnContainer>
      <AddBtn onClick={addressAddBtnOnClick}>
        <img src="/assets/PlusIcon.svg" />새 배송지 추가하기
      </AddBtn>
    </AddressAddBtnContainer>
  );
};

const AddressAddBtnContainer = styled.div`
  padding-bottom: 10px;
`;
const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: white;
  img {
    margin-bottom: -2px;
  }
`;

export default AddressAddBtn;
