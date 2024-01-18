import React from 'react';
import Body from '../../conponents/reward/Body';
import TabBar from '../../conponents/TabBar';
import HeaderLayout from '../../conponents/layout/HeaderLayout';

const RewardsPage: React.FC = () => {
  return (
    <div>
      <HeaderLayout text="포인트" />
      <Body />
      <TabBar />
    </div>
  );
};

export default RewardsPage;
