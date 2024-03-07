import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { orderInfoAtom } from '../../../states/orderDetailAtom';

const Recipient: React.FC = () => {
  const orderInfo = useRecoilValue(orderInfoAtom);
  return (
    <RecipientContainer>
      <Title>받는 사람 정보</Title>
      <RecipientInfoBox>
        <InfoBox>
          <SubTitle>받는 사람</SubTitle>
          <Info>{orderInfo.shpAddrDto.recipientName}</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>연락처</SubTitle>
          <Info>{orderInfo.shpAddrDto.contactNumber}</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>주소</SubTitle>
          <AddressInfo>
            {orderInfo.shpAddrDto.address}
            {orderInfo.shpAddrDto.addressDetail}
          </AddressInfo>
        </InfoBox>
        <InfoBox>
          <SubTitle>배송요청사항</SubTitle>
          <Info>{orderInfo.shpAddrDto.memoContent}</Info>
        </InfoBox>
      </RecipientInfoBox>
    </RecipientContainer>
  );
};

const RecipientContainer = styled.section``;

const Title = styled.p`
  padding: 10px 7%;
  font: ${({ theme }) => theme.fontSizes.Body3};
  font-weight: 700;
`;

const RecipientInfoBox = styled.div`
  padding: 8px 7% 15px 7%;
  border-top: 6px solid ${({ theme }) => theme.grey.Grey2};
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
`;
const SubTitle = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;
const Info = styled.p`
  width: 70%;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AddressInfo = styled(Info)`
  display: flex;
  flex-wrap: wrap;
`;

export default Recipient;
