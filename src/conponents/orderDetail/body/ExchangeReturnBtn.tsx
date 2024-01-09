import React from 'react';
import styled from 'styled-components';
import { orderInfoAtom } from '../../../states/orderDetailAtom';
import { useRecoilValue } from 'recoil';

const ExchangeReturnBtn: React.FC = () => {
  const orderInfo = useRecoilValue(orderInfoAtom);
  return (
    <ExchangeReturnButton $active={orderInfo.confirmed}>
      교환/반품 신청
    </ExchangeReturnButton>
  );
};

const ExchangeReturnButton = styled.button<{ $active: boolean }>`
  flex: 1;
  margin-right: ${(props) => (props.$active ? '0px' : '10px')};
  padding: 5px 0;
  background-color: white;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

export default ExchangeReturnBtn;
