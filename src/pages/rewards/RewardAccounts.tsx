import React from 'react';
import Body from '../../conponents/account/Body';
import Header from '../../conponents/account/Header';
import TabBar from '../../conponents/TabBar';
import Complete from '../../conponents/account/Complete';
import { useRecoilValue } from 'recoil';
import { completeBooleanAtom } from '../../states/accountAtom';
// import Footer from '../../conponents/account/Footer';

const RewardAccountsPage: React.FC = () => {
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
          {' '}
          <Header />
          <Body />
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default RewardAccountsPage;
