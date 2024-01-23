import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useRecoilValue } from 'recoil';
import { productListByCategoriesAtom } from '../../../states/categoryAtom';
import CategoryInfiniteScroll from '../../../hook/CategoryInfiniteScroll';

const CategoryProducts: React.FC = () => {
  const list = useRecoilValue(productListByCategoriesAtom);
  return (
    <>
      <CategoryProductsContainer>
        {Array.isArray(list) &&
          list.map((v, i) => <ProductItem key={i} data={v} uniqueKey={i} />)}
      </CategoryProductsContainer>
      <div>
        <CategoryInfiniteScroll />
      </div>
    </>
  );
};

const CategoryProductsContainer = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: left;
  // padding: 30px 20px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // grid-template-rows: 50px 50px 50px;
`;

export default CategoryProducts;
