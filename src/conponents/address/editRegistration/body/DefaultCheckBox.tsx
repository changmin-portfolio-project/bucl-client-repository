import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDefaultAddressAtom } from '../../../../states/addressAtom';

const DefaultCheckBox: React.FC = () => {
  const [isDefaultAddress, setIsDefaultAddress] =
    useRecoilState(isDefaultAddressAtom);
  const [isChecked] = useState<boolean>(isDefaultAddress);

  const editCheckBoxRef = useRef<HTMLInputElement>(null!);

  const checkBoxOnClick = () => {
    if (!isChecked) {
      setIsDefaultAddress(!isDefaultAddress);
      editCheckBoxRef.current.checked = !isDefaultAddress;
    }
  };
  useEffect(() => {
    editCheckBoxRef.current.checked = isDefaultAddress;
  }, [isDefaultAddress]);
  return (
    <DefaultCheckBoxContainer>
      <CheckBox
        ref={editCheckBoxRef}
        type="radio"
        id="edit-default-check-box"
        defaultChecked={isDefaultAddress}
        onClick={checkBoxOnClick}
      />
      <span>현재 배송지를 기본 배송지로 설정</span>
    </DefaultCheckBoxContainer>
  );
};

const DefaultCheckBoxContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  font: ${({ theme }) => theme.fontSizes.Body2};
`;

const CheckBox = styled.input`
  margin: 0 5px 0 0;
  accent-color: #ff5f00;

  width: 20px;
  height: 20px;
  vertical-align: sub;
`;

export default DefaultCheckBox;
