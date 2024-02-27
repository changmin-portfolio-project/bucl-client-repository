import axios from 'axios';

interface ReviewImgsProp {
  data: File;
}

// 리뷰 사진 미리보기 가져오기
export const getReviewImgDownload = (
  reviewImageUrl: string,
): Promise<ReviewImgsProp> => {
  return axios.get(reviewImageUrl, {
    responseType: 'blob', // 응답 형식을 blob으로 설정합니다.
  });
};
