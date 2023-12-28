import React from 'react';
import styled from 'styled-components';

const Recipient: React.FC = () => {
  return (
    <RecipientContainer>
      <Title>받는사람 정보</Title>
      <RecipientInfoBox>
        <InfoBox>
          <SubTitle>받는사람</SubTitle>
          <Info>이안나</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>연락처</SubTitle>
          <Info>010-0000-0000</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>주소</SubTitle>
          <Info>이안나</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>배송요청사항</SubTitle>
          <Info>문앞에 놔주세요 벨누르지 말아주세요. 아기가 ㅇㄹㄴㄹ</Info>
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

export default Recipient;
