import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useRecoilValue } from 'recoil';
import { productListAtom } from '../../../states/productAtom';
import ProductInfiniteScroll from '../../../hook/ProductInfiniteScroll';
import { getHomeCategoryByProductList } from '../../../services/home/getCategoryProductList';

const CategoryProducts: React.FC = () => {
  const list = useRecoilValue(productListAtom);

  return (
    <CategoryProductsContainer>
      {Array.isArray(list) &&
        list.map((v, i) => <ProductItem key={i} data={v} />)}
      <ProductInfiniteScroll
        getHomeCategoryByProductList={getHomeCategoryByProductList}
      />
    </CategoryProductsContainer>
  );
};

const CategoryProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export default CategoryProducts;
