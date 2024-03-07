import React, { useEffect } from 'react';
import Body from '../../conponents/account/Body';
import Header from '../../conponents/account/Header';
import TabBar from '../../conponents/TabBar';
import Complete from '../../conponents/account/Complete';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  accountNumAtom,
  bankerNameAtom,
  completeBooleanAtom,
} from '../../states/accountAtom';
// import Footer from '../../conponents/account/Footer';

const RewardAccountsPage: React.FC = () => {
  const [completeBoolean, setCompleteBoolean] =
    useRecoilState(completeBooleanAtom);
  const setAccountNum = useSetRecoilState(accountNumAtom);
  const setBankerName = useSetRecoilState(bankerNameAtom);

  useEffect(() => {
    setCompleteBoolean(false);
    setAccountNum('');
    setBankerName('');
    window.scrollTo({ top: 0 });
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
