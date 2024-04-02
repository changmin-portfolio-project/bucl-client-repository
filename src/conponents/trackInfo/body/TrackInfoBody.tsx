import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { trackInfoAtom } from '../../../states/trackDeliveryAtom';
import { convertDtStrToDTStr } from '../../../utils/DateTimeUtil';

const TrackInfoBody: React.FC = () => {
  const trackInfo = useRecoilValue(trackInfoAtom);

  let trackEventList = trackInfo.userTrackingInfo.track.events.edges;
  trackEventList = trackEventList.slice().reverse();
  return (
    <RecipientContainer>
      <Title>배송 정보</Title>
      <RecipientInfoBox>
        <InfoBox>
          <SubTitle>받는 사람</SubTitle>
          <Info>{trackInfo.shpAddrDto.recipientName}</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>연락처</SubTitle>
          <Info>{trackInfo.shpAddrDto.contactNumber}</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>주소</SubTitle>
          <AddressInfo>
            {`${trackInfo.shpAddrDto.address}\n${trackInfo.shpAddrDto.addressDetail}`}
          </AddressInfo>
        </InfoBox>
        <InfoBox>
          <SubTitle>배송요청사항</SubTitle>
          <Info>{trackInfo.shpAddrDto.memoContent}</Info>
        </InfoBox>
        <InfoBox>
          <SubTitle>송장 번호</SubTitle>
          <Info>{trackInfo.trackingNum}</Info>
        </InfoBox>
      </RecipientInfoBox>

      <Title>배송 상태</Title>
      <TrackInfoBox>
        {trackEventList &&
          trackEventList.map((v, i) => (
            <TrackInfoContainer key={i}>
              <TrackInfoWrap>
                <TrackItemDiv>{convertDtStrToDTStr(v.node.time)}</TrackItemDiv>
                <TrackItemDiv>{v.node.location.name}</TrackItemDiv>
                <TrackItemDiv>{v.node.status.name}</TrackItemDiv>
              </TrackInfoWrap>
            </TrackInfoContainer>
          ))}
      </TrackInfoBox>
    </RecipientContainer>
  );
};

const RecipientContainer = styled.section``;

const Title = styled.p`
  padding: 20px 7% 5px 7%;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  font-weight: 500;
`;

const RecipientInfoBox = styled.div`
  padding: 8px 7% 30px 7%;

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
  white-space: pre-wrap;
`;

const TrackInfoBox = styled.div``;

const TrackInfoContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const TrackInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font: ${({ theme }) => theme.fontSizes.Body2};
  font-family: Pretendard-Light;
  font-weight: 400;
  padding: 8px 7% 15px 7%;
`;

const TrackItemDiv = styled.div`
  white-space: pre-wrap;
  display: flex;
  align-items: center;
`;

export default TrackInfoBody;
