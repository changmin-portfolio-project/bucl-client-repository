import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrdBody from '../../conponents/order/Body';
import OrdAddrBody from '../../conponents/orderAddressSelect/Body';
import HeaderLayout from '../../conponents/layout/HeaderLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  addrDetailAtom,
  isAdressSelectPageAtom,
  isNewOrdAddrAtom,
} from '../../states/orderAtom';
import { useCookies } from 'react-cookie';
import { getReward } from '../../services/reward/getReward';
import { getAddressDefault } from '../../services/address/getAddressDefault';
import {
  ADDR,
  ADDR_NOM,
  CNTCT_NUM,
  RCPNT_NOM,
  RWD_CRNT_AMT,
  ZIP_CODE,
} from '../../const/CookieVars';
import { cookieNumUtil } from '../../utils/UndefinedProcessUtl';

const HomePage: React.FC = () => {
  const [isAddressSelectPage, setIsAddressSelectPage] = useRecoilState(
    isAdressSelectPageAtom,
  );
  const setIsNewOrdAddrAtom = useSetRecoilState(isNewOrdAddrAtom);
  const [, setCookie] = useCookies();
  const setAddrDetail = useSetRecoilState(addrDetailAtom);
  useEffect(() => {
    getReward()
      .then((res) => {
        if (res === undefined) {
          setCookie(RWD_CRNT_AMT, 0);
        } else {
          setCookie(RWD_CRNT_AMT, cookieNumUtil(res));
        }
      })
      .catch(() => {});

    getAddressDefault()
      .then((res) => {
        setCookie(ADDR_NOM, res.shippingAddressName);
        setCookie(RCPNT_NOM, res.recipientName);
        setCookie(CNTCT_NUM, res.contactNumber);
        setCookie(ADDR, res.address);
        setAddrDetail(res.addressDetail);
        setCookie(ZIP_CODE, res.zipCode);
        setIsNewOrdAddrAtom(false);
      })
      .catch(() => {
        setIsNewOrdAddrAtom(true);
      });

    window.scrollTo({ top: 0 });
    setIsAddressSelectPage(false);
  }, []);
  return (
    <Container>
      <>
        {isAddressSelectPage === true ? (
          <>
            <HeaderLayout
              text="배송지 관리"
              setFunction={setIsAddressSelectPage}
            />
            <OrdAddrBody />
          </>
        ) : (
          <>
            <HeaderLayout text="주문 / 결제" />
            <OrdBody />
          </>
        )}
      </>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default HomePage;
