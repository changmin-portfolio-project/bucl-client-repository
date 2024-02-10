import React from 'react';
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
import ColoredButton from '../../ColoredButton';

const PostConfirmButton: React.FC = () => {
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

  const ColoredButtonStyle: React.CSSProperties = {
    marginTop: '10px',
  };
  return (
    <ColoredButton
      font="Subhead2"
      color="white"
      style={ColoredButtonStyle}
      onClick={comfirmBtnOnClick}
    >
      리뷰 작성 완료
    </ColoredButton>
  );
};

export default PostConfirmButton;
