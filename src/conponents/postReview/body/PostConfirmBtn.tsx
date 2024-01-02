import React from 'react';
import styled from 'styled-components';
import {
  completeBooleanAtom,
  reviewImgListAtom,
  reviewTextAtom,
  starNumAtom,
} from '../../../states/postReviewAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { REVIEW_TEXT_MIN_NUM } from '../../../const/Review';
import { postReview } from '../../../services/postReview/postReview';
import { useParams } from 'react-router-dom';

const PostConfirmBtn: React.FC = () => {
  const param = useParams();
  const setCompleteBoolean = useSetRecoilState(completeBooleanAtom);
  const starNum = useRecoilValue(starNumAtom);
  const reviewText = useRecoilValue(reviewTextAtom);
  const reviewImgList = useRecoilValue(reviewImgListAtom);

  const comfirmBtnOnClick = () => {
    if (reviewText.length >= REVIEW_TEXT_MIN_NUM) {
      const formData = new FormData();
      const reviewRequest = {
        reviewContent: reviewText,
        starRate: starNum.toString(),
      };
      const reviewRequestBlob = new Blob([JSON.stringify(reviewRequest)], {
        type: 'application/json',
      });
      formData.append('reviewRequest', reviewRequestBlob);

      for (const reviewImg of reviewImgList) {
        formData.append('reviewImages', reviewImg);
      }
      postReview(formData, param.product_code as string)
        .then((res) => {
          console.log(res);
          setCompleteBoolean(true);
        })
        .catch((error) => {
          alert('에러가 났습니다.: ' + error);
          console.error(error);
        });
    } else {
      alert(REVIEW_TEXT_MIN_NUM + '글자 이상 적어 주세요.');
    }
  };
  return <ConfirmBtn onClick={comfirmBtnOnClick}>리뷰 작성 완료</ConfirmBtn>;
};

const ConfirmBtn = styled.button`
  margin-top: 10px;
  padding: 10px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: white;
`;

export default PostConfirmBtn;
