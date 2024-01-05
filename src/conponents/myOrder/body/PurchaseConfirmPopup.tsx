import React, { useState } from 'react';
import PopupLayout from '../../layout/PopupLayout';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  orderHistoryListAtom,
  purchaseConfirmPopupAtom,
} from '../../../states/orderHistoryAtom';
import { putOrderConfirm } from '../../../services/myOrder/putOrderConfirm';
import { OrderDto } from '../../../services/myOrder/getOrderHistory';

interface PurchaseConfirmPopupProps {
  orderCode: string;
}

const PurchaseConfirmPopup: React.FC<PurchaseConfirmPopupProps> = ({
  orderCode,
}) => {
  const [popupOpen, setPopupOpen] = useRecoilState(purchaseConfirmPopupAtom);
  const [orderHistoryList, setOrderHistoryList] =
    useRecoilState<OrderDto[]>(orderHistoryListAtom);

  // 확인버튼을 눌렀는지 유무
  const [confirmBoolean, setConfirmBoolean] = useState<boolean>(false);
  const purchaseConfirmBtnOnClick = () => {
    if (popupOpen) {
      setPopupOpen('');
    }
  };
  const confirmBtnOnClick = () => {
    console.log(orderCode);
    putOrderConfirm(orderCode).then(() => {
      setConfirmBoolean(true);
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
    });
  };
  return (
    <PopupLayout key={orderCode}>
      <PurchaseConfirmPopupBox>
        <ExplainText>
          {confirmBoolean
            ? '구매가 확정되었습니다.'
            : '해당 상품을 구매 확정 하시겠습니까?'}
        </ExplainText>
        <CancelConfirmBtnBox>
          {confirmBoolean ? (
            <AfterConfirmBtn onClick={purchaseConfirmBtnOnClick}>
              확인
            </AfterConfirmBtn>
          ) : (
            <>
              <CancelBtnBox>
                <CancelBtn onClick={purchaseConfirmBtnOnClick}>취소</CancelBtn>
              </CancelBtnBox>
              <ConfirmBtnBox>
                <ConfirmBtn onClick={confirmBtnOnClick}>확인</ConfirmBtn>
              </ConfirmBtnBox>
            </>
          )}
        </CancelConfirmBtnBox>
      </PurchaseConfirmPopupBox>
    </PopupLayout>
  );
};

const PurchaseConfirmPopupBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px 7% 40px 7%;
  width: calc(100% - 14%);
  background-color: white;
`;
const ExplainText = styled.p`
  padding-bottom: 12px;
  font: ${({ theme }) => theme.fontSizes.Body3};
`;
const CancelConfirmBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;
const CancelBtnBox = styled.div`
  width: 48%;
`;
const ConfirmBtnBox = styled(CancelBtnBox)``;
const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-right: -10px;
  padding: 8px 0;
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: ${({ theme }) => theme.mainColor.Orange5};
  cursor: pointer;
  svg {
    path {
      stroke: ${({ theme }) => theme.mainColor.Orange5};
    }
  }
`;
const ConfirmBtn = styled(CancelBtn)`
  color: white;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
`;

const AfterConfirmBtn = styled(ConfirmBtn)``;

export default PurchaseConfirmPopup;
