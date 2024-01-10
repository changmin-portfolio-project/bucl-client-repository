import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { addrRegFormAtom } from '../../../states/addressAtom';
import { orderInfoAtom } from '../../../states/orderDetailAtom';

const ChangeAddressBtn: React.FC = () => {
  const param = useParams();
  const setAddrRegForm = useSetRecoilState(addrRegFormAtom);
  const orderInfo = useRecoilValue(orderInfoAtom);
  const changeAddressBtnOnClick = () => {
    setAddrRegForm((prev) => ({
      ...prev,
      recipientName: orderInfo.recipientName,
      address: orderInfo.address,
      detailAddress: orderInfo.addressDetail,
      zipCode: orderInfo.zipCode,
      firstPhoneNum: orderInfo.contactNumber.split('-')[0],
      middlePhoneNum: orderInfo.contactNumber.split('-')[1],
      lastPhoneNum: orderInfo.contactNumber.split('-')[2],
    }));
  };
  return (
    <ChangeAddressButton onClick={changeAddressBtnOnClick}>
      <Link to="/my/addresses" state={{ order_code: param.order_code }}>
        배송지 변경
      </Link>
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
`;

export default ChangeAddressBtn;
