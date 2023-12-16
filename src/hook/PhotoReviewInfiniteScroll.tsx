import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import { pageNumAtom, photoReviewListAtom } from '../states/photoReviewAtom';
import {
  ImageData,
  getPhotoReviewList,
} from '../services/photoReview/getPhotoReviewList';

const PhotoReviewInfiniteScroll: React.FC = () => {
  const param = useParams();

  const [phtoReviewPageNum, setReviewPageNum] = useRecoilState(pageNumAtom);
  const setPhotoReviewList =
    useSetRecoilState<ImageData[]>(photoReviewListAtom);

  const [ref, inView] = useInView();

  const callback = () => {
    if (param.product_code)
      getPhotoReviewList(param.product_code, phtoReviewPageNum).then((res) => {
        console.log(res);
        setPhotoReviewList((prev) => [...prev, ...res.data]);
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

export default PhotoReviewInfiniteScroll;
