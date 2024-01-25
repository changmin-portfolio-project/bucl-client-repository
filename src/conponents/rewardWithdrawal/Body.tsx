import React from 'react';
import Withdraw from './body/Withdraw';
import AccountInquiry from './body/AccountInquiry';
import RegisterWithdrawalAccount from './body/RegisterWithdrawalAccount';
import WithdrawHistory from './body/WithdrawHistory';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <div>
        <Withdraw />
        <AccountInquiry />
        <RegisterWithdrawalAccount />
      </div>
      <WithdrawHistory />
    </BodyLayout>
  );
};

export default Body;
