import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { categoryProductListAtom } from '../../../states/productAtom';
import { useRecoilValue } from 'recoil';
import { getCategoryByProductList } from '../../../services/category/getCategoryProductList';
import ProductInfiniteScroll from '../../../hook/ProductInfiniteScroll';

const CategoryProducts: React.FC = () => {
  const list = useRecoilValue(categoryProductListAtom);
  return (
    <CategoryProductsContainer>
      {Array.isArray(list) &&
        list.map((v, i) => <ProductItem key={i} data={v} />)}
      <ProductInfiniteScroll
        getCategoryByProductList={getCategoryByProductList}
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
