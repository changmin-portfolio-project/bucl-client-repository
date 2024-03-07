import React from 'react';
import styled from 'styled-components';
import { OrderPaymentType } from '../../../../global/interface/OrderInterface';
import { ORD_PAY_DATA } from '../../../../const/SessionStorageVars';

const OrderProduct: React.FC = () => {
  /** 바꿈 */
  const orderPaymentData: OrderPaymentType = JSON.parse(
    sessionStorage.getItem(ORD_PAY_DATA) || '{}',
  );
  const proctImg: string = orderPaymentData.proctImg;
  const proctBrn: string = orderPaymentData.proctBrn;
  const proctNom: string = orderPaymentData.proctNom;
  const proctOptNom: string = orderPaymentData.proctOptNom;
  const proctOptQty = orderPaymentData.proctOptQty;
  const ordTotAmt = orderPaymentData.ordTotAmt;

  return (
    <StyledOrderProductContainer>
      <OrderProductInfoTitle>주문 상품</OrderProductInfoTitle>
      <OrderProductInputContainer>
        <OrderProductImg src={proctImg} />
        <OrderProductItem>
          <BrandName>{proctBrn}</BrandName>
          <ProductName>{proctNom}</ProductName>
          <ProductOption>
            {proctOptNom} / 수량: {proctOptQty}
          </ProductOption>
          <ProductOptionAmt>{ordTotAmt?.toLocaleString()}원</ProductOptionAmt>
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
  font: ${({ theme }) => theme.fontSizes.Body2};
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
