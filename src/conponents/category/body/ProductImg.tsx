import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import Reward from './Reward';
import ProductSubInfo from './ProductSubInfo';
import { Product } from '../../../services/category/getCategoryProductList';
import AppLink from '../../AppLink';
import { PRODUCT_PATH } from '../../../const/PathVar';
import { useCountdownTimer } from '../../../utils/TimeUtil';
import { validValueNotBlank } from '../../../utils/ValidationUtil';

interface ProductImgProps {
  data: Product;
  wishId: number;
}

const ProductImgStyle: CSSProperties = {
  height: '115%',
};

const ProductImg: React.FC<ProductImgProps> = ({ data, wishId }) => {
  const { isFinished } = useCountdownTimer(data.deadline);
  return (
    <ProductImgBox>
      <AppLink
        to={`${PRODUCT_PATH}/${data.productCode}`}
        style={ProductImgStyle}
      >
        <ProductImgDiv
          $url={data.imagePath}
          $inFinished={isFinished}
          deadline={data.deadline}
        />
      </AppLink>
      <ProductSubInfo
        productCode={data.productCode}
        wished={data.wished}
        ordNum={data.totalConsumerOrder}
        wishId={wishId}
        deadline={data.deadline}
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

const ProductImgDiv = styled.div<{
  $url: string;
  $inFinished: boolean;
  deadline: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: url(${(props) => props.$url});
  background-size: cover;
  opacity: ${(props) =>
    validValueNotBlank(props.deadline) && props.$inFinished ? 0.5 : 1};

  background-position: center;
`;

export default ProductImg;
