import React from 'react';
import styled from 'styled-components';
import PointHistoryInfiniteScroll from '../../../hook/PointHistoryInfiniteScroll';
import { pointHistoryListAtom } from '../../../states/rewardAtom';
import { useRecoilValue } from 'recoil';
import { RewardData } from '../../../services/reward/getPointHistory';
import { convertDtStrToDStr } from '../../../utils/DateTimeUtil';

const PointHistory: React.FC = () => {
  const pointHistoryList = useRecoilValue<RewardData[]>(pointHistoryListAtom);

  return (
    <PointHistoryContainer>
      <Title>포인트 내역</Title>
      {pointHistoryList.length > 0 ? (
        pointHistoryList.map((v, i) => (
          <PointHistoryItem key={i}>
            <BrandName>{v.brandName}</BrandName>
            <ProductName>{v.name}</ProductName>
            <DatePointBox>
              <Date>
                {convertDtStrToDStr(v.createdAt ?? '날짜 표기 할 수 없습니다.')}
              </Date>
              <AddPoint>
                {String(v.reward).charAt(0) === '-' ? '' : '+'}
                {v.reward.toLocaleString()}원
              </AddPoint>
            </DatePointBox>
          </PointHistoryItem>
        ))
      ) : (
        <ExceptionText>포인트 사용 내역이 없습니다.</ExceptionText>
      )}
      <PointHistoryInfiniteScroll />
    </PointHistoryContainer>
  );
};

const PointHistoryContainer = styled.section``;

const Title = styled.p`
  padding: ${({ theme }) => theme.paddings.small + ' ' + theme.paddings.base};
  font: ${({ theme }) => theme.fontSizes.Body3};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const PointHistoryItem = styled.div`
  padding: 10px ${({ theme }) => theme.paddings.base};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const BrandName = styled.p`
  font: ${({ theme }) => theme.fontSizes.Subhead1};
  color: ${({ theme }) => theme.grey.Grey5};
`;
const ProductName = styled.p`
  padding-bottom: 15px;
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey8};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DatePointBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Date = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;
const AddPoint = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

const ExceptionText = styled.p`
  padding-top: 40px;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;

export default PointHistory;
