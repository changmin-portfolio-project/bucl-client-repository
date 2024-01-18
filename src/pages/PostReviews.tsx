import React from 'react';
import Body from '../conponents/postReview/Body';
import { useRecoilValue } from 'recoil';
import { completeBooleanAtom } from '../states/postReviewAtom';
import TabBar from '../conponents/TabBar';
import Complete from '../conponents/postReview/Complete';
import HeaderLayout from '../conponents/layout/HeaderLayout';

const PostReviewsPage: React.FC = () => {
  const completeBoolean = useRecoilValue(completeBooleanAtom);
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
