import React from 'react';
import styled from 'styled-components';
import ReviewImgItem from '../../ReviewImgItem';
import { convertDtStrToDStr } from '../../../utils/DateTimeUtil';

import TextButton from '../../TextButton';
import DeliveryStatusButton from './DeliveryStatusButton';
import WriteReviewButton from './WriteReviewButton';
import {
  checkNotOrderStatus,
  orderStatusNameFunc,
} from '../../../const/OrderVars';
import AppLink from '../../AppLink';

interface OrderHistoryItemProps {
  productName: string;
  productCode: number;
  imgPath: string;
  orderDate: string;
  productPrice: number;
  confirmed: boolean;
  orderCode: string;
  productOrderQty: number;
  productOptionValue: string;
  orderStatus: string;
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({
  imgPath,
  orderDate,
  productName,
  productPrice,
  confirmed,
  orderCode,
  productCode,
  productOrderQty,
  productOptionValue,
  orderStatus,
}) => {
  const TextButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <OrderHistoryItemContainer>
      <DateOrderDetailBtnBox>
        <DateBox>
          {convertDtStrToDStr(orderDate ?? '날짜 표기 할 수 없습니다.')}
        </DateBox>
        <AppLink isApp={true} to={`/my/orders/${orderCode}`}>
          <TextButton font="Body1" style={TextButtonStyle} color="Orange5">
            주문상세
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </TextButton>
        </AppLink>
      </DateOrderDetailBtnBox>

      <OrderStatusWrap>{orderStatusNameFunc(orderStatus)}</OrderStatusWrap>

      <ProductInfoBox>
        <ProductImgBox>
          <ReviewImgItem imgPath={imgPath} />
        </ProductImgBox>
        <ProductNamePriceCountBox>
          <AppLink to={`/products/${productCode}`} isApp={true}>
            <Name>{productName}</Name>
            <Option>{productOptionValue}</Option>
          </AppLink>

          <PriceCountBox>
            <Price>{productPrice.toLocaleString()}원</Price>

            <Count>{productOrderQty}개</Count>
          </PriceCountBox>
        </ProductNamePriceCountBox>
      </ProductInfoBox>
      {!checkNotOrderStatus(orderStatus) && (
        <MenuBtnBox>
          <DeliveryStatusButton orderStatus={orderStatus} />
          <WriteReviewButton confirmed={confirmed} orderCode={orderCode} />
        </MenuBtnBox>
      )}
    </OrderHistoryItemContainer>
  );
};

const OrderHistoryItemContainer = styled.div`
  margin-bottom: 10px;
  background-color: white;
  border-radius: 4px;
  // padding: 70px 7%;
`;

const DateOrderDetailBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};

  button {
    a {
      display: flex;
      align-items: center;
    }
  }
  svg {
    path {
      stroke: ${({ theme }) => theme.mainColor.Orange5};
    }
  }
`;
const DateBox = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const ProductInfoBox = styled.div`
  display: flex;
  padding: 7px 10px;
`;
const ProductImgBox = styled.div`
  width: 23%;
  img {
    border-radius: 4px;
  }
`;

const ProductNamePriceCountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 30px;
  width: 77%;
`;
const Name = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
`;

const Option = styled(Name)`
  color: ${({ theme }) => theme.grey.Grey6};
`;

const PriceCountBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const Count = styled(Price)``;

const MenuBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px 15px 10px;
`;
// const DeliveryStatusBtnBox = styled.div`
//   width: 48%;
// `;

// const WriteReviewBtnBox = styled(DeliveryStatusBtnBox)``;

const OrderStatusWrap = styled.div`
  padding: 7px 0 0 13px;
  font: ${({ theme }) => theme.fontSizes.Subhead1};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default OrderHistoryItem;
