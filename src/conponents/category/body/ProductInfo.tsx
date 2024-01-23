import React from 'react';
import styled from 'styled-components';
import { Product } from '../../../services/category/getCategoryProductList';

interface ProductInfoProps {
  data: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  return (
    <ProductInfoContainer>
      <BrandName>{data.brandName}</BrandName>
      <ProductName>{data.name}</ProductName>
      <PriceBox>
        <DiscountRate>{data.discountRate * 100}%</DiscountRate>
        <DiscountPrice>{data.salePrice?.toLocaleString()}원</DiscountPrice>
        <OriginalPrice>{data.consumerPrice?.toLocaleString()}원</OriginalPrice>
      </PriceBox>
      <RatingReviewBox>
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.4766 0.270476C5.58847 -0.0901582 6.07559 -0.090159 6.18746 0.270475L7.1116 3.24948C7.16163 3.41076 7.30512 3.51995 7.46703 3.51995H10.4576C10.8196 3.51995 10.9702 4.00518 10.6773 4.22807L8.25785 6.06919C8.12686 6.16887 8.07205 6.34555 8.12208 6.50683L9.04622 9.48583C9.15809 9.84646 8.76401 10.1464 8.47112 9.92347L6.0517 8.08235C5.92072 7.98267 5.74335 7.98267 5.61236 8.08235L3.19295 9.92347C2.90005 10.1464 2.50597 9.84646 2.61785 9.48583L3.54198 6.50683C3.59201 6.34555 3.5372 6.16887 3.40622 6.06919L0.986802 4.22807C0.69391 4.00518 0.844436 3.51995 1.20647 3.51995H4.19703C4.35894 3.51995 4.50243 3.41076 4.55246 3.24948L5.4766 0.270476Z"
            fill="#FFD770"
          />
        </svg>
        <RatingText>{data.averageRating}</RatingText>
        <ReviewText>({data.totalReviewCount})</ReviewText>
      </RatingReviewBox>
    </ProductInfoContainer>
  );
};

const ProductInfoContainer = styled.div`
  width: 100%;
`;
const BrandName = styled.p`
  padding: 8px 0 0 0;
  font: ${({ theme }) => theme.fontSizes.Subhead1};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.grey.Grey5};
`;
const ProductName = styled.p`
  width: 75%;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceBox = styled.div``;
const DiscountRate = styled.span`
  padding-right: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  font-weight: 500;
  color: ${({ theme }) => theme.mainColor.Orange5};
`;
const DiscountPrice = styled(DiscountRate)`
  color: black;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  font-weight: 500;
`;
const OriginalPrice = styled(DiscountRate)`
  font: ${({ theme }) => theme.fontSizes.Body1};
  text-decoration: line-through;
  line-height: 18px;
  color: ${({ theme }) => theme.grey.Grey6};
`;

const RatingReviewBox = styled.div`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 700;
  color: ${({ theme }) => theme.grey.Grey6};
`;
const RatingText = styled.span`
  padding: 0 3px;
`;
const ReviewText = styled.span`
  font-weight: 500;
`;

export default ProductInfo;
