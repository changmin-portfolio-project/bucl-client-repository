import React from 'react';
import styled from 'styled-components';
import Reward from './Reward';
import ProductSubInfo from './ProductSubInfo';
import { Product } from '../../../services/category/getCategoryProductList';
import { Link } from 'react-router-dom';

interface ProductImgProps {
  data: Product;
  wishId: number;
}

const ProductImg: React.FC<ProductImgProps> = ({ data, wishId }) => {
  return (
    <ProductImgBox>
      <Link to={`/products/${data.productCode}`}>
        <Img src={data.imagePath} />
      </Link>
      <ProductSubInfo
        productCode={data.productCode}
        wished={data.wished}
        ordNum={data.ordNum}
        wishId={wishId}
      />
      <Reward reward={data.reward} />
    </ProductImgBox>
  );
};

const ProductImgBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  color: white;
  a {
    position: relative;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export default ProductImg;
