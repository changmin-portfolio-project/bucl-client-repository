import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../conponents/photoReview/Header';
import Body from '../conponents/photoReview/Body';

const PhotoReviewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <PhotoReviewPageContainer>
      <Header />
      <Body />
    </PhotoReviewPageContainer>
  );
};

const PhotoReviewPageContainer = styled.div``;

export default PhotoReviewsPage;
