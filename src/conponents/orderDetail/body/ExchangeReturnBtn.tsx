import React from 'react';
import styled from 'styled-components';

const ExchangeReturnBtn: React.FC = () => {
  return <ExchangeReturnButton>교환/반품 신청</ExchangeReturnButton>;
};

const ExchangeReturnButton = styled.button`
  padding: 5px 0;
  background-color: white;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

export default ExchangeReturnBtn;
