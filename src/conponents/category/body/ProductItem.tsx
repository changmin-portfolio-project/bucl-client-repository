import React from 'react';
import styled from 'styled-components';
import { Product } from '../../../services/category/getCategoryProductList';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';

interface ProductComponentProps {
  data: Product;
  uniqueKey: number;
}

const ProductItem: React.FC<ProductComponentProps> = ({ data, uniqueKey }) => {
  return (
    <ProductContainer>
      <ProductImg data={data} wishId={uniqueKey} />
      <ProductInfo data={data} />
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  padding: 10px 0 9px 0;
  margin: 0 auto;
  width: 90%;
  letter-spacing: -0.6px;
`;

export default ProductItem;
