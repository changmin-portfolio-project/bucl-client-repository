import React from 'react';
import styled from 'styled-components';
import ReviewImgItem from '../../ReviewImgItem';
import { convertDtStrToDStr } from '../../../utils/DateTimeUtil';
import { purchaseConfirmPopupAtom } from '../../../states/orderHistoryAtom';
import { useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import TextButton from '../../TextButton';
import OutlineButton from '../../OutlineButton';

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

  const TextButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };
  const OutlineButtonStyle: React.CSSProperties = {
    padding: '6px 10px',
  };

  return (
    <OrderHistoryItemContainer>
      <DateOrderDetailBtnBox>
        <DateBox>
          {convertDtStrToDStr(orderDate ?? '날짜 표기 할 수 없습니다.')}
        </DateBox>
        <TextButton font="Body1" style={TextButtonStyle} color="Orange5">
          <Link to={`/my/orders/${orderCode}`}>
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
          </Link>
        </TextButton>
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
          <OutlineButton
            style={OutlineButtonStyle}
            font="Body2"
            border="Orange5"
            color="Orange5"
          >
            배송현황
          </OutlineButton>
        </DeliveryStatusBtnBox>
        <WriteReviewBtnBox>
          {confirmed ? (
            <OutlineButton
              style={OutlineButtonStyle}
              border="Grey4"
              color="Grey8"
              font="Body2"
            >
              리뷰작성
            </OutlineButton>
          ) : (
            <OutlineButton
              style={OutlineButtonStyle}
              onClick={() => {
                purchaseConfirmBtnOnClick(orderCode);
              }}
              border="Grey4"
              color="Grey8"
              font="Body2"
            >
              구매확정
            </OutlineButton>
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

const WriteReviewBtnBox = styled(DeliveryStatusBtnBox)``;

export default OrderHistoryItem;
