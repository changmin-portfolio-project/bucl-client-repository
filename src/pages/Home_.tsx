import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useResetRecoilState } from 'recoil';
import { productListByCategoriesAtom } from '../states/categoryAtom';
import Body from '../conponents/home_/body';
import Header from '../conponents/home_/Header';
import TabBar from '../conponents/TabBar';

const HomePage: React.FC = () => {
  const resetProductListByBrand = useResetRecoilState(
    productListByCategoriesAtom,
  );
  useEffect(() => {
    resetProductListByBrand();
  }, []);
  return (
    <HomePageContainer>
      <Header />
      <Body />
      <TabBar />
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div``;

export default HomePage;
