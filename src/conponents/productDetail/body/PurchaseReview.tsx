import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReviewItem from '../../ReviewItem';
import PhotoPreview from './PhotoPreview';
import { ReviewPreview } from '../../../services/productDetail/getProductInfo';
import {
  ImageData,
  getPhotoReview,
} from '../../../services/productDetail/getPhotoReview';
import { useParams } from 'react-router-dom';

interface PurchaseReviewProps {
  reviewList?: ReviewPreview[];
  averageRating?: number;
  totalReviewCount?: number;
}

const PurchaseReview: React.FC<PurchaseReviewProps> = ({
  reviewList,
  averageRating,
  totalReviewCount,
}) => {
  const params = useParams();
  console.log(reviewList);

  const [imgList, setImgList] = useState<ImageData[]>();

  useEffect(() => {
    if (params.product_code)
      getPhotoReview(params.product_code).then((res) => {
        setImgList(res.data);
      });
  }, []);
  return (
    <PurchaseReviewContainer>
      <TitleAllBtnBox>
        <TitleText>구매 후기</TitleText>
        <AllBtn>리뷰 전체보기</AllBtn>
      </TitleAllBtnBox>
      <PhotoPreview
        averageRating={averageRating}
        totalReviewCount={totalReviewCount}
        imgList={imgList}
      />
      {reviewList?.map((v, i) => (
        <ReviewItem
          key={i}
          nickname={v.nickname}
          profilePath={v.profilePath}
          imgPath={v.reviewImage}
          count={v.reviewRate}
          reviewDate={v.reviewDate}
          content={v.content}
        />
      ))}
    </PurchaseReviewContainer>
  );
};

const PurchaseReviewContainer = styled.div`
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;

const TitleAllBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 8px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;
const TitleText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;
const AllBtn = styled.button`
  background-color: transparent;
  border: none;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
  cursor: pointer;
`;

export default PurchaseReview;
