import React, { useEffect } from 'react';
import styled from 'styled-components';
import AddressAddButton from './body/AddressAddButton';
import AddressList from './body/AddressList';
import DefaultCheckBox from './body/DefaultCheckBox';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentAddressNumAtom,
  addrRegFormAtom,
  isDefaultAddressAtom,
} from '../../../states/addressAtom';
import AddressEditButton from './body/AddressEditButton';

const Body: React.FC = () => {
  const [currentAddressNum, setCurrentAddressNum] = useRecoilState(
    currentAddressNumAtom,
  );
  const setAddrRegForm = useSetRecoilState(addrRegFormAtom);
  const setIsDefaultAddress = useSetRecoilState(isDefaultAddressAtom);

  useEffect(() => {
    setCurrentAddressNum(0);
  }, []);

  return (
    <BodyContainer
      onClick={() => {
        setCurrentAddressNum(0);
        setIsDefaultAddress(false);
        setAddrRegForm({
          recipientName: '',
          locationName: '',
          address: '',
          detailAddress: '',
          firstPhoneNum: '010',
          middlePhoneNum: '',
          lastPhoneNum: '',
          zipCode: '',
        });
      }}
    >
      <AddressList />
      <StyleRegWrap onClick={(e) => e.stopPropagation()}>
        {currentAddressNum ? <DefaultCheckBox /> : null}
        {currentAddressNum ? <AddressEditButton /> : <AddressAddButton />}
      </StyleRegWrap>
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 6% 72px 6%;
  height: calc(100vh - 32px);
`;

const StyleRegWrap = styled.div`
  margin-bottom: 10%;
`;

export default Body;
