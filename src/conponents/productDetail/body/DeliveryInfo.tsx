import React from 'react';
import styled from 'styled-components';

const DeliveryInfo: React.FC = () => {
  return (
    <DeliveryContainer>
      <InformationBox>
        <span>배송 정보</span>
        <p>4일 소요 (우체국 택배)</p>
      </InformationBox>
      <DeliveryPriceBox>
        <span>배송비</span>
        <p>전 상품 무료배송</p>
      </DeliveryPriceBox>
    </DeliveryContainer>
  );
};

const DeliveryContainer = styled.div`
  margin: 8px 0;
  padding: 7px 7%;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey2};
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;
const InformationBox = styled.span`
  display: flex;
  padding: 5px 0;
  font: ${({ theme }) => theme.fontSizes.Body2};
  span {
    width: 70px;
    color: ${({ theme }) => theme.grey.Grey6};
  }
  p {
    color: ${({ theme }) => theme.grey.Grey8};
  }
`;
const DeliveryPriceBox = styled(InformationBox)``;

export default DeliveryInfo;
