import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeaderLayout from '../conponents/layout/HeaderLayout';
import { NAVIGATION_BACK } from '../const/AppVars';

import Body from '../conponents/market/body';
import { useResetRecoilState } from 'recoil';
import { productListByCategoriesAtom } from '../states/categoryAtom';

const MerketsPage: React.FC = () => {
  const resetProductListByBrand = useResetRecoilState(
    productListByCategoriesAtom,
  );
  useEffect(() => {
    resetProductListByBrand();
  }, []);
  return (
    <MarketPageContainer>
      <HeaderLayout text="" isApp={false} to="" type={NAVIGATION_BACK} />
      <Body />
    </MarketPageContainer>
  );
};

const MarketPageContainer = styled.div``;

export default MerketsPage;
