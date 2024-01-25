import React, { useEffect } from 'react';
import Body from '../conponents/affiliates/Body';
import Footer from '../conponents/affiliates/Footer';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isAgreedAtom, salesInfoAtom } from '../states/affiliates';
import TabBar from '../conponents/TabBar';
import { postSalesInfo } from '../services/affiliates/postSalesInfo';
import { useParams } from 'react-router-dom';
import HeaderLayout from '../conponents/layout/HeaderLayout';

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
          deadline: res.deadline,
        }));
      });
  }, []);
  return (
    <div>
      <HeaderLayout text={isAgreed ? '' : '홍보 주의사항'} />
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
