import React, { useEffect } from 'react';
import styled, { CSSProperties } from 'styled-components';
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

const MyOderBodyStyle: CSSProperties = {};

const Body: React.FC = () => {
  const orderHistoryList = useRecoilValue(orderHistoryListAtom);
  const popupOpen = useRecoilValue(purchaseConfirmPopupAtom);
  useEffect(() => {
    isActivePopUp(!popupOpen);
  }, [popupOpen]);
  return (
    <BodyLayout style={MyOderBodyStyle}>
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
            productCode={v.productDto.productCode}
            productOrderQty={v.purchaseOrderDtos[0].productOrderQty}
            productOptionValue={v.purchaseOrderDtos[0].productOptionValue}
          />
        ))}
      </OrderHistoryContainer>
      <OrderHistoryfiniteScroll />
      {popupOpen && <PurchaseConfirmPopup orderCode={popupOpen} />}
    </BodyLayout>
  );
};

const OrderHistoryContainer = styled.div`
  background-color: ${({ theme }) => theme.grey.Grey1};
`;

export default Body;
