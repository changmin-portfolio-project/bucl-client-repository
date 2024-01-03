import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrderHistoryItem from './body/OrderHistoryItem';
import OrderHistoryfiniteScroll from '../../hook/OrderHistoryfiniteScroll';
import { useRecoilValue } from 'recoil';
import {
  orderHistoryListAtom,
  purchaseConfirmPopupAtom,
} from '../../states/orderHistoryAtom';
import PurchaseConfirmPopup from './body/PurchaseConfirmPopup';
import { isActivePopUp } from '../../utils/PopUpUtil';

const Body: React.FC = () => {
  const orderHistoryList = useRecoilValue(orderHistoryListAtom);
  const popupOpen = useRecoilValue(purchaseConfirmPopupAtom);
  useEffect(() => {
    isActivePopUp(!popupOpen);
  }, [popupOpen]);
  return (
    <BodyContainer>
      <OrderHistoryContainer>
        {orderHistoryList.map((v, i) => (
          <OrderHistoryItem
            key={i}
            imgPath={v.productDto.productImagePathList[0]}
            orderDate={v.orderDate}
            productName={v.productDto.productName}
            productPrice={v.spentAmount}
            confirmed={v.confirmed}
            orderCode={v.orderCode}
          />
        ))}
      </OrderHistoryContainer>
      <OrderHistoryfiniteScroll />
      {popupOpen && <PurchaseConfirmPopup orderCode={popupOpen} />}
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  min-height: calc(100vh - 140px);
`;

const OrderHistoryContainer = styled.div`
  padding: 70px 7%;
  background-color: ${({ theme }) => theme.grey.Grey1};
`;

export default Body;
