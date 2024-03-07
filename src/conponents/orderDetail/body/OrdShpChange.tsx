import React, { useEffect } from 'react';
import styled from 'styled-components';
// import PhoneNumInput from './PhoneNumInput';
import { useRecoilState, useRecoilValue } from 'recoil';
import { orderInfoAtom, shpAddrRegAtom } from '../../../states/orderDetailAtom';
import AddressSearchButton from '../../AddressSearchButton';
import PhoneNumInput from './PhoneNumInput';

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
  return (
    <EditRegisterContainer>
      <Box>
        <Title>받는 사람</Title>
        <Input
          value={shpAddrReg.recipientName}
          onChange={(e) => recipientNameOnChange(e.target.value)}
          placeholder="이름을 적어주세요."
        />
      </Box>
      <PhoneBox>
        <Title>핸드폰 번호</Title>
        <PhoneNumInput />
      </PhoneBox>
      <Box>
        <Title>주소</Title>
        <Input value={shpAddrReg.address} placeholder="주소" disabled />
        <AddressSearchButton setAddrForm={setShpAddrReg} />
      </Box>
      <Box>
        <Title>상세 주소</Title>
        <Input
          value={shpAddrReg.addressDetail}
          onChange={(e) => detailAddressOnChange(e.target.value)}
          placeholder="상세 주소를 입력해주세요."
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
`;

const PhoneBox = styled(Box)`
  select,
  input {
    padding: 10px;
    width: calc(32% - 20px);
    text-align: center;
    font: ${({ theme }) => theme.fontSizes.Body2};
    border: 1px solid ${({ theme }) => theme.grey.Grey5};
    border-radius: 4px;
    outline: none;
  }
`;

export default OrdShpChange;
