import React, { useEffect } from 'react';
import Body from '../../conponents/reward/Body';
import TabBar from '../../conponents/TabBar';
import Header from '../../conponents/reward/Header';

const RewardsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <Header />
      <Body />
      <TabBar />
    </div>
  );
};

export default RewardsPage;
