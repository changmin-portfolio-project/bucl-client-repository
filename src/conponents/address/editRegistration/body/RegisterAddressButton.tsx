import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  addrRegFormAtom,
  currentAddressNumAtom,
  editRegistrationModeAtom,
  isDefaultAddressAtom,
} from '../../../../states/addressAtom';
import {
  AddressDataReq,
  postAddressItem,
} from '../../../../services/address/postAddressItem';
import { putAddressUpdate } from '../../../../services/address/putAddressUpdate';
import ColoredButton from '../../../ColoredButton';

const RegisterAddressButton: React.FC = () => {
  const addrRegForm = useRecoilValue(addrRegFormAtom);
  const isDefaultAddress = useRecoilValue(isDefaultAddressAtom);
  const setEditRegistrationMode = useSetRecoilState(editRegistrationModeAtom);
  const [currentAddressNum] = useRecoilState(currentAddressNumAtom);
  const registerBtnOnClick = () => {
    if (
      addrRegForm.locationName &&
      addrRegForm.recipientName &&
      addrRegForm.zipCode &&
      addrRegForm.address &&
      addrRegForm.detailAddress &&
      addrRegForm.middlePhoneNum &&
      addrRegForm.lastPhoneNum
    ) {
      const data: AddressDataReq = {
        shippingAddressName: addrRegForm.locationName,
        recipientName: addrRegForm.recipientName,
        zipCode: addrRegForm.zipCode,
        address: addrRegForm.address,
        addressDetail: addrRegForm.detailAddress,
        contactNumber:
          addrRegForm.firstPhoneNum +
          '-' +
          addrRegForm.middlePhoneNum +
          '-' +
          addrRegForm.lastPhoneNum,
        isDefaultAddress: isDefaultAddress,
      };
      if (currentAddressNum == 0) {
        postAddressItem({ data }).then(() => {
          setEditRegistrationMode(false);
        });
      } else {
        putAddressUpdate(data, currentAddressNum).then(() => {
          setEditRegistrationMode(false);
        });
      }
    } else {
      alert('모든 값을 입력해주세요.');
    }
  };

  const ColoredButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <RegisterAddressBtnContainer>
      <ColoredButton
        font="Subhead2"
        color="white"
        onClick={registerBtnOnClick}
        style={ColoredButtonStyle}
      >
        <img src="/assets/PlusIcon.svg" />
        배송지 등록하기
      </ColoredButton>
    </RegisterAddressBtnContainer>
  );
};

const RegisterAddressBtnContainer = styled.div`
  padding-bottom: 10px;
  img {
    margin-bottom: -2px;
  }
`;

export default RegisterAddressButton;
