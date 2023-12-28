import React from 'react';
import styled from 'styled-components';

const WithdrawOrder: React.FC = () => {
  return (
    <WithdrawOrderContainer>
      <WithdrawOrderBtn>주문 취소하기</WithdrawOrderBtn>
    </WithdrawOrderContainer>
  );
};

const WithdrawOrderContainer = styled.div`
  padding: 10px 7%;
`;

const WithdrawOrderBtn = styled.button`
  padding: 5px 0;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
`;

export default WithdrawOrder;
