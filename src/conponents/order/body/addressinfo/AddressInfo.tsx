import React, { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import AddressInfoChange from './AddressInfoChange';
import AddressInfoReq from './AddressInfoReq';
import { Cookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import { addrDetailAtom } from '../../../../states/orderAtom';
import {
  ADDR,
  ADDR_NOM,
  CNTCT_NUM,
  RCPNT_NOM,
} from '../../../../const/CookieVars';

const AddressInfo: React.FC = () => {
  const cookies = new Cookies();
  const [addrDetail, setAddrDetail] = useRecoilState(addrDetailAtom);

  useEffect(() => {
    setAddrDetail('');
  }, []);

  const handleAddrDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddrDetail(event.target.value);
  };

  return (
    <StyledAddressInfoContainer>
      <AddressInfoChange />
      <StyledAddressInfo>
        <AddressInfoSubhead1>{cookies.get(ADDR_NOM)}</AddressInfoSubhead1>
        <AddressInfoBody2>
          {cookies.get(RCPNT_NOM)} {cookies.get(CNTCT_NUM)}
        </AddressInfoBody2>
        <AddressInfoBody2>{cookies.get(ADDR)}</AddressInfoBody2>
        <AddressInfoDetailInput
          placeholder="상세 주소를 작성해 주세요."
          onChange={handleAddrDetail}
          value={addrDetail}
        />
      </StyledAddressInfo>
      <AddressInfoReq />
    </StyledAddressInfoContainer>
  );
};

const StyledAddressInfoContainer = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #eaecef;
`;

const StyledAddressInfo = styled.div`
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #eaecef;
`;

const AddressInfoDetailInput = styled.input`
  font: ${({ theme }) => theme.fontSizes.Body2};
  border-radius: 4px;
  border: 1px solid var(--grey-5, #acb5bd);

  width: 100%;
  box-sizing: border-box;
  height: 36px;
  flex-shrink: 0;
  padding: 0px;
  padding-left: 13px;
  margin-top: 3px;

  &:focus {
    outline: none;
  }
`;

const AddressInfoSubhead1 = styled.div`
  font: ${({ theme }) => theme.fontSizes.Subhead1};
  padding: 10px 0 19px 0;
`;

const AddressInfoBody2 = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  padding-bottom: 2px;
`;

export default AddressInfo;
