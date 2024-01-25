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
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  const orderHistoryList = useRecoilValue(orderHistoryListAtom);
  const popupOpen = useRecoilValue(purchaseConfirmPopupAtom);
  useEffect(() => {
    isActivePopUp(!popupOpen);
  }, [popupOpen]);
  return (
    <BodyLayout>
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
    </BodyLayout>
  );
};

const OrderHistoryContainer = styled.div`
  padding: 20px ${({ theme }) => theme.paddings.base};
  min-height: calc(100vh - 140px);
  background-color: ${({ theme }) => theme.grey.Grey1};
`;

export default Body;
