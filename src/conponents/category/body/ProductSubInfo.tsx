import React from 'react';
import styled from 'styled-components';
import WishBtn from './WishBtn';
import TimeIcon from '../../TimeIcon';
import AttendCount from './AttendCount';

interface ProductSubInfoProps {
  productCode: number;
  wished: boolean;
}

const ProductSubInfo: React.FC<ProductSubInfoProps> = ({
  productCode,
  wished,
}) => {
  return (
    <ProductSubInfoContainer>
      <ProductSubInfoItem>
        <AttendCount />
        <TimeIcon />
      </ProductSubInfoItem>
      <WishBtn productCode={productCode} wished={wished} />
    </ProductSubInfoContainer>
  );
};

const ProductSubInfoContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: calc(100% - 10px);
`;

const ProductSubInfoItem = styled.div`
  display: flex;
`;

export default ProductSubInfo;
