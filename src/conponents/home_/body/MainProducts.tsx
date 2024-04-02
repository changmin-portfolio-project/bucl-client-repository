import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';

import ProductItem from '../../category/body/ProductItem';
import MainProductInfiniteScroll from '../../../hook/MainProductInfiniteScroll';
import { mainProductListByHomeAtom } from '../../../states/homeAtom';

const MainProducts: React.FC = () => {
  const MainProductlist = useRecoilValue(mainProductListByHomeAtom);

  return (
    <>
      <CategoryProductsContainer>
        {Array.isArray(MainProductlist) &&
          MainProductlist.map((v, i) => (
            <ProductItem key={i} data={v} uniqueKey={i} />
          ))}
      </CategoryProductsContainer>
      <div>
        <MainProductInfiniteScroll />
      </div>
    </>
  );
};

const CategoryProductsContainer = styled.div`
  padding: 10px 4px 0px 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default MainProducts;
