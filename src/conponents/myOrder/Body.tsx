import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import OrderHistoryItem from './body/OrderHistoryItem';
import OrderHistoryfiniteScroll from '../../hook/OrderHistoryfiniteScroll';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  orderCodeConfirmAtom,
  orderHistoryListAtom,
} from '../../states/orderHistoryAtom';

import BodyLayout from '../layout/BodyLayout';
import { putOrderConfirm } from '../../services/myOrder/putOrderConfirm';
import ConfirmPopup from '../ConfirmPopup';
import { confirmPopupAtom } from '../../states/functionAtom';
import { CONFIRM_NO_RELOAD } from '../../const/AttributeVar';
import theme from '../../style/theme';

const MyOderBodyStyle: CSSProperties = {
  backgroundColor: theme.grey.Grey1,
  paddingBottom: 0,
};

const Body: React.FC = () => {
  const [orderHistoryList, setOrderHistoryList] =
    useRecoilState(orderHistoryListAtom);
  const orderCode = useRecoilValue(orderCodeConfirmAtom);

  const popupOpen = useRecoilValue(confirmPopupAtom);

  const confirmBtnOnClick = (orderCode: string) => {
    putOrderConfirm(orderCode)
      .then(() => {
        setOrderHistoryList(
          [...orderHistoryList].map((item) => {
            if (item.orderCode === orderCode) {
              const itemTemp = { ...item };
              itemTemp.confirmed = true;
              return itemTemp;
            } else {
              return item;
            }
          }),
        );
      })
      .catch(() => {
        window.location.reload();
      });
  };
  return (
    <BodyLayout style={MyOderBodyStyle}>
      <OrderHistoryContainer>
        {orderHistoryList.map((v, i) => (
          <OrderHistoryItem
            key={i}
            imgPath={v.productDto.imagePath}
            orderDate={v.orderDate}
            productName={v.productDto.productName}
            productPrice={v.spentAmount}
            confirmed={v.confirmed}
            orderCode={v.orderCode}
            productCode={v.productDto.productCode}
            productOrderQty={v.purchaseOrderDtos[0]?.productOrderQty}
            productOptionValue={v.purchaseOrderDtos[0]?.productOptionValue}
            orderStatus={v.orderStatus}
          />
        ))}
      </OrderHistoryContainer>
      <OrderHistoryfiniteScroll />
      {popupOpen && (
        <ConfirmPopup
          to={CONFIRM_NO_RELOAD}
          message={[
            '해당 상품을 구매 확정 하시겠습니까?',
            '구매가 확정되었습니다.',
          ]}
          confirmFunc={() => {
            confirmBtnOnClick(orderCode);
          }}
        />
      )}
    </BodyLayout>
  );
};

const OrderHistoryContainer = styled.div`
  background-color: ${({ theme }) => theme.grey.Grey1};
`;

export default Body;
