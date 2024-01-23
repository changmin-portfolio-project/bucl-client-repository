import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  addressListAtom,
  currentAddressNumAtom,
  isDefaultAddressAtom,
} from '../../../../states/addressAtom';
import { putDefaultAddress } from '../../../../services/address/putDefaultAddress';

const DefaultCheckBox: React.FC = () => {
  const [isChecked, setIsChecked] = useRecoilState(isDefaultAddressAtom);
  const currentAddressNum = useRecoilValue(currentAddressNumAtom);
  const [addressList, setAddressList] = useRecoilState(addressListAtom);

  const checkBoxOnClick = () => {
    if (!isChecked) {
      putDefaultAddress(currentAddressNum).then((res) => {
        setAddressList([
          ...addressList.map((v) => {
            const vt = { ...v };
            if (v.id === res.id) {
              vt.isDefaultAddress = true;
              return vt;
            } else {
              vt.isDefaultAddress = false;

              return vt;
            }
          }),
        ]);

        setIsChecked(!isChecked);
      });
    }
  };

  return (
    <DefaultCheckBoxContainer>
      <CheckBox type="radio" checked={isChecked} onChange={checkBoxOnClick} />
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
