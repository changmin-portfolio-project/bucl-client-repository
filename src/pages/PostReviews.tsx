import React, { useEffect } from 'react';
import Body from '../conponents/postReview/Body';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  completeBooleanAtom,
  imageUrlListAtom,
  postReviewProductInfoAtom,
  reviewTextAtom,
  starNumAtom,
} from '../states/postReviewAtom';
import TabBar from '../conponents/TabBar';
import Complete from '../conponents/postReview/Complete';
import HeaderLayout from '../conponents/layout/HeaderLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { getReviewInfo } from '../services/postReview/getProductInfo';

const PostReviewsPage: React.FC = () => {
  const [completeBoolean, setCompleteBoolean] =
    useRecoilState(completeBooleanAtom);

  const navigate = useNavigate();
  const param = useParams();
  const setProductInfo = useSetRecoilState(postReviewProductInfoAtom);
  const setStarCount = useSetRecoilState(starNumAtom);
  const setReviewText = useSetRecoilState(reviewTextAtom);
  const setImageUrls = useSetRecoilState(imageUrlListAtom);
  // const setReviewImgList = useSetRecoilState(reviewImgListAtom);

  // const [deliveryDate, setDeliveryDate] = useState('');

  useEffect(() => {
    setCompleteBoolean(false);
    if (param.order_code) {
      getReviewInfo(param.order_code)
        .then((res) => {
          setProductInfo((prev) => ({
            ...prev,
            productCode: res.productCode,
            brandName: res.brandName,
            name: res.name,
            imagePath: res.imagePath,
            createdAt: res.createdAt,
          }));
          setStarCount(res.starRate);
          setReviewText(res.reviewText);
          setImageUrls(res.reviewImages);

          // for (const reviewImageUrl of res.reviewImages) {
          //   /** 나중에 서버 url 생성시 넣어야 됨 **/
          //   getReviewImgDownload(reviewImageUrl).then((res) => {
          //     const reviewImgFile = new File([res.data], reviewImageUrl, {
          //       type: 'image/png',
          //     });

          //     setReviewImgList((prev) => [...prev, reviewImgFile]);
          //   });
          // }
        })
        .catch(() => {
          navigate('/bad-requests');
        });
    }
  }, []);
  return (
    <div>
      {completeBoolean ? (
        <>
          <Complete />
          <TabBar />
        </>
      ) : (
        <>
          <HeaderLayout text="리뷰 작성" />
          <Body />
        </>
      )}
    </div>
  );
};

export default PostReviewsPage;
