import React, { useState } from 'react';
import styled from 'styled-components';
import WithdrawOrderPopup from './WithdrawOrderPopup';
import { postOrderCancel } from '../../../services/orderDetail/postOrderCancel';
import { useParams } from 'react-router';

const WithdrawOrder: React.FC = () => {
  const param = useParams();
  const [withdrawOrderPopup, setWithdrawOrderPopup] = useState<boolean>(false);
  const withdrawOrderBtnOnClick = () => {
    setWithdrawOrderPopup(!withdrawOrderPopup);
  };
  const OrderCancelBtnOnClick = () => {
    //아직 미완 NO_PROCESSING 및 주문 확정이 아닐 때만
    console.log(param.order_code);
    if (param.order_code)
      postOrderCancel(param.order_code).then(() => {
        alert('주문 취소 됐습니다.');
        window.location.href = '/my/orders';
      });
  };
  return (
    <>
      <OrderCancelBtn onClick={OrderCancelBtnOnClick}>
        주문 취소하기
      </OrderCancelBtn>
      {withdrawOrderPopup && (
        <WithdrawOrderPopup withdrawOrderBtnOnClick={withdrawOrderBtnOnClick} />
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
`;

export default WithdrawOrder;
