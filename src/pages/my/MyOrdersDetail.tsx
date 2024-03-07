import React, { useEffect } from 'react';
import Header from '../../conponents/orderDetail/Header';
import Body from '../../conponents/orderDetail/Body';
import OrdShpChangeBody from '../../conponents/orderDetail/body/OrdShpChangeBody';
import { ordShpChangeModeAtom } from '../../states/orderDetailAtom';
import { useRecoilState } from 'recoil';
import HeaderLayout from '../../conponents/layout/HeaderLayout';

const MyOrdersDetailPage: React.FC = () => {
  const [ordShpChangeMode, setOrdShpChangeMode] =
    useRecoilState(ordShpChangeModeAtom);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      {!ordShpChangeMode ? (
        <div>
          <Header />
          <Body />
        </div>
      ) : (
        <div>
          <HeaderLayout text="배송지 수정" setFunction={setOrdShpChangeMode} />
          <OrdShpChangeBody />
        </div>
      )}
    </>
  );
};

export default MyOrdersDetailPage;
