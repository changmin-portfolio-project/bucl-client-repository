import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../../conponents/myOrder/Body';
import TabBar from '../../conponents/TabBar';
import HeaderLayout from '../../conponents/layout/HeaderLayout';
import {
  orderHistoryListAtom,
  orderHistoryPageNumAtom,
} from '../../states/orderHistoryAtom';
import { useSetRecoilState } from 'recoil';
import { NAVIGATION_TO } from '../../const/AppVars';

const MyOrdersPage: React.FC = () => {
  const setOrderHistoryList = useSetRecoilState(orderHistoryListAtom);
  const setOrderHistoryPageNumAtom = useSetRecoilState(orderHistoryPageNumAtom);
  useEffect(() => {
    setOrderHistoryList([]);
    setOrderHistoryPageNumAtom(0);
  }, []);
  return (
    <MyOrdersPageContainer>
      <HeaderLayout text="주문 내역" to="/my" type={NAVIGATION_TO} />
      <Body />
      <TabBar />
    </MyOrdersPageContainer>
  );
};

const MyOrdersPageContainer = styled.div``;

export default MyOrdersPage;
