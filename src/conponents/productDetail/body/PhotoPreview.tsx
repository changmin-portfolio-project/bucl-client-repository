import React from 'react';
import styled from 'styled-components';
import Star from '../../Star';
import ReviewImgItem from '../../ReviewImgItem';
import { ImageData } from '../../../services/productDetail/getPhotoReview';

interface PhotoPreviewProps {
  averageRating?: number;
  totalReviewCount?: number;
  imgList?: ImageData[];
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({
  averageRating,
  totalReviewCount,
  imgList,
}) => {
  const ReviewImgItemStyle: React.CSSProperties = {
    width: 'calc(20% - 4px)',
  };
  return (
    <PhotoPreviewContainer>
      <ReviewRatingBox>
        <Star count={averageRating ? averageRating : 0} />
        <AverageRating>{averageRating}</AverageRating>
        <TotalReviewCount>({totalReviewCount})</TotalReviewCount>
      </ReviewRatingBox>
      <ReviewPhotoPreviewBox>
        {imgList &&
          imgList
            .slice(0, 5)
            .map((v, i) => (
              <ReviewImgItem
                key={i}
                style={ReviewImgItemStyle}
                dotBoolean={imgList.length > 5 && i === 4}
                imgPath={v.imagePath}
              />
            ))}
      </ReviewPhotoPreviewBox>
    </PhotoPreviewContainer>
  );
};

const PhotoPreviewContainer = styled.div`
  padding: 7px ${({ theme }) => theme.paddings.base};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const ReviewRatingBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
const AverageRating = styled.span`
  margin: 0 5px -2px 5px;
  font: ${({ theme }) => theme.fontSizes.Subhead3};
`;
const TotalReviewCount = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const ReviewPhotoPreviewBox = styled.div`
  display: flex;
  padding: 10px 0;
`;

export default PhotoPreview;
