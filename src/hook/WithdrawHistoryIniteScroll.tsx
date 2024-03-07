import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import {
  withdrawalHistoryListAtom,
  withdrawalHistoryPageNumAtom,
} from '../states/withdrawalAtom';
import {
  RewardData,
  getWithdrawalHistoryList,
} from '../services/withdrawal/getWithdrawalHistory';

const WithdrawHistoryIniteScroll: React.FC = () => {
  const [withdrawalHistoryPageNum, setWithdrawalHistoryPageNum] =
    useRecoilState(withdrawalHistoryPageNumAtom);
  const setWithdrawalHistoryList = useSetRecoilState<RewardData[]>(
    withdrawalHistoryListAtom,
  );

  const [ref, inView] = useInView();

  const callback = () => {
    getWithdrawalHistoryList(withdrawalHistoryPageNum).then((res) => {
      setWithdrawalHistoryList((prev) => [...prev, ...res.data]);
      setWithdrawalHistoryPageNum((prev) => prev + 1);
    });
  };
  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [inView]);

  return <ScrollBottomContainer ref={ref}></ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div``;

export default WithdrawHistoryIniteScroll;
