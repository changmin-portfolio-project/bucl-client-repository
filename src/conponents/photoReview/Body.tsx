import React from 'react';
import styled from 'styled-components';
import { ImageData } from '../../services/photoReview/getPhotoReviewList';
import ReviewImgItem from '../ReviewImgItem';
import { useRecoilValue } from 'recoil';
import { photoReviewListAtom } from '../../states/photoReviewAtom';
import PhotoReviewInfiniteScroll from '../../hook/PhotoReviewInfiniteScroll';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  const list = useRecoilValue<ImageData[]>(photoReviewListAtom);

  return (
    <BodyLayout>
      <PhotoReviewContainer>
        {list?.map((v, i) => <ReviewImgItem key={i} imgPath={v.imagePath} />)}
        <PhotoReviewInfiniteScroll />
      </PhotoReviewContainer>
    </BodyLayout>
  );
};

const PhotoReviewContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px ${({ theme }) => theme.paddings.base};
`;

export default Body;
