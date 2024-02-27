import React from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const OrderProduct: React.FC = () => {
  const [cookies] = useCookies([
    'proctImg',
    'proctNom',
    'proctOptNom',
    'proctBrn',
    'proctOptAmt',
    'proctOptQty',
  ]);

  return (
    <StyledOrderProductContainer>
      <OrderProductInfoTitle>주문 상품</OrderProductInfoTitle>
      <OrderProductInputContainer>
        <OrderProductImg src={cookies.proctImg} />
        <OrderProductItem>
          <BrandName>{cookies.proctBrn}</BrandName>
          <ProductName>{cookies.proctNom}</ProductName>
          <ProductOption>
            {cookies.proctOptNom} / 수량: {cookies.proctOptQty}
          </ProductOption>
          <ProductOptionAmt>
            {cookies.proctOptAmt?.toLocaleString()}원
          </ProductOptionAmt>
        </OrderProductItem>
      </OrderProductInputContainer>
    </StyledOrderProductContainer>
  );
};
const OrderProductInfoTitle = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body3};
  padding: 8.5px 20px 8.5px 20px;
  border-top: 1px solid #eaecef;
  border-bottom: 1px solid #eaecef;
`;

const OrderProductImg = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;

  border-radius: 4px;
`;

const StyledOrderProductContainer = styled.div`
  border-bottom: 1px solid #eaecef;
`;

const OrderProductInputContainer = styled.div`
  display: flex;
  justify-content: left;
  padding: 20px 20px 20px 20px;
`;

const OrderProductItem = styled.div`
  margin-left: 20px;
`;

const ProductName = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  padding: 1px 0 6px 0;
`;

const BrandName = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 700;
`;

const ProductOption = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey5};
  border-radius: 4px;
  padding: 1px 0 6px 0;
`;

const ProductOptionAmt = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey5};
  border-radius: 4px;
  padding: 1px 0 6px 0;
`;

export default OrderProduct;
