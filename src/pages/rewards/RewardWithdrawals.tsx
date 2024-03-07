import React, { useEffect } from 'react';
import Body from '../../conponents/rewardWithdrawal/Body';
import TabBar from '../../conponents/TabBar';
import HeaderLayout from '../../conponents/layout/HeaderLayout';
import { NAVIGATION_TO } from '../../const/AppVars';

const RewardWithdrawalsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <HeaderLayout text="인출하기" to="/rewards" type={NAVIGATION_TO} />
      <Body />
      <TabBar />
    </div>
  );
};

export default RewardWithdrawalsPage;
