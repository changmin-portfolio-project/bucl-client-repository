import React from 'react';
import styled from 'styled-components';
import { editRegistrationModeAtom } from '../../../../states/addressAtom';
import { useSetRecoilState } from 'recoil';

const AddressEditBtn: React.FC = () => {
  const setEditRegistrationMode = useSetRecoilState(editRegistrationModeAtom);
  const addressAddBtnOnClick = () => {
    setEditRegistrationMode(true);
  };
  return (
    <AddressEditBtnContainer>
      <EditBtn onClick={addressAddBtnOnClick}>
        <img src="/assets/PlusIcon.svg" />
        배송지 수정하기
      </EditBtn>
    </AddressEditBtnContainer>
  );
};

const AddressEditBtnContainer = styled.div`
  padding-bottom: 10px;
`;
const EditBtn = styled.button`
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
export default AddressEditBtn;
