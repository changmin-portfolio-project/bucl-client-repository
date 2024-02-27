import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ColoredButton from '../../ColoredButton';
import { useCookies } from 'react-cookie';
import {
  addrDetailAtom,
  isAdressSelectPageAtom,
  isNewOrdAddrAtom,
  ordAddrAtom,
} from '../../../states/orderAtom';
import {
  ADDR,
  ADDR_NOM,
  CNTCT_NUM,
  RCPNT_NOM,
  ZIP_CODE,
} from '../../../const/CookieVars';

const OrdAddrSelectButton: React.FC = () => {
  const [, setCookie] = useCookies();
  const ordAddr = useRecoilValue(ordAddrAtom);
  const setAddrDetail = useSetRecoilState(addrDetailAtom);
  const setIsAddressSelectPage = useSetRecoilState(isAdressSelectPageAtom);
  const setIsNewOrdAddrAtom = useSetRecoilState(isNewOrdAddrAtom);

  const addressAddBtnOnClick = () => {
    setIsNewOrdAddrAtom(false);

    setCookie(ADDR_NOM, ordAddr.shippingAddressNam);
    setCookie(RCPNT_NOM, ordAddr.recipientName);
    setCookie(CNTCT_NUM, ordAddr.contactNum);
    setCookie(ADDR, ordAddr.address);
    setAddrDetail(ordAddr.detailAddress);
    setCookie(ZIP_CODE, ordAddr.zipCode);

    console.log(ordAddr.address, ordAddr.detailAddress);

    setIsAddressSelectPage(false);
  };

  const ColoredButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 0',
  };
  return (
    <AddressEditBtnContainer>
      <ColoredButton
        style={ColoredButtonStyle}
        color="white"
        font="Subhead2"
        onClick={addressAddBtnOnClick}
      >
        선택 완료
      </ColoredButton>
    </AddressEditBtnContainer>
  );
};

const AddressEditBtnContainer = styled.div`
  padding-bottom: 10px;
`;

export default OrdAddrSelectButton;
