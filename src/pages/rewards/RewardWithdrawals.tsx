import React, { useEffect } from 'react';
import Body from '../../conponents/rewardWithdrawal/Body';
import HeaderLayout from '../../conponents/layout/HeaderLayout';
import { NAVIGATION_TO } from '../../const/AppVars';
import { REWARD_PATH } from '../../const/PathVar';

const RewardWithdrawalsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <HeaderLayout text="인출하기" to={REWARD_PATH} type={NAVIGATION_TO} />
      <Body />
    </div>
  );
};

export default RewardWithdrawalsPage;
