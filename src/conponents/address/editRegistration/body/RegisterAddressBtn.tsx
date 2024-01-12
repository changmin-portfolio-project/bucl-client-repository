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
import { useLocation } from 'react-router-dom';
import { putAddress } from '../../../../services/orderDetail/putAddress';

const RegisterAddressBtn: React.FC = () => {
  const location = useLocation();

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
        location.state.order_code
          ? putAddress(location.state.order_code, data)
          : postAddressItem({ data }).then(() => {
              setEditRegistrationMode(false);
            });
      } else {
        location.state.order_code
          ? putAddress(location.state.order_code, data)
          : putAddressUpdate(data, currentAddressNum).then(() => {
              setEditRegistrationMode(false);
            });
      }
    } else {
      alert('모든 값을 입력해주세요.');
    }
  };
  return (
    <RegisterAddressBtnContainer>
      <RegisterBtn onClick={registerBtnOnClick}>
        <img src="/assets/PlusIcon.svg" />
        {location.state.order_code ? '배송지 수정하기' : '배송지 등록하기'}
      </RegisterBtn>
    </RegisterAddressBtnContainer>
  );
};

const RegisterAddressBtnContainer = styled.div`
  padding-bottom: 10px;
`;
const RegisterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
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

export default RegisterAddressBtn;
