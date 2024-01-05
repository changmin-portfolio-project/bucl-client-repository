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
    if (param.order_code)
      postOrderCancel(param.order_code.replace(/imp_/g, ''));
  };
  return (
    <WithdrawOrderContainer>
      <OrderCancelBtn onClick={OrderCancelBtnOnClick}>
        주문 취소하기
      </OrderCancelBtn>
      {withdrawOrderPopup && (
        <WithdrawOrderPopup withdrawOrderBtnOnClick={withdrawOrderBtnOnClick} />
      )}
    </WithdrawOrderContainer>
  );
};

const WithdrawOrderContainer = styled.div`
  padding: 10px 7%;
`;

const OrderCancelBtn = styled.button`
  padding: 5px 0;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
`;

export default WithdrawOrder;
