import React from 'react';
import styled from 'styled-components';
import Deadline from './Deadline';
import Reward from './Reward';
import { Link } from 'react-router-dom';
import WishBtn from './WishBtn';
import DiscountRateCalculation from '../../../hook/DiscountRateCalculation';
import { HomeProduct } from '../../../services/home/getCategoryProductList';

interface ProductComponentProps {
  data: HomeProduct;
}

const ProductItem: React.FC<ProductComponentProps> = ({ data }) => {
  const discountPercentage: number = DiscountRateCalculation({
    consumerPrice: data.consumerPrice,
    salePrice: data.salePrice,
  });

  return (
    <ProductContainer>
      <Deadline />
      <Reward reward={data.reward} />
      <ProductImgBox>
        <Link to="/">
          <ProductImg src={data.imagePath} />
        </Link>
        <AttendBox>
          <span>50명 참여중</span>
        </AttendBox>
        <ProductInfoBox>
          <BrandName>{data.brandName}</BrandName>
          <ProductName>{data.name}</ProductName>
          <PriceBox>
            <DiscountRate>{discountPercentage.toFixed(0)}%</DiscountRate>
            <DiscountPrice>{data.salePrice.toLocaleString()}원</DiscountPrice>
            <OriginalPrice>
              {data.consumerPrice.toLocaleString()}원
            </OriginalPrice>
          </PriceBox>
        </ProductInfoBox>
        <WishBtn productCode={data.productCode} />
      </ProductImgBox>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  padding: 15px 0;
  width: 70%;
`;

const ProductImgBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.675/0.9;
  color: white;
  a {
    position: relative;
  }
`;
const AttendBox = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 500;
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 0 12px 12px;
`;

const ProductInfoBox = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 100%;
`;
const BrandName = styled.p`
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.Body2};
  font-weight: 700;
`;
const ProductName = styled.p`
  margin-bottom: 15px;
  width: 75%;
  font-size: ${({ theme }) => theme.fontSizes.Body3};
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: -0.6px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceBox = styled.div``;
const DiscountRate = styled.span`
  padding-right: 8px;
  font-size: ${({ theme }) => theme.fontSizes.Subhead4};
  font-weight: 700;
  color: ${({ theme }) => theme.mainColor.Orange5};
  line-height: 25.2px;
  letter-spacing: -0.6px;
`;
const DiscountPrice = styled(DiscountRate)`
  color: white;
`;
const OriginalPrice = styled(DiscountRate)`
  font-size: ${({ theme }) => theme.fontSizes.Body2};
  text-decoration: line-through;
  line-height: 18px;
  color: ${({ theme }) => theme.grey.Grey6};
`;

export default ProductItem;
