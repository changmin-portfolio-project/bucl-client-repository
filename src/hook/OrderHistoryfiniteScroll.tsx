import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import {
  orderHistoryListAtom,
  orderHistoryPageNumAtom,
} from '../states/orderHistoryAtom';
import { OrderDto, getOrderHistory } from '../services/myOrder/getOrderHistory';

const OrderHistoryfiniteScroll: React.FC = () => {
  const [orderHistoryPageNum, setOrderHistoryPageNum] = useRecoilState(
    orderHistoryPageNumAtom,
  );
  const setOrderHistoryList =
    useSetRecoilState<OrderDto[]>(orderHistoryListAtom);

  const [ref, inView] = useInView();

  const callback = () => {
    getOrderHistory(orderHistoryPageNum).then((res) => {
      const data = res.data;
      if (data.length > 0) {
        setOrderHistoryList((prev) => [...prev, ...res.data]);
        setOrderHistoryPageNum((prev) => prev + 1);
      }
    });
  };
  useEffect(() => {
    if (inView) {
      console.log(inView, '무한 스크롤 요청 🎃'); // 실행할 함수
      callback();
    }
  }, [inView]);

  return <ScrollBottomContainer ref={ref}>무한스크롤</ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div``;

export default OrderHistoryfiniteScroll;
