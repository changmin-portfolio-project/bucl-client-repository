import React from 'react';
import Body from '../../conponents/reward/Body';
import TabBar from '../../conponents/TabBar';
import Header from '../../conponents/reward/Header';

const RewardsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Body />
      <TabBar />
    </div>
  );
};

export default RewardsPage;
