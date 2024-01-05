import React from 'react';
import styled from 'styled-components';
import AddressAddBtn from './body/AddressAddBtn';
import AddressList from './body/AddressList';
import DefaultCheckBox from './body/DefaultCheckBox';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentAddressNumAtom,
  addrRegFormAtom,
  isDefaultAddressAtom,
} from '../../../states/addressAtom';
import AddressEditBtn from './body/AddressEditBtn';

const Body: React.FC = () => {
  const [currentAddressNum, setCurrentAddressNum] = useRecoilState(
    currentAddressNumAtom,
  );
  const setAddrRegForm = useSetRecoilState(addrRegFormAtom);
  const setIsDefaultAddress = useSetRecoilState(isDefaultAddressAtom);

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
        {currentAddressNum ? <AddressEditBtn /> : <AddressAddBtn />}
      </StyleRegWrap>
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 6% 72px 6%;
  height: calc(100vh - 132px);
`;

const StyleRegWrap = styled.div`
  margin-bottom: 10%;
`;

export default Body;
