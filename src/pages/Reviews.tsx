import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../conponents/review/Body';
import TopBtn from '../conponents/TopBtn';
import HeaderLayout from '../conponents/layout/HeaderLayout';

const ReviewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <ReviewsPageContainer>
      <HeaderLayout text="구매 후기" />
      <Body />
      <TopBtn />
      {/* <Footer /> */}
    </ReviewsPageContainer>
  );
};

const ReviewsPageContainer = styled.div``;

export default ReviewsPage;
