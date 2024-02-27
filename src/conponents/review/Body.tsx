import React, { useEffect, useState } from 'react';
import ReviewItem from '../ReviewItem';
import PhotoPreview from '../productDetail/body/PhotoPreview';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ImageData,
  getPhotoReview,
} from '../../services/productDetail/getPhotoReview';
import { useRecoilValue } from 'recoil';
import { reviewListAtom } from '../../states/reviewAtom';
import ReviewInfiniteScroll from '../../hook/reviewInfiniteScroll';
import BodyLayout from '../layout/BodyLayout';
import { getAvgReview } from '../../services/review/getAvgReview';

const Body: React.FC = () => {
  const param = useParams();
  const navigate = useNavigate();
  const reviewItemStyle: React.CSSProperties = {
    flexDirection: 'column',
  };
  const imgStyle: React.CSSProperties = {
    display: 'block',
  };

  const reviewList = useRecoilValue(reviewListAtom);
  const [imgList, setImgList] = useState<ImageData[]>();
  const [averageRating, setAverageRating] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);
  useEffect(() => {
    if (param.product_code) {
      getPhotoReview(param.product_code)
        .then((res) => {
          setImgList(res.data);
        })
        .catch(() => {
          navigate('/bad-requests');
        });

      getAvgReview(param.product_code).then((res) => {
        setAverageRating(res.averageRating);
        setReviewCount(res.reviewCount);
      });
    }
  }, []);

  return (
    <BodyLayout>
      <PhotoPreview
        averageRating={averageRating}
        totalReviewCount={reviewCount}
        imgList={imgList}
      />
      {reviewList?.map((v, i) => (
        <ReviewItem
          style={reviewItemStyle}
          imageStyle={imgStyle}
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
