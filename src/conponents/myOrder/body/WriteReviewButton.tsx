import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../../OutlineButton';
import { useSetRecoilState } from 'recoil';
import { orderCodeConfirmAtom } from '../../../states/orderHistoryAtom';
import { confirmPopupAtom } from '../../../states/functionAtom';
import AppLink from '../../AppLink';

interface WriteReviewButtonProps {
  confirmed: boolean;
  orderCode: string;
}

const WriteReviewButton: React.FC<WriteReviewButtonProps> = ({
  orderCode,
  confirmed,
}) => {
  const setOrderCode = useSetRecoilState(orderCodeConfirmAtom);
  const setPopupOpen = useSetRecoilState(confirmPopupAtom);

  const orderConfirmBtnOnClick = (orderCode: string) => {
    setOrderCode(orderCode);
    setPopupOpen(true);
  };

  const OutlineButtonStyle: React.CSSProperties = {
    padding: '6px 10px',
  };
  return (
    <WriteReviewButtonContainer>
      {confirmed ? (
        <AppLink isApp={true} to={`/post-reviews/${orderCode}`}>
          <OutlineButton
            style={OutlineButtonStyle}
            border="Grey4"
            color="Grey8"
            font="Body2"
          >
            리뷰 작성
          </OutlineButton>
        </AppLink>
      ) : (
        <OutlineButton
          style={OutlineButtonStyle}
          onClick={() => {
            orderConfirmBtnOnClick(orderCode);
          }}
          border="Grey4"
          color="Grey8"
          font="Body2"
        >
          구매 확정
        </OutlineButton>
      )}
    </WriteReviewButtonContainer>
  );
};
const WriteReviewButtonContainer = styled.div`
  flex: 0.49;
`;

export default WriteReviewButton;
