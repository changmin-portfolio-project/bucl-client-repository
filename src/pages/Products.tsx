import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../conponents/productDetail/Body';
import Footer from '../conponents/productDetail/Footer';
import Header from '../conponents/productDetail/Header';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
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
