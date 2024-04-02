import React from 'react';
import styled from 'styled-components';
import Attend from '../../Attend';
import { useRecoilValue } from 'recoil';
import { productDetailAtom } from '../../../states/productDetailAtom';
import theme from '../../../style/theme';
import { Link } from 'react-router-dom';
import { MARKET_PATH } from '../../../const/PathVar';

const ProductInfo: React.FC = () => {
  const productDetail = useRecoilValue(productDetailAtom);
  return (
    <ProductInfoContainer>
      <BrandNameAttendBox>
        <Link to={`${MARKET_PATH}/${productDetail.brandId}`}>
          <BrandName>
            <BrandProfileImg src={productDetail.brandProfilePath} />
            <BrandNameSpan>{productDetail.brandName}</BrandNameSpan>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke={theme.grey.Grey5}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </BrandName>
        </Link>
        <Attend
          ordNum={productDetail.totalConsumerOrder}
          deadline={productDetail.deadline}
        />
      </BrandNameAttendBox>
      <ProductName>{productDetail.name}</ProductName>
      <ProductPriceBox>
        <DiscountRate>
          {productDetail.discountRate && productDetail.discountRate * 100}%
        </DiscountRate>
        <DiscountPrice>
          {productDetail.salePrice?.toLocaleString()}원
        </DiscountPrice>
        <OriginalPrice>
          {productDetail.consumerPrice?.toLocaleString()}원
        </OriginalPrice>
      </ProductPriceBox>
      {/* <RewardInformationBtn>
        공동구매 리워드 관련 안내 (혜택 정책)
      </RewardInformationBtn> */}
    </ProductInfoContainer>
  );
};

const ProductInfoContainer = styled.div`
  padding: 15px ${({ theme }) => theme.paddings.base} 10px
    ${({ theme }) => theme.paddings.base};
`;

const BrandNameAttendBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BrandName = styled.span`
  display: flex;
  align-items: flex-end;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;

const BrandProfileImg = styled.img`
  width: 23px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
`;
const BrandNameSpan = styled.span`
  font-size: 17px;
  padding-left: 8px;
`;
const ProductName = styled.p`
  margin: 7px 0 8px 0;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

const ProductPriceBox = styled.div`
  margin-bottom: 15px;
  padding-right: 3px;
`;
const DiscountRate = styled.span`
  padding-right: 5px;
  font: ${({ theme }) => theme.fontSizes.Subhead4};
  font-weight: 500;
  color: ${({ theme }) => theme.mainColor.Orange5};
  line-height: 25.2px;
`;
const DiscountPrice = styled(DiscountRate)`
  font: ${({ theme }) => theme.fontSizes.Subhead4};
  font-weight: 500;
  color: black;
`;
const OriginalPrice = styled(DiscountRate)`
  font: ${({ theme }) => theme.fontSizes.Body2};
  text-decoration: line-through;
  line-height: 18px;
  color: ${({ theme }) => theme.grey.Grey6};
`;

// const RewardInformationBtn = styled.button`
//   padding: 10px 0;
//   width: 100%;
//   background-color: ${({ theme }) => theme.subColor.Yellow0};
//   border: 1px solid ${({ theme }) => theme.mainColor.Orange3};
//   border-radius: 4px;
//   font: ${({ theme }) => theme.fontSizes.Body2};
//   color: ${({ theme }) => theme.mainColor.Orange5};
//   cursor: pointer;
// `;

export default ProductInfo;
