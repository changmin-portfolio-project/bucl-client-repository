import React, { useEffect } from 'react';
import HeaderLayout from '../conponents/layout/HeaderLayout';
import { useParams } from 'react-router';
import Body from '../conponents/trackInfo/Body';

const OrdTrackInfoPage: React.FC = () => {
  const param = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div>
        <HeaderLayout text="배송 조회" to={param.order_code} />
        <Body />
      </div>
    </>
  );
};

export default OrdTrackInfoPage;
