import React from 'react';
import styled from 'styled-components';

const PaymentInfo: React.FC = () => {
  return (
    <PaymentInfoContainer>
      <Title>결제 정보</Title>
      <PaymentInfoBox>
        <InfoBox>
          <SubTitle>카드결제</SubTitle>
          <Info>35,000원</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>마스터카드(4562-****-****-****)</SubTitle>
          <Info>35,000원</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>사용적립금</SubTitle>
          <Info>3,000P</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>배송비</SubTitle>
          <Info>4,000원</Info>
        </InfoBox>
      </PaymentInfoBox>
      <TotalPaymentAmountBox>
        <TotalPaymentAmountTitle>총 결제 금액</TotalPaymentAmountTitle>
        <Amount>00,000원</Amount>
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
