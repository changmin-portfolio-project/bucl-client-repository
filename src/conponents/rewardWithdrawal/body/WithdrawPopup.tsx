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
import OutlineButton from '../../OutlineButton';
import ColoredButton from '../../ColoredButton';

interface PurchaseConfirmPopupProps {
  orderCode: string;
}
const WidthdrawPopup: React.FC<PurchaseConfirmPopupProps> = ({ orderCode }) => {
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

  const OutlineButtonStyle: React.CSSProperties = {
    padding: '8px 0',
  };
  const ColoredButtonStyle: React.CSSProperties = {
    padding: '8px 0',
    height: '100%',
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
            <ColoredButton
              onClick={purchaseConfirmBtnOnClick}
              font="Subhead2"
              color="white"
            >
              확인
            </ColoredButton>
          ) : (
            <>
              <CancelBtnBox>
                <OutlineButton
                  onClick={purchaseConfirmBtnOnClick}
                  style={OutlineButtonStyle}
                  font="Subhead2"
                  border="Orange5"
                  color="Orange5"
                >
                  취소
                </OutlineButton>
              </CancelBtnBox>
              <ConfirmBtnBox>
                <ColoredButton
                  style={ColoredButtonStyle}
                  onClick={confirmBtnOnClick}
                  font="Subhead2"
                  color="white"
                >
                  확인
                </ColoredButton>
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
  padding: 15px ${({ theme }) => theme.paddings.base} 40px
    ${({ theme }) => theme.paddings.base};
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
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

export default WidthdrawPopup;
