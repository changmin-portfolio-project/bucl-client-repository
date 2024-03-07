import React from 'react';
import styled from 'styled-components';
import { orderInfoAtom } from '../../../states/orderDetailAtom';
import { useRecoilValue } from 'recoil';

const PaymentInfo: React.FC = () => {
  const orderInfo = useRecoilValue(orderInfoAtom);
  return (
    <PaymentInfoContainer>
      <Title>결제 정보</Title>
      <PaymentInfoBox>
        <InfoBox>
          <SubTitle>상품 가격</SubTitle>
          <Info>{orderInfo.consumerOrder.toLocaleString()}원</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>배송비</SubTitle>
          <Info>{orderInfo.shippingFee.toLocaleString()}원</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>할인 가격</SubTitle>
          <Info>
            {(orderInfo.consumerOrder - orderInfo.salePrice).toLocaleString()}원
          </Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>사용리워드</SubTitle>
          <Info>{orderInfo.rewardUseAmount.toLocaleString()}P</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>결제 방법</SubTitle>
          <Info>{orderInfo.paymentMethod}</Info>
        </InfoBox>
      </PaymentInfoBox>
      <TotalPaymentAmountBox>
        <TotalPaymentAmountTitle>총 결제 금액</TotalPaymentAmountTitle>
        <Amount>
          {(
            orderInfo.salePrice -
            orderInfo.rewardUseAmount +
            orderInfo.shippingFee
          ).toLocaleString()}
          원
        </Amount>
      </TotalPaymentAmountBox>
    </PaymentInfoContainer>
  );
};

const PaymentInfoContainer = styled.section``;

const Title = styled.p`
  padding: 10px 7%;
  font: ${({ theme }) => theme.fontSizes.Body3};
  font-weight: 700;
`;

const PaymentInfoBox = styled.div`
  padding: 8px 7% 15px 7%;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey2};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
`;
const SubTitle = styled.p`
  width: 70%;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
`;
const Info = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
`;

const TotalPaymentAmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 7%;
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;
const TotalPaymentAmountTitle = styled.span`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;
const Amount = styled(TotalPaymentAmountTitle)`
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default PaymentInfo;
