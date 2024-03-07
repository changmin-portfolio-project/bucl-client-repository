import React from 'react';
import styled from 'styled-components';
import { orderInfoAtom } from '../../../states/orderDetailAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ORDERED } from '../../../const/OrderVars';
import { confirmPopupAtom } from '../../../states/functionAtom';

const WithdrawOrder: React.FC = () => {
  const setConfirmPopup = useSetRecoilState(confirmPopupAtom);
  const orderInfo = useRecoilValue(orderInfoAtom);

  const OrderCancelBtnOnClick = () => {
    setConfirmPopup((prev) => !prev);
  };
  return (
    <>
      {!orderInfo.orderDto.confirmed && (
        <>
          {orderInfo.orderDto.orderStatus === ORDERED &&
          orderInfo.trackingNum === null ? (
            <OrderCancelBtn onClick={OrderCancelBtnOnClick}>
              주문 취소하기
            </OrderCancelBtn>
          ) : null}
        </>
      )}
    </>
  );
};

const OrderCancelBtn = styled.button`
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

export default WithdrawOrder;
