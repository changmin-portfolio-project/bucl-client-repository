import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../../OutlineButton';
import { useSetRecoilState } from 'recoil';
import { purchaseConfirmPopupAtom } from '../../../states/orderHistoryAtom';

interface WriteReviewButtonProps {
  confirmed: boolean;
  orderCode: string;
}

const WriteReviewButton: React.FC<WriteReviewButtonProps> = ({
  orderCode,
  confirmed,
}) => {
  const setPopupOpen = useSetRecoilState(purchaseConfirmPopupAtom);

  const purchaseConfirmBtnOnClick = (orderCode: string) => {
    setPopupOpen(orderCode);
  };

  const OutlineButtonStyle: React.CSSProperties = {
    padding: '6px 10px',
  };
  return (
    <WriteReviewButtonContainer>
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
    </WriteReviewButtonContainer>
  );
};
const WriteReviewButtonContainer = styled.div`
  flex: 0.49;
`;

export default WriteReviewButton;
