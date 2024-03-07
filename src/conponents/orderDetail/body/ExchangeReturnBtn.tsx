import React, { useState } from 'react';
import styled from 'styled-components';
import WithdrawOrderPopup from './WithdrawOrderPopup';

const ExchangeReturnBtn: React.FC = () => {
  const [withdrawOrderPopup, setWithdrawOrderPopup] = useState<boolean>(false);
  const handleExchangeReturn = () => {
    setWithdrawOrderPopup(true);
  };

  const withdrawOrderBtnOnClick = () => {
    setWithdrawOrderPopup(false);
  };

  return (
    <>
      <ExchangeReturnContainer>
        <ExchangeReturnButton onClick={handleExchangeReturn}>
          교환/반품 신청
        </ExchangeReturnButton>
      </ExchangeReturnContainer>
      {withdrawOrderPopup && (
        <WithdrawOrderPopup withdrawOrderBtnOnClick={withdrawOrderBtnOnClick} />
      )}
    </>
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
