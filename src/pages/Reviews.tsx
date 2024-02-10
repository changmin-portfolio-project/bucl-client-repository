import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../conponents/review/Body';
import TopBtn from '../conponents/TopButton';
import HeaderLayout from '../conponents/layout/HeaderLayout';

const ReviewsPage: React.FC = () => {
  const ReviewTopBtntyle: React.CSSProperties = {
    bottom: '10px',
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
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
