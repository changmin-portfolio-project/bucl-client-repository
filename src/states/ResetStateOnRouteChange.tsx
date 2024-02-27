import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { productDetailAtom } from './productDetailAtom';
import { useResetRecoilState } from 'recoil';
import {
  imageUrlListAtom,
  reviewImgListAtom,
  reviewTextAtom,
  starNumAtom,
} from './postReviewAtom';

const ResetStateOnRouteChange: React.FC = () => {
  const location = useLocation();
  const resetProductDetailState = useResetRecoilState(productDetailAtom);
  const resetStarNumState = useResetRecoilState(starNumAtom);
  const resetReviewTextState = useResetRecoilState(reviewTextAtom);
  const resetImageUrlListState = useResetRecoilState(imageUrlListAtom);
  const resetReviewImgListState = useResetRecoilState(reviewImgListAtom);

  useEffect(() => {
    const unlisten = () => {
      resetProductDetailState();
      resetStarNumState();
      resetReviewTextState();
      resetImageUrlListState();
      resetReviewImgListState();
    };
    return unlisten;
  }, [location, resetProductDetailState]);

  return null;
};

export default ResetStateOnRouteChange;
