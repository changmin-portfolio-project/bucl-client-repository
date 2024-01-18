import React from 'react';
import Body from '../../conponents/rewardWithdrawal/Body';
import TabBar from '../../conponents/TabBar';
import HeaderLayout from '../../conponents/layout/HeaderLayout';

const RewardWithdrawalsPage: React.FC = () => {
  return (
    <div>
      <HeaderLayout text="인출하기" />
      <Body />
      <TabBar />
    </div>
  );
};

export default RewardWithdrawalsPage;
