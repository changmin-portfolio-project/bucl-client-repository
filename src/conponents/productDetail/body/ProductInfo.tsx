import React from 'react';
import styled from 'styled-components';
import Attend from '../../Attend';

interface ProductInfoProps {
  name?: string;
  brandName?: string;
  salePrice?: number;
  consumerPrice?: number;
  discountRate?: number;
  ordNum?: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  brandName,
  salePrice,
  consumerPrice,
  discountRate,
  ordNum,
}) => {
  return (
    <ProductInfoContainer>
      <BrandNameAttendBox>
        <BrandName>{brandName}</BrandName>
        <Attend ordNum={ordNum} />
      </BrandNameAttendBox>
      <ProductName>{name}</ProductName>
      <ProductPriceBox>
        <DiscountRate>{discountRate && discountRate * 100}%</DiscountRate>
        <DiscountPrice>{salePrice?.toLocaleString()}원</DiscountPrice>
        <OriginalPrice>{consumerPrice?.toLocaleString()}원</OriginalPrice>
      </ProductPriceBox>
      <RewardInformationBtn>
        공동구매 리워드 관련 안내 (혜택 정책)
      </RewardInformationBtn>
    </ProductInfoContainer>
  );
};

const ProductInfoContainer = styled.div`
  padding: 10px 7%;
`;

const BrandNameAttendBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BrandName = styled.span`
  display: flex;
  align-items: flex-end;
  font: ${({ theme }) => theme.fontSizes.Subhead1};
  color: ${({ theme }) => theme.grey.Grey5};
`;
const ProductName = styled.p`
  margin: 5px 0 15px 0;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPriceBox = styled.div`
  margin-bottom: 15px;
`;
const DiscountRate = styled.span`
  padding-right: 5px;
  font: ${({ theme }) => theme.fontSizes.Subhead4};
  font-weight: 700;
  color: ${({ theme }) => theme.mainColor.Orange5};
  line-height: 25.2px;
`;
const DiscountPrice = styled(DiscountRate)`
  color: black;
`;
const OriginalPrice = styled(DiscountRate)`
  font: ${({ theme }) => theme.fontSizes.Body2};
  text-decoration: line-through;
  line-height: 18px;
  color: ${({ theme }) => theme.grey.Grey6};
`;

const RewardInformationBtn = styled.button`
  padding: 10px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.subColor.Yellow0};
  border: 1px solid ${({ theme }) => theme.mainColor.Orange3};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.mainColor.Orange5};
  cursor: pointer;
`;

export default ProductInfo;
