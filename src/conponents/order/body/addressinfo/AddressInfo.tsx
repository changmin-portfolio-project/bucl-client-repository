import React, { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import AddressInfoChange from './AddressInfoChange';
import AddressInfoReq from './AddressInfoReq';
import { useRecoilState } from 'recoil';

import OrdAddrAddButton from '../../../orderAddressSelect/body/OrdAddrAddButton';
import OrderAddrRegister from '../../../orderAddressSelect/body/OrderAddrRegister';
import { getAddressList } from '../../../../services/address/getAddressList';
import { addressListAtom } from '../../../../states/addressAtom';
import { USER_SHP_ADDR_NUM } from '../../../../const/AddressVar';
import AddressSearchPopup from '../../../AddressSearchPopup';
import { OrderPaymentType } from '../../../../global/interface/OrderInterface';
import {
  ORD_PAY_DATA,
  TRUE_STRING,
} from '../../../../const/SessionStorageVars';
import { ordPayDataAtom } from '../../../../states/orderAtom';

const AddressInfo: React.FC = () => {
  /** 바꿈 */
  const [ordPayDataState, setOrdPayDataSate] = useRecoilState(ordPayDataAtom);

  const [addressList, setAddressList] = useRecoilState(addressListAtom);

  useEffect(() => {
    getAddressList().then((res) => {
      setAddressList(res);
    });
  }, []);

  const handleAddrDetail = (event: ChangeEvent<HTMLInputElement>) => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.addrDetail = event.target.value;
    setOrdPayDataSate(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };

  const isNewAddr: boolean =
    ordPayDataState.isNewAddr === TRUE_STRING ? true : false;

  return (
    <StyledAddressInfoContainer>
      <AddressInfoChange />
      <StyledAddressInfo>
        {isNewAddr ? (
          <>
            <OrderAddrRegister />
            <AddressSearchPopup />
          </>
        ) : (
          <ExitAddrWrap>
            <AddressInfoSubhead1>
              {ordPayDataState.shippingAddressName}
            </AddressInfoSubhead1>
            <AddressInfoBody2>
              {ordPayDataState.rcpntNom} {ordPayDataState.cntctNum}
            </AddressInfoBody2>
            <AddressInfoDetail>{ordPayDataState.addr}</AddressInfoDetail>
            <AddressInfoDetailInput
              placeholder="상세 주소를 작성해 주세요."
              onChange={handleAddrDetail}
              value={ordPayDataState.addrDetail}
            />
            {addressList.length < USER_SHP_ADDR_NUM && (
              <OrdAddrAddButtonWrap>
                <OrdAddrAddButton />
              </OrdAddrAddButtonWrap>
            )}
          </ExitAddrWrap>
        )}
      </StyledAddressInfo>
      <AddressInfoReq />
    </StyledAddressInfoContainer>
  );
};

const StyledAddressInfoContainer = styled.div``;

const StyledAddressInfo = styled.div`
  border-bottom: 1px solid #eaecef;
`;

const AddressInfoDetailInput = styled.input`
  font: ${({ theme }) => theme.fontSizes.Body2};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey.Grey5};

  width: 100%;
  box-sizing: border-box;
  height: 36px;
  flex-shrink: 0;
  padding: 20px 0 20px 13px;
  margin-top: 3px;

  &:focus {
    outline: none;
  }
`;

const AddressInfoSubhead1 = styled.div`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  font-weight: 200;
  color: ${({ theme }) => theme.grey.Grey8};
  padding: 10px 0 8px 0;
`;

const AddressInfoBody2 = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  padding-bottom: 2px;
  color: ${({ theme }) => theme.grey.Grey8};
`;
const AddressInfoDetail = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  padding-bottom: 8px;
  color: ${({ theme }) => theme.grey.Grey8};
`;

const OrdAddrAddButtonWrap = styled.div`
  margin-top: 11px;
`;

const ExitAddrWrap = styled.div`
  padding: 0 20px 20px 20px;
`;

export default AddressInfo;
