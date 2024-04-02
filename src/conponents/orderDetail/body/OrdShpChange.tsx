import React, { useEffect } from 'react';
import styled from 'styled-components';
// import PhoneNumInput from './PhoneNumInput';
import { useRecoilState, useRecoilValue } from 'recoil';
import { orderInfoAtom, shpAddrRegAtom } from '../../../states/orderDetailAtom';
import AddressSearchButton from '../../AddressSearchButton';
import OrdDetailPhoneNumInput from './OrderDetailPhoneNumInput';
import {
  ADDR_DETAIL_PLACE_HODER,
  ADDR_PLACE_HODER,
  RECIPIENT_NAME_PLACE_HOLDER,
} from '../../../const/AttributeVar';

const OrdShpChange: React.FC = () => {
  const orderInfo = useRecoilValue(orderInfoAtom);
  const [shpAddrReg, setShpAddrReg] = useRecoilState(shpAddrRegAtom);

  useEffect(() => {
    setShpAddrReg((prev) => ({
      ...prev,
      recipientName: orderInfo.shpAddrDto.recipientName,
      zipCode: orderInfo.shpAddrDto.zipCode,
      address: orderInfo.shpAddrDto.address,
      addressDetail: orderInfo.shpAddrDto.addressDetail,
      contactNumber: orderInfo.shpAddrDto.contactNumber,
    }));
  }, []);

  const recipientNameOnChange = (text: string) => {
    setShpAddrReg((prev) => ({
      ...prev,
      recipientName: text,
    }));
  };
  const detailAddressOnChange = (text: string) => {
    setShpAddrReg((prev) => ({
      ...prev,
      addressDetail: text,
    }));
  };

  const setAddrInfo = (address: string, zipCode: string) => {
    setShpAddrReg((prev) => ({
      ...prev,
      zipCode: zipCode,
      address: address,
    }));
  };

  return (
    <EditRegisterContainer>
      <Box>
        <Title>받는 사람</Title>
        <Input
          value={shpAddrReg.recipientName}
          onChange={(e) => recipientNameOnChange(e.target.value)}
          placeholder={RECIPIENT_NAME_PLACE_HOLDER}
        />
      </Box>
      <PhoneBox>
        <Title>핸드폰 번호</Title>
        <OrdDetailPhoneNumInput />
      </PhoneBox>
      <Box>
        <Title>주소</Title>
        <Input
          value={shpAddrReg.address}
          placeholder={ADDR_PLACE_HODER}
          disabled
        />
        <AddressSearchButton setAddrInfo={setAddrInfo} />
      </Box>
      <Box>
        <Title>상세 주소</Title>
        <Input
          value={shpAddrReg.addressDetail}
          onChange={(e) => detailAddressOnChange(e.target.value)}
          placeholder={ADDR_DETAIL_PLACE_HODER}
        />
      </Box>
    </EditRegisterContainer>
  );
};

const EditRegisterContainer = styled.section`
  padding-top: 80px;
`;

const Box = styled.div`
  padding-bottom: 15px;
`;
const Title = styled.p`
  padding-bottom: 5px;
  font: ${({ theme }) => theme.fontSizes.Body3};
`;
const Input = styled.input`
  padding: 10px;
  width: calc(100% - 20px);
  font: ${({ theme }) => theme.fontSizes.Body2};
  border: 1px solid ${({ theme }) => theme.grey.Grey5};
  border-radius: 4px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.grey.Grey5};
  }
  font-family: Pretendard-Light;
  font-weight: 400;
`;

const PhoneBox = styled(Box)``;

export default OrdShpChange;
