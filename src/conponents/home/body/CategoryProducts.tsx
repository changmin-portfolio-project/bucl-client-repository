import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useRecoilValue } from 'recoil';
import { productListAtom } from '../../../states/productAtom';
import HomeInfiniteScroll from '../../../hook/HomeInfiniteScroll';

const CategoryProducts: React.FC = () => {
  const list = useRecoilValue(productListAtom);

  return (
    <CategoryProductsContainer>
      {Array.isArray(list) &&
        list.map((v, i) => <ProductItem key={i} data={v} uniqueKey={i} />)}
      <HomeInfiniteScroll />
    </CategoryProductsContainer>
  );
};

const CategoryProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CategoryProducts;
