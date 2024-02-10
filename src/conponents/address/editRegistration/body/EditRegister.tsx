import React from 'react';
import styled from 'styled-components';
import PhoneNumInput from './PhoneNumInput';
import AddressSearchButton from './AddressSearchButton';
import { addrRegFormAtom } from '../../../../states/addressAtom';
import { useRecoilState } from 'recoil';

const EditRegister: React.FC = () => {
  const [addrRegForm, setAddrRegForm] = useRecoilState(addrRegFormAtom);

  const recipientNameOnChange = (text: string) => {
    setAddrRegForm((prev) => ({
      ...prev,
      recipientName: text,
    }));
    // setRecipientName(text);
  };
  const locationNameOnChange = (text: string) => {
    setAddrRegForm((prev) => ({
      ...prev,
      locationName: text,
    }));
    // setLocationName(text);
  };
  const detailAddressOnChange = (text: string) => {
    setAddrRegForm((prev) => ({
      ...prev,
      detailAddress: text,
    }));
    // setDetailAddress(text);
  };
  return (
    <EditRegisterContainer>
      <Box>
        <Title>받는 사람</Title>
        <Input
          value={addrRegForm.recipientName}
          onChange={(e) => recipientNameOnChange(e.target.value)}
          placeholder="이름을 적어주세요."
        />
      </Box>
      <Box>
        <Title>장소명</Title>
        <Input
          value={addrRegForm.locationName}
          onChange={(e) => locationNameOnChange(e.target.value)}
          placeholder="장소를 적어주세요.(ex 우리집, 회사 etc)"
        />
      </Box>
      <PhoneBox>
        <Title>핸드폰 번호</Title>
        <PhoneNumInput />
      </PhoneBox>
      <Box>
        <Title>주소</Title>
        <Input value={addrRegForm.address} placeholder="주소" disabled />
        <AddressSearchButton />
      </Box>
      <Box>
        <Title>상세 주소</Title>
        <Input
          value={addrRegForm.detailAddress}
          onChange={(e) => detailAddressOnChange(e.target.value)}
          placeholder="상세 주소를 입력해주세요."
        />
      </Box>
    </EditRegisterContainer>
  );
};

const EditRegisterContainer = styled.section`
  padding-top: 15px;
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

export default EditRegister;
