import React from 'react';
import styled from 'styled-components';
import { ImageData } from '../../services/photoReview/getPhotoReviewList';
import ReviewImgItem from '../ReviewImgItem';
import { useRecoilValue } from 'recoil';
import { photoReviewListAtom } from '../../states/photoReviewAtom';
import PhotoReviewInfiniteScroll from '../../hook/PhotoReviewInfiniteScroll';

const Body: React.FC = () => {
  const list = useRecoilValue<ImageData[]>(photoReviewListAtom);

  return (
    <BodyContainer>
      {list?.map((v, i) => <ReviewImgItem key={i} imgPath={v.imagePath} />)}
      <PhotoReviewInfiniteScroll />
    </BodyContainer>
  );
};

const BodyContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 100px 7% 30px 7%;
`;

export default Body;
