import React from 'react';
import Body from '../conponents/postReview/Body';
import Header from '../conponents/postReview/Header';
import { useRecoilValue } from 'recoil';
import { completeBooleanAtom } from '../states/postReviewAtom';
import TabBar from '../conponents/TabBar';
import Complete from '../conponents/postReview/Complete';

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
          <Header />
          <Body />
        </>
      )}
    </div>
  );
};

export default PostReviewsPage;
