import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { reviewTextAtom } from '../../../states/postReviewAtom';
import { CHAR_LIMIT_NUM } from '../../../const/Review';

const PostReviewInput: React.FC = () => {
  const [reviewText, setReviewText] = useRecoilState(reviewTextAtom);
  const reviewInputOnChange = (text: string) => {
    if (text.length <= CHAR_LIMIT_NUM) {
      setReviewText(text);
    }
  };
  return (
    <PostReviewInputContainer>
      <ReviewTextArea
        value={reviewText}
        onChange={(e) => reviewInputOnChange(e.target.value)}
        placeholder="다른 고객님에게 도움이 되도록 상품에 대한 평가를 남겨주세요. (상품 품질과 관계없는 배송, 포장, 질문 은 상품 가격등은 상품 문의란에 남겨주세요.)"
      />
      <TextCount>
        {reviewText.length}/{CHAR_LIMIT_NUM}자
      </TextCount>
    </PostReviewInputContainer>
  );
};

const PostReviewInputContainer = styled.section`
  textarea {
    padding: 10px;
    width: calc(100% - 20px);
    height: 20vh;
    border: 1px solid ${({ theme }) => theme.grey.Grey4};
    outline: none;
    font: ${({ theme }) => theme.fontSizes.Body2};
    &::placeholder {
      color: ${({ theme }) => theme.grey.Grey4};
    }
  }
`;
const TextCount = styled.p`
  text-align: right;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey4};
`;

const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 6.25em;
  border: none;
  resize: none;
`;

export default PostReviewInput;
