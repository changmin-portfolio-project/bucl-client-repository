import React from 'react';
import styled from 'styled-components';
import ReviewImgItem from '../../ReviewImgItem';
import { convertDtStrToDStr } from '../../../utils/DateTimeUtil';
import { purchaseConfirmPopupAtom } from '../../../states/orderHistoryAtom';
import { useSetRecoilState } from 'recoil';

interface OrderHistoryItemProps {
  productName: string;
  imgPath: string;
  orderDate: string;
  productPrice: number;
  confirmed: boolean;
  orderCode: string;
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({
  imgPath,
  orderDate,
  productName,
  productPrice,
  confirmed,
  orderCode,
}) => {
  // const [selectedOrdCode, setSelectedOrdCode] = useState<string>();
  const setPopupOpen = useSetRecoilState(purchaseConfirmPopupAtom);

  const purchaseConfirmBtnOnClick = (orderCode: string) => {
    setPopupOpen(orderCode);
  };

  return (
    <OrderHistoryItemContainer>
      <DateOrderDetailBtnBox>
        <DateBox>
          {convertDtStrToDStr(orderDate ?? '날짜 표기 할 수 없습니다.')}
        </DateBox>
        <OrderDetailBtn>
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
        </OrderDetailBtn>
      </DateOrderDetailBtnBox>
      <ProductInfoBox>
        <ProductImgBox>
          <ReviewImgItem imgPath={imgPath} />
        </ProductImgBox>
        <ProductNamePriceCountBox>
          <Name>{productName}</Name>
          <PriceCountBox>
            <Price>{productPrice.toLocaleString()}원</Price>
            <Count>1개</Count>
          </PriceCountBox>
        </ProductNamePriceCountBox>
      </ProductInfoBox>
      <MenuBtnBox>
        <DeliveryStatusBtnBox>
          <DeliveryStatusBtn>배송현황</DeliveryStatusBtn>
        </DeliveryStatusBtnBox>
        <WriteReviewBtnBox>
          {confirmed ? (
            <WriteReviewBtn>리뷰작성</WriteReviewBtn>
          ) : (
            <PurchaseConfirmBtn
              onClick={() => {
                purchaseConfirmBtnOnClick(orderCode);
              }}
            >
              구매확정
            </PurchaseConfirmBtn>
          )}
        </WriteReviewBtnBox>
      </MenuBtnBox>
    </OrderHistoryItemContainer>
  );
};

const OrderHistoryItemContainer = styled.div`
  margin-bottom: 10px;
  background-color: white;
  border-radius: 4px 4px 0 0;
  // padding: 70px 7%;
`;

const DateOrderDetailBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;
const DateBox = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey6};
`;
const OrderDetailBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: -10px;
  background-color: transparent;
  border: none;
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.mainColor.Orange5};
  cursor: pointer;
  svg {
    path {
      stroke: ${({ theme }) => theme.mainColor.Orange5};
    }
  }
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
  padding: 1% 0 0 5px;
  width: 77%;
`;
const Name = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
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
const DeliveryStatusBtnBox = styled.div`
  width: 48%;
`;
const DeliveryStatusBtn = styled(OrderDetailBtn)`
  justify-content: center;
  padding: 6px 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

const WriteReviewBtnBox = styled(DeliveryStatusBtnBox)``;
const WriteReviewBtn = styled(DeliveryStatusBtn)`
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  color: ${({ theme }) => theme.grey.Grey8};
`;
const PurchaseConfirmBtn = styled(WriteReviewBtn)``;

export default OrderHistoryItem;
