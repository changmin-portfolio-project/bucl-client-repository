import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../conponents/review/Body';
import TopBtn from '../conponents/TopButton';
import HeaderLayout from '../conponents/layout/HeaderLayout';
import { Review } from '../services/review/getReviewList';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { reviewListAtom, reviewPageNumAtom } from '../states/reviewAtom';

const ReviewsPage: React.FC = () => {
  const ReviewTopBtntyle: React.CSSProperties = {
    bottom: '10px',
  };

  const [, setReviewPageNum] = useRecoilState(reviewPageNumAtom);
  const setReviewList = useSetRecoilState<Review[]>(reviewListAtom);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setReviewPageNum(0);
    setReviewList([]);
  }, []);
  return (
    <ReviewsPageContainer>
      <HeaderLayout text="구매 후기" />
      <Body />
      <TopBtn style={ReviewTopBtntyle} />

      {/* <Footer /> */}
    </ReviewsPageContainer>
  );
};

const ReviewsPageContainer = styled.div``;

export default ReviewsPage;
