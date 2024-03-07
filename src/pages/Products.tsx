import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../conponents/productDetail/Body';
import Footer from '../conponents/productDetail/Footer';
import Header from '../conponents/productDetail/Header';
import { FALSE_STRING, ORD_PAY_DATA } from '../const/SessionStorageVars';
import { OrderPaymentType } from '../global/interface/OrderInterface';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });

    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.rwdUseAmt = 0;
    orderPaymentData.pgCode = '';
    orderPaymentData.memoCnt = '';
    orderPaymentData.addrDetail = '';

    orderPaymentData.isNewAddr = FALSE_STRING;

    orderPaymentData.proctCode = 0;
    orderPaymentData.proctNom = '';
    orderPaymentData.proctBrn = '';
    orderPaymentData.skuCode = 0;
    orderPaymentData.proctOptAmt = 0;
    orderPaymentData.proctOptQty = 0;
    orderPaymentData.proctOptNom = '';
    orderPaymentData.rcpntNom = '';
    orderPaymentData.cntctNum = '';
    orderPaymentData.addr = '';
    orderPaymentData.zipCode = '';
    orderPaymentData.shippingAddressName = '';
    orderPaymentData.shpFee = 0;

    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  }, []);
  return (
    <ProductsPageContainer>
      <Header />
      <Body />
      <Footer />
    </ProductsPageContainer>
  );
};

const ProductsPageContainer = styled.div``;

export default ProductsPage;
