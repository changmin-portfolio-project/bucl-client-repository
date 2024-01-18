import React, { useEffect } from 'react';
import styled from 'styled-components';
import Body from '../conponents/photoReview/Body';
import HeaderLayout from '../conponents/layout/HeaderLayout';

const PhotoReviewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <PhotoReviewPageContainer>
      <HeaderLayout text="포토리뷰 모아보기" />
      <Body />
    </PhotoReviewPageContainer>
  );
};

const PhotoReviewPageContainer = styled.div``;

export default PhotoReviewsPage;
