import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useRecoilValue } from 'recoil';
import { productListByCategoriesAtom } from '../../../states/categoryAtom';
import CategoryInfiniteScroll from '../../../hook/CategoryInfiniteScroll';

const CategoryProducts: React.FC = () => {
  const list = useRecoilValue(productListByCategoriesAtom);
  return (
    <CategoryProductsContainer>
      {Array.isArray(list) &&
        list.map((v, i) => <ProductItem key={i} data={v} />)}
      <CategoryInfiniteScroll />
    </CategoryProductsContainer>
  );
};

const CategoryProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 20px;
`;

export default CategoryProducts;
