import React, { useEffect, useState } from 'react';
import ReviewItem from '../ReviewItem';
import PhotoPreview from '../productDetail/body/PhotoPreview';
import { useLocation, useParams } from 'react-router-dom';
import {
  ImageData,
  getPhotoReview,
} from '../../services/productDetail/getPhotoReview';
import { useRecoilState } from 'recoil';
import { reviewListAtom } from '../../states/reviewAtom';
import ReviewInfiniteScroll from '../../hook/reviewInfiniteScroll';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  const location = useLocation();
  const param = useParams();
  const reviewItemStyle: React.CSSProperties = {
    flexDirection: 'column',
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reviewList, setReviewList] = useRecoilState(reviewListAtom);
  const [imgList, setImgList] = useState<ImageData[]>();
  useEffect(() => {
    if (param.product_code) {
      getPhotoReview(param.product_code).then((res) => {
        setImgList(res.data);
      });
    }
  }, []);
  return (
    <BodyLayout>
      <PhotoPreview
        averageRating={location.state.averageRating}
        totalReviewCount={location.state.totalReviewCount}
        imgList={imgList}
      />
      {reviewList?.map((v, i) => (
        <ReviewItem
          style={reviewItemStyle}
          key={i}
          nickname={v.nickname}
          starRate={v.starRate}
          userImg={v.profilePath}
          imgPath={v.reviewImages}
          content={v.reviewText}
          selectedOption={v.selectedOption}
          reviewDate={v.reviewDate}
        />
      ))}
      <ReviewInfiniteScroll />
    </BodyLayout>
  );
};

export default Body;
