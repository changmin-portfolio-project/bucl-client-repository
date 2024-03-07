import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ColoredButton from '../../ColoredButton';
import {
  isAdressSelectPageAtom,
  ordAddrAtom,
  ordPayDataAtom,
} from '../../../states/orderAtom';
import { OrderPaymentType } from '../../../global/interface/OrderInterface';
import { FALSE_STRING, ORD_PAY_DATA } from '../../../const/SessionStorageVars';

const OrdAddrSelectButton: React.FC = () => {
  /** 바꿈 */
  const setOrdPayDataState = useSetRecoilState(ordPayDataAtom);
  const ordAddr = useRecoilValue(ordAddrAtom);
  const setIsAddressSelectPage = useSetRecoilState(isAdressSelectPageAtom);

  const addressAddBtnOnClick = () => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );

    orderPaymentData.isNewAddr = FALSE_STRING;
    orderPaymentData.shippingAddressName = ordAddr.shippingAddressNam;
    orderPaymentData.rcpntNom = ordAddr.recipientName;
    orderPaymentData.shippingAddressName = ordAddr.shippingAddressNam;
    orderPaymentData.addr = ordAddr.address;
    orderPaymentData.addrDetail = ordAddr.detailAddress;
    orderPaymentData.zipCode = ordAddr.zipCode;
    orderPaymentData.cntctNum = ordAddr.contactNum;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));

    setIsAddressSelectPage(false);
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
        선택 완료
      </ColoredButton>
    </AddressEditBtnContainer>
  );
};

const AddressEditBtnContainer = styled.div`
  padding-bottom: 10px;
`;

export default OrdAddrSelectButton;
