import React from 'react';
import styled from 'styled-components';
import Withdraw from './body/Withdraw';
import AccountInquiry from './body/AccountInquiry';
import RegisterWithdrawalAccount from './body/RegisterWithdrawalAccount';
import WithdrawHistory from './body/WithdrawHistory';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <Withdraw />
      <AccountInquiry />
      <RegisterWithdrawalAccount />
      <WithdrawHistory />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 57px 0 72px 0;
`;

export default Body;
