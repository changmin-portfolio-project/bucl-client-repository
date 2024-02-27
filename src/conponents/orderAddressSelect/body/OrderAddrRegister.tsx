import React, { useEffect } from 'react';
import styled from 'styled-components';
import PhoneNumInput from './PhoneNumInput';
import AddressSearchButton from './AddressSearchButton';
import { useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';
import { ADDR, ADDR_NOM, RCPNT_NOM } from '../../../const/CookieVars';
import { addrDetailAtom } from '../../../states/orderAtom';

const OrderAddrRegister: React.FC = () => {
  const [cookie, setCookie] = useCookies();
  const [addrDetail, setAddrDetail] = useRecoilState(addrDetailAtom);

  const recipientNameOnChange = (text: string) => {
    setCookie(RCPNT_NOM, text);
  };
  const locationNameOnChange = (text: string) => {
    setCookie(ADDR_NOM, text);
  };
  const detailAddressOnChange = (text: string) => {
    setAddrDetail(text);
  };

  useEffect(() => {
    setCookie(RCPNT_NOM, '');
    setCookie(ADDR_NOM, '');
    setCookie(ADDR, '');
    setAddrDetail('');
  }, []);

  return (
    <EditRegisterContainer>
      <Box>
        <Title>장소명</Title>
        <Input
          value={cookie[ADDR_NOM]}
          onChange={(e) => locationNameOnChange(e.target.value)}
          placeholder="장소를 적어주세요.(ex 우리집, 회사 etc)"
        />
      </Box>
      <Box>
        <Title>받는 사람</Title>
        <Input
          value={cookie[RCPNT_NOM]}
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
        <Input value={cookie[ADDR]} placeholder="주소" />
        <AddressSearchButton />
      </Box>
      <Box>
        <Title>상세 주소</Title>
        <Input
          value={addrDetail}
          onChange={(e) => detailAddressOnChange(e.target.value)}
          placeholder="상세 주소를 입력해주세요."
        />
      </Box>
    </EditRegisterContainer>
  );
};

const EditRegisterContainer = styled.section`
  padding: 15px 20px 20px 20px;
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

export default OrderAddrRegister;
