import React, { useEffect } from 'react';
import styled from 'styled-components';
import PhoneNumInput from './PhoneNumInput';
import AddressSearchButton from './AddressSearchButton';
import { OrderPaymentType } from '../../../global/interface/OrderInterface';
import { ORD_PAY_DATA } from '../../../const/SessionStorageVars';
import { useSetRecoilState } from 'recoil';
import { ordPayDataAtom } from '../../../states/orderAtom';

const OrderAddrRegister: React.FC = () => {
  /** 바꿈 */
  const setOrdPayDataState = useSetRecoilState(ordPayDataAtom);
  const recipientNameOnChange = (text: string) => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.rcpntNom = text;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };
  const locationNameOnChange = (text: string) => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.shippingAddressName = text;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };
  const detailAddressOnChange = (text: string) => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.addrDetail = text;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };

  useEffect(() => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.rcpntNom = '';
    orderPaymentData.shippingAddressName = '';
    orderPaymentData.addr = '';
    orderPaymentData.addrDetail = '';
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  }, []);

  const orderPaymentData: OrderPaymentType = JSON.parse(
    sessionStorage.getItem(ORD_PAY_DATA) || '{}',
  );

  return (
    <EditRegisterContainer>
      <Box>
        <Title>장소명</Title>
        <Input
          value={orderPaymentData.shippingAddressName}
          onChange={(e) => locationNameOnChange(e.target.value)}
          placeholder="장소를 적어주세요.(ex 우리집, 회사 etc)"
        />
      </Box>
      <Box>
        <Title>받는 사람</Title>
        <Input
          value={orderPaymentData.rcpntNom}
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
        <Input
          value={orderPaymentData.addr}
          placeholder="주소"
          onChange={() => {}}
        />
        <AddressSearchButton />
      </Box>
      <Box>
        <Title>상세 주소</Title>
        <Input
          value={orderPaymentData.addrDetail}
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
