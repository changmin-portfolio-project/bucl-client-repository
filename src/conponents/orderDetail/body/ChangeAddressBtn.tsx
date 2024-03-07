import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { addrRegFormAtom } from '../../../states/addressAtom';
import {
  ordShpChangeModeAtom,
  orderInfoAtom,
} from '../../../states/orderDetailAtom';

const ChangeAddressBtn: React.FC = () => {
  const setAddrRegForm = useSetRecoilState(addrRegFormAtom);
  const setOrdShpChangeMode = useSetRecoilState(ordShpChangeModeAtom);
  const orderInfo = useRecoilValue(orderInfoAtom);
  const changeAddressBtnOnClick = () => {
    setAddrRegForm((prev) => ({
      ...prev,
      recipientName: orderInfo.shpAddrDto.recipientName,
      address: orderInfo.shpAddrDto.address,
      detailAddress: orderInfo.shpAddrDto.addressDetail,
      zipCode: orderInfo.shpAddrDto.zipCode,
      firstPhoneNum: orderInfo.shpAddrDto.contactNumber.split('-')[0],
      middlePhoneNum: orderInfo.shpAddrDto.contactNumber.split('-')[1],
      lastPhoneNum: orderInfo.shpAddrDto.contactNumber.split('-')[2],
    }));
    setOrdShpChangeMode((ordShpChangeMode) => !ordShpChangeMode);
  };
  return (
    <ChangeAddressButton onClick={changeAddressBtnOnClick}>
      배송지 변경
    </ChangeAddressButton>
  );
};

const ChangeAddressButton = styled.button`
  flex: 1;
  padding: 5px 0;
  background-color: white;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
  margin: 0 5px;
`;

export default ChangeAddressBtn;
