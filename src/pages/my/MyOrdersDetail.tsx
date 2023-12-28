import React from 'react';
import Header from '../../conponents/orderDetail/Header';
import Body from '../../conponents/orderDetail/Body';
import TabBar from '../../conponents/TabBar';

const MyOrdersDetailPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Body />
      <TabBar />
    </div>
  );
};

export default MyOrdersDetailPage;
