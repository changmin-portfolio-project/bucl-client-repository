import React from 'react';
import PopupLayout from './layout/PopupLayout';
import { reviewPopupProps, reviewPopupPropsAtom } from '../states/reviewAtom';
import styled from 'styled-components';
import { useResetRecoilState } from 'recoil';

interface ReviewPopupProps {
  reivewPopupProps: reviewPopupProps;
}

const ReviewPopup: React.FC<ReviewPopupProps> = ({ reivewPopupProps }) => {
  const resetReviewPopupProps = useResetRecoilState(reviewPopupPropsAtom);
  if (reivewPopupProps.isActive) document.body.style.overflow = 'hidden';

  const PopupLayoutStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  };
  return (
    <PopupLayout style={PopupLayoutStyle}>
      <ReviewDetailImg src={reivewPopupProps.imgPath} />
      <DeleteBtn
        src="/assets/XButton.svg"
        onClick={() => {
          resetReviewPopupProps();
          document.body.style.overflow = 'scroll';
        }}
      />
    </PopupLayout>
  );
};

const ReviewDetailImg = styled.img`
  margin: auto 0;
  position: relative;
`;

const DeleteBtn = styled.img`
  width: 30px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export default ReviewPopup;
