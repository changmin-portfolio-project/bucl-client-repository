import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../conponents/productDetail/Body';
import Footer from '../conponents/productDetail/Footer';
import HeaderLayout from '../conponents/layout/HeaderLayout';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <ProductsPageContainer>
      <HeaderLayout text="상품 정보" />
      <Body />
      <Footer />
    </ProductsPageContainer>
  );
};

const ProductsPageContainer = styled.div``;

export default ProductsPage;
