import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useRecoilValue } from 'recoil';
import { getCategoryByProductList } from '../../../services/category/getCategoryProductList';
import ProductInfiniteScroll from '../../../hook/ProductInfiniteScroll';
import { productListByCategoriesAtom } from '../../../states/categoryAtom';

const CategoryProducts: React.FC = () => {
  const list = useRecoilValue(productListByCategoriesAtom);
  return (
    <>
      <CategoryProductsContainer>
        {Array.isArray(list) &&
          list.map((v, i) => <ProductItem key={i} data={v} uniqueKey={i} />)}
      </CategoryProductsContainer>
      <ProductInfiniteScroll
        getCategoryByProductList={getCategoryByProductList}
      />
    </>
  );
};

const CategoryProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  padding: 30px 20px;
`;

export default CategoryProducts;
