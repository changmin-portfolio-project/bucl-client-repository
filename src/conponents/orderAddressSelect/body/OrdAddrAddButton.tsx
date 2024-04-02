import React from 'react';
import styled from 'styled-components';
import ColoredButton from '../../ColoredButton';
import { OrderPaymentType } from '../../../global/interface/OrderInterface';
import { ORD_PAY_DATA, TRUE_STRING } from '../../../const/SessionStorageVars';
import { useSetRecoilState } from 'recoil';
import { ordPayDataAtom } from '../../../states/orderAtom';
import { getOrderPaymentDataUtil } from '../../../utils/PaymentUtil';

const OrdAddrAddButton: React.FC = () => {
  /** 바꿈 */
  const setOrdPayDataState = useSetRecoilState(ordPayDataAtom);
  const ColoredButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 0',
  };

  const onClickNewAddr = () => {
    const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
    orderPaymentData.isNewAddr = TRUE_STRING;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };
  return (
    <OrdAddrAddButtonContainer>
      <ColoredButton
        font="Subhead1"
        color="Orange4"
        backgroundColor="white"
        onClick={onClickNewAddr}
        style={ColoredButtonStyle}
      >
        <img src="/assets/PlusIconOrange.svg" />새 배송지 추가하기
      </ColoredButton>
    </OrdAddrAddButtonContainer>
  );
};

const OrdAddrAddButtonContainer = styled.div`
  padding-bottom: 10px;
  img {
    margin-bottom: -2px;
  }
`;

export default OrdAddrAddButton;
