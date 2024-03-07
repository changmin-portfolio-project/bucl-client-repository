import React from 'react';
import styled from 'styled-components';

const ExchangeReturnBtn: React.FC = () => {
  const handleExchangeReturn = () => {
    if (confirm('정말 교환 반품 하시겠습니까?')) {
      console.log('반품 완료');
    }
  };
  return (
    <ExchangeReturnContainer>
      <ExchangeReturnButton onClick={handleExchangeReturn}>
        교환/반품 신청
      </ExchangeReturnButton>
    </ExchangeReturnContainer>
  );
};

const ExchangeReturnContainer = styled.div`
  padding: 10px 7% 30px 7%;
`;

const ExchangeReturnButton = styled.button`
  padding: 5px 0;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
`;

export default ExchangeReturnBtn;
