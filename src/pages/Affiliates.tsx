import React, { useEffect } from 'react';
import Body from '../conponents/affiliates/Body';
import Header from '../conponents/affiliates/Header';
import Footer from '../conponents/affiliates/Footer';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isAgreedAtom, salesInfoAtom } from '../states/affiliates';
import TabBar from '../conponents/TabBar';
import { postSalesInfo } from '../services/affiliates/postSalesInfo';
import { useParams } from 'react-router-dom';

const AffiliatesPage: React.FC = () => {
  const param = useParams();
  const isAgreed = useRecoilValue(isAgreedAtom);

  const setSalesInfo = useSetRecoilState(salesInfoAtom);
  useEffect(() => {
    if (param.product_code)
      postSalesInfo(param.product_code).then((res) => {
        setSalesInfo((prev) => ({
          ...prev,
          affiliateUrl: res.affiliateUrl,
          brandName: res.brandName,
          imagePath: res.imagePath,
          name: res.name,
          reward: res.reward,
        }));
      });
  }, []);
  return (
    <div>
      <Header />
      {isAgreed ? (
        <>
          <Body />
          <TabBar />
        </>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default AffiliatesPage;
