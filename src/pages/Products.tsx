import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../conponents/productDetail/Header';
import Body from '../conponents/productDetail/Body';
import Footer from '../conponents/productDetail/Footer';
// import OptionChoose from '../conponents/productDetail/footer/OptionChoose';

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
