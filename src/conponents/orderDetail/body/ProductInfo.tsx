import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { orderInfoAtom } from '../../../states/orderDetailAtom';
import { convertDtStrToDStr } from '../../../utils/DateTimeUtil';
import { NOT_DATE_TIME } from '../../../const/Phrase';

const ProductInfo: React.FC = () => {
  const orderInfo = useRecoilValue(orderInfoAtom);

  return (
    <ProductInfoContainer>
      <DateBox>
        {convertDtStrToDStr(orderInfo.orderDto.orderDate ?? NOT_DATE_TIME)}
      </DateBox>
      <ProductInfoBox>
        <ImgBox>
          <img src={orderInfo.orderDto.productDto.imagePath} />
        </ImgBox>
        <ProductBox>
          <BrandNameAndNameBox>
            <BrandName>
              {orderInfo.orderDto.productDto.productBrandName}
            </BrandName>
            <Name>{orderInfo.orderDto.productDto.productName}</Name>
          </BrandNameAndNameBox>
          <PriceAndCountBox>
            <Price>
              {orderInfo.orderDto.purchaseOrderDtos[0]?.productOrderAmount.toLocaleString()}
              원
            </Price>
            <Count>
              {orderInfo.orderDto.purchaseOrderDtos[0]?.productOrderQty}개
            </Count>
          </PriceAndCountBox>
        </ProductBox>
      </ProductInfoBox>
    </ProductInfoContainer>
  );
};

const ProductInfoContainer = styled.section``;

const DateBox = styled.div`
  padding: 10px 7%;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;

const ProductInfoBox = styled.div`
  display: flex;
  padding: 15px 7% 10px 7%;
`;
const ImgBox = styled.div`
  margin-right: 10px;
  width: 25%;
  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 4px;
  }
`;

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
  width: 75%;
`;

const BrandNameAndNameBox = styled.div``;
const BrandName = styled.p`
  padding-bottom: 3px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey5};
`;
const Name = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceAndCountBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
`;
const Count = styled(Price)``;

export default ProductInfo;
