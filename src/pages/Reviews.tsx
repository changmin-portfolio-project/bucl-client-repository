import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../conponents/review/Header';
import Body from '../conponents/review/Body';

const ReviewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <ReviewsPageContainer>
      <Header />
      <Body />
      {/* <Footer /> */}
    </ReviewsPageContainer>
  );
};

const ReviewsPageContainer = styled.div``;

export default ReviewsPage;
