import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { reviewListAtom, reviewPageNumAtom } from '../states/reviewAtom';
import { useParams } from 'react-router-dom';
import { Review, getReviewList } from '../services/review/getReviewList';

const ReviewInfiniteScroll: React.FC = () => {
  const param = useParams();

  const [reviewPageNum, setReviewPageNum] = useRecoilState(reviewPageNumAtom);
  const setReviewList = useSetRecoilState<Review[]>(reviewListAtom);

  const [ref, inView] = useInView();

  const callback = () => {
    if (param.product_code)
      getReviewList(param.product_code, reviewPageNum).then((res) => {
        setReviewList((prev) => [...prev, ...res.reviews]);
        setReviewPageNum((prev) => prev + 1);
      });
  };
  useEffect(() => {
    if (inView) {
      console.log(inView, '무한 스크롤 요청 🎃'); // 실행할 함수
      callback();
    }
  }, [inView]);

  return <ScrollBottomContainer ref={ref}>무한 스크롤</ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div``;

export default ReviewInfiniteScroll;
