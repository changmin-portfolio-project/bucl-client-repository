import React, { useState, useEffect } from 'react';
import styled, { CSSProperties } from 'styled-components';
import ReviewItem from '../../ReviewItem';
import PhotoPreview from './PhotoPreview';
import {
  ImageData,
  getPhotoReview,
} from '../../../services/productDetail/getPhotoReview';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextButton from '../../TextButton';
import { useRecoilValue } from 'recoil';
import { productDetailAtom } from '../../../states/productDetailAtom';

const PurchaseReview: React.FC = () => {
  const params = useParams();

  const [imgList, setImgList] = useState<ImageData[]>();
  const productDetail = useRecoilValue(productDetailAtom);

  useEffect(() => {
    if (params.product_code)
      getPhotoReview(params.product_code).then((res) => {
        setImgList(res.data);
      });
  }, []);

  const PurchaseReviewStyle: CSSProperties = {
    padding: 0,
  };
  return (
    <PurchaseReviewContainer>
      <TitleAllBtnBox>
        <TitleText>구매 후기</TitleText>
        {productDetail.reviewPreviews &&
          productDetail.reviewPreviews.length > 0 && (
            <TextButton style={PurchaseReviewStyle}>
              <Link
                to={`/products/${params.product_code}/reviews`}
                state={{
                  totalReviewCount: productDetail.totalReviewCount,
                  averageRating: productDetail.averageRating,
                }}
              >
                리뷰 전체보기
              </Link>
            </TextButton>
          )}
      </TitleAllBtnBox>
      {productDetail.reviewPreviews &&
      productDetail.reviewPreviews.length > 0 ? (
        <>
          <PhotoPreview
            averageRating={productDetail.averageRating}
            totalReviewCount={productDetail.totalReviewCount}
            imgList={imgList}
          />
          <div>
            {productDetail.reviewPreviews?.map((v, i) => (
              <ReviewItem
                key={i}
                imgPath={v.reviewImage}
                starRate={v.reviewRate}
                userImg={v.profilePath}
                nickname={v.nickname}
                reviewDate={v.reviewDate}
                content={v.content}
              />
            ))}
          </div>
        </>
      ) : (
        <ExceptionText>
          아직 후기가 없는 신상품입니다.
          <br /> 구매 완료 후 가장 먼저 후기를 작성해주세요!
        </ExceptionText>
      )}
    </PurchaseReviewContainer>
  );
};

const PurchaseReviewContainer = styled.div`
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;

const TitleAllBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.paddings.base} 8px
    ${({ theme }) => theme.paddings.base};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;
const TitleText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

const ExceptionText = styled.p`
  padding: 30px 0;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey5};
`;

export default PurchaseReview;
