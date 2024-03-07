/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import {
  RewardData,
  getPointHistoryList,
} from '../services/reward/getPointHistory';
import {
  pointHistoryListAtom,
  pointHistoryPageNumAtom,
} from '../states/rewardAtom';

const PointHistoryInfiniteScroll: React.FC = () => {
  const param = useParams();

  const [pointHistoryPageNum, setPointHistoryPageNum] = useRecoilState(
    pointHistoryPageNumAtom,
  );
  const setPointHistoryList =
    useSetRecoilState<RewardData[]>(pointHistoryListAtom);

  const [ref, inView] = useInView();

  const callback = () => {
    getPointHistoryList(pointHistoryPageNum)
      .then((res) => {
        if (res.data.length != 0) {
          setPointHistoryList((prev) => [...prev, ...res.data]);
          setPointHistoryPageNum((prev) => prev + 1);
        }
      })
      .catch(() => {});
  };
  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [inView]);

  return <ScrollBottomContainer ref={ref}></ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div`
  margin-top: 100px;
`;

export default PointHistoryInfiniteScroll;
