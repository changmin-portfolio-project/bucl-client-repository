import React from 'react';
import styled from 'styled-components';
import TimeIcon from '../../TimeIcon';
import Attend from '../../Attend';
import CategoryWishBtn from './CategoryWishBtn';

interface ProductSubInfoProps {
  productCode: number;
  wished: boolean;
  ordNum: number;
  wishId: number;
}

const ProductSubInfo: React.FC<ProductSubInfoProps> = ({
  productCode,
  wished,
  ordNum,
  wishId,
}) => {
  return (
    <ProductSubInfoContainer>
      <ProductSubInfoItem>
        <Attend ordNum={ordNum} />
        <TimeIcon />
      </ProductSubInfoItem>
      <ProductSubInfoItem>
        <CategoryWishBtn
          productCode={productCode}
          wished={wished}
          wishId={wishId}
        />
      </ProductSubInfoItem>
    </ProductSubInfoContainer>
  );
};

const ProductSubInfoContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
`;

const ProductSubInfoItem = styled.div`
  padding: 5px;
  display: flex;
  height: 20px;
`;

export default ProductSubInfo;
