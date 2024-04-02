import React, { useEffect } from 'react';
import styled from 'styled-components';
import AddressAddButton from './body/AddressAddButton';
import AddressList from './body/AddressList';
import DefaultCheckBox from './body/DefaultCheckBox';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  currentAddressNumAtom,
  addrRegFormAtom,
  isDefaultAddressAtom,
  addressListAtom,
} from '../../../states/addressAtom';
import AddressEditButton from './body/AddressEditButton';
import {
  CRNT_ADDR_NUM_IS_ZERO,
  USER_SHP_ADDR_NUM,
} from '../../../const/AddressVar';

const Body: React.FC = () => {
  const resetAddrRegForm = useResetRecoilState(addrRegFormAtom);
  const resetIsDefaultAddress = useResetRecoilState(isDefaultAddressAtom);

  const [currentAddressNum, setCurrentAddressNum] = useRecoilState(
    currentAddressNumAtom,
  );

  const addressList = useRecoilValue(addressListAtom);

  useEffect(() => {
    setCurrentAddressNum(CRNT_ADDR_NUM_IS_ZERO);
    resetAddrRegForm();
    resetIsDefaultAddress();
  }, []);

  return (
    <BodyContainer
      onClick={() => {
        setCurrentAddressNum(CRNT_ADDR_NUM_IS_ZERO);
        resetIsDefaultAddress();
        resetAddrRegForm();
      }}
    >
      <AddressList />
      <StyleRegWrap onClick={(e) => e.stopPropagation()}>
        {currentAddressNum ? <DefaultCheckBox /> : null}
        {currentAddressNum ? (
          <AddressEditButton />
        ) : (
          <>{addressList.length < USER_SHP_ADDR_NUM && <AddressAddButton />}</>
        )}
      </StyleRegWrap>
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 6%;
  height: calc(100vh - 80px);
`;

const StyleRegWrap = styled.div`
  margin-bottom: 10%;
`;

export default Body;
