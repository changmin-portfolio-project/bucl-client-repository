import React from 'react';
import styled from 'styled-components';
import ProductInfo from './body/ProductInfo';
import ExchangeReturnBtn from './body/ExchangeReturnBtn';
import ChangeAddressBtn from './body/ChangeAddressBtn';
import Recipient from './body/Recipient';
import PaymentInfo from './body/PaymentInfo';
import WithdrawOrder from './body/WithdrawOrder';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <ProductInfo />
      <BtnBox>
        <ExchangeReturnBtn />
        <ChangeAddressBtn />
      </BtnBox>
      <Recipient />
      <PaymentInfo />
      <WithdrawOrder />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 57px 0 67px 0;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 7% 10px 7%;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
  button {
    width: 48%;
  }
`;

export default Body;
