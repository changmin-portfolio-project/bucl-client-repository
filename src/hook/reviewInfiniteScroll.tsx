import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { reviewListAtom, reviewPageNumAtom } from '../states/reviewAtom';
import { useNavigate, useParams } from 'react-router-dom';
import { Review, getReviewList } from '../services/review/getReviewList';
import { BAD_REQUEST_PATH } from '../const/PathVar';

const ReviewInfiniteScroll: React.FC = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [reviewPageNum, setReviewPageNum] = useRecoilState(reviewPageNumAtom);
  const setReviewList = useSetRecoilState<Review[]>(reviewListAtom);

  const [ref, inView] = useInView();

  const callback = () => {
    if (param.product_code)
      getReviewList(param.product_code, reviewPageNum)
        .then((res) => {
          setReviewList((prev) => [...prev, ...res.reviews]);
          setReviewPageNum((prev) => prev + 1);
        })
        .catch(() => {
          navigate(BAD_REQUEST_PATH);
        });
  };
  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [inView]);

  return <ScrollBottomContainer ref={ref}></ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div``;

export default ReviewInfiniteScroll;
