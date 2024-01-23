import React, { useEffect } from 'react';
import styled from 'styled-components';
import AddressInfo from './body/addressinfo/AddressInfo';
import OrderPoint from './body/orderpoint/OrderPoint';
import OrderPayment from './body/OrderPayment/OrderPayment';
import OrderProduct from './body/OrderProduct/OrderProduct';
import { useCookies } from 'react-cookie';
import { getReward } from '../../services/reward/getReward';
import {
  ADDR,
  ADDR_NOM,
  CNTCT_NUM,
  RCPNT_NOM,
  PROCT_CODE,
  SKU_CODE,
  ZIP_CODE,
  RWD_CRNT_AMT,
} from '../../const/CookieVars';
import { cookieNumUtil } from '../../utils/UndefinedProcessUtl';

const Body: React.FC = () => {
  const [, setCookie] = useCookies();
  useEffect(() => {
    getReward().then((res) => {
      if (res === undefined) {
        setCookie(RWD_CRNT_AMT, 0);
      } else {
        setCookie(RWD_CRNT_AMT, cookieNumUtil(res));
      }
    });
    setCookie(ADDR_NOM, '집');
    setCookie(RCPNT_NOM, '황주현');
    setCookie(CNTCT_NUM, '010-0000-000');
    setCookie(
      ADDR,
      '경기도 수원시 영통구 광교호수공원로 20 더샵레이크시티 오피스텔',
    );
    setCookie(ZIP_CODE, '54402');
    setCookie(PROCT_CODE, '381285902143');
    setCookie(SKU_CODE, 38492219056);
  }, []);
  return (
    <BodyContainer>
      <AddressInfo />
      <OrderProduct />
      <OrderPoint />
      <OrderPayment />
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  align-items: center;
  width: 100%;
  padding: 80px 0 39px 0;
`;

export default Body;
