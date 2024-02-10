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
      callback();
    }
  }, [inView]);

  return (
    <ScrollBottomContainer ref={ref}>
      <img src="/assets/bucl_loading.gif" width={'25px'} />
    </ScrollBottomContainer>
  );
};

const ScrollBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.grey.Grey1};
  padding-bottom: 50px;
`;

export default OrderHistoryfiniteScroll;
