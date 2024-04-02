import React from 'react';
import styled from 'styled-components';

const DeliveryInfo: React.FC = () => {
  return (
    <DeliveryContainer>
      <DeliveryPriceBox>
        <span>배송비</span>
        <p>무료배송</p>
      </DeliveryPriceBox>
      <InformationBox>
        <span>배송 정보</span>
        <p>2 ~ 3일 소요 (CJ 대한통운)</p>
      </InformationBox>
    </DeliveryContainer>
  );
};

const DeliveryContainer = styled.div`
  margin: ${({ theme }) => theme.paddings.small} 0;
  padding: ${({ theme }) => theme.paddings.small + ' ' + theme.paddings.base};
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
const DeliveryPriceBox = styled(InformationBox)`
  p {
    color: ${({ theme }) => theme.mainColor.Orange5};
    font-weight: 600;
  }
`;

export default DeliveryInfo;
