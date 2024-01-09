import React from 'react';
import styled from 'styled-components';
import WithdrawHistoryIniteScroll from '../../../hook/WithdrawHistoryIniteScroll';
import { useRecoilValue } from 'recoil';
import { withdrawalHistoryListAtom } from '../../../states/withdrawalAtom';
import {
  WTHDR_CMPLT,
  WTHDR_CMPLT_NAME,
  WTHDR_WTNG_NAME,
} from '../../../const/WthdrStatus';
import { convertDtStrToDStr } from '../../../utils/DateTimeUtil';

const WithdrawHistory: React.FC = () => {
  const withdrawalHistoryList = useRecoilValue(withdrawalHistoryListAtom);

  const getWthdrStatusName = (wthdrStatus: string): string => {
    if (wthdrStatus === WTHDR_CMPLT) {
      return WTHDR_CMPLT_NAME;
    } else {
      return WTHDR_WTNG_NAME;
    }
  };

  return (
    <WithdrawHistoryContainer>
      <Title>인출 내역</Title>
      {withdrawalHistoryList.length > 0 ? (
        withdrawalHistoryList.map((v, i) => (
          <WithdrawHistoryItem key={i}>
            <StateApplyDateBox>
              <State>{getWthdrStatusName(v.withdrawalStatus)}</State>
              <ApplyDate>신청일 {convertDtStrToDStr(v.lastUsedDate)}</ApplyDate>
            </StateApplyDateBox>
            <Point>-{v.rewardWithdrawalAmount.toLocaleString()}P 인출</Point>
          </WithdrawHistoryItem>
        ))
      ) : (
        <ExceptionText>포인트 인출 내역이 없습니다.</ExceptionText>
      )}

      <WithdrawHistoryIniteScroll />
    </WithdrawHistoryContainer>
  );
};

const WithdrawHistoryContainer = styled.section``;

const Title = styled.p`
  padding: 8px 7%;
  font: ${({ theme }) => theme.fontSizes.Body3};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const WithdrawHistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 7%;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const StateApplyDateBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const State = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;
const ApplyDate = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;

const Point = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

const ExceptionText = styled.p`
  padding-top: 40px;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;

export default WithdrawHistory;
