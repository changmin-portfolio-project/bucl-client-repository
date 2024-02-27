import React from 'react';
import AddressInfo from './body/addressinfo/AddressInfo';
import OrderPoint from './body/orderpoint/OrderPoint';
import OrderPayment from './body/OrderPayment/OrderPayment';
import OrderProduct from './body/OrderProduct/OrderProduct';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <AddressInfo />
      <OrderProduct />
      <OrderPoint />
      <OrderPayment />
    </BodyLayout>
  );
};

export default Body;
