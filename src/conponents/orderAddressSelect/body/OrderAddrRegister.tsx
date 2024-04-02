import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrdPhoneNumInput from './OrdPhoneNumInput';
import { OrderPaymentType } from '../../../global/interface/OrderInterface';
import { ORD_PAY_DATA } from '../../../const/SessionStorageVars';
import { useSetRecoilState } from 'recoil';
import { ordPayDataAtom } from '../../../states/orderAtom';
import { getOrderPaymentDataUtil } from '../../../utils/PaymentUtil';
import {
  ADDR_DETAIL_PLACE_HODER,
  ADDR_PLACE_HODER,
  RECIPIENT_NAME_PLACE_HOLDER,
  SHIP_ADDR_NAME_PLACE_HOLDER,
} from '../../../const/AttributeVar';
import AddressSearchButton from '../../AddressSearchButton';

const OrderAddrRegister: React.FC = () => {
  /** 바꿈 */
  const setOrdPayDataState = useSetRecoilState(ordPayDataAtom);
  const recipientNameOnChange = (text: string) => {
    const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
    orderPaymentData.rcpntNom = text;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };
  const locationNameOnChange = (text: string) => {
    const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
    orderPaymentData.shippingAddressName = text;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };
  const detailAddressOnChange = (text: string) => {
    const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
    orderPaymentData.addrDetail = text;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };

  useEffect(() => {
    const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
    orderPaymentData.rcpntNom = '';
    orderPaymentData.shippingAddressName = '';
    orderPaymentData.addr = '';
    orderPaymentData.addrDetail = '';
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  }, []);

  const setAddrInfo = (address: string, zipCode: string) => {
    orderPaymentData.zipCode = zipCode;
    orderPaymentData.addr = address;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };

  const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();

  return (
    <EditRegisterContainer>
      <Box>
        <Title>장소명</Title>
        <Input
          value={orderPaymentData.shippingAddressName}
          onChange={(e) => locationNameOnChange(e.target.value)}
          placeholder={SHIP_ADDR_NAME_PLACE_HOLDER}
        />
      </Box>
      <Box>
        <Title>받는 사람</Title>
        <Input
          value={orderPaymentData.rcpntNom}
          onChange={(e) => recipientNameOnChange(e.target.value)}
          placeholder={RECIPIENT_NAME_PLACE_HOLDER}
        />
      </Box>
      <PhoneBox>
        <Title>핸드폰 번호</Title>
        <OrdPhoneNumInput />
      </PhoneBox>
      <Box>
        <Title>주소</Title>
        <Input
          value={orderPaymentData.addr}
          placeholder={ADDR_PLACE_HODER}
          onChange={() => {}}
        />
        <AddressSearchButton setAddrInfo={setAddrInfo} />
      </Box>
      <Box>
        <Title>상세 주소</Title>
        <Input
          value={orderPaymentData.addrDetail}
          onChange={(e) => detailAddressOnChange(e.target.value)}
          placeholder={ADDR_DETAIL_PLACE_HODER}
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
  font-family: Pretendard-Light;
  font-weight: 400;
`;

const PhoneBox = styled(Box)``;

export default OrderAddrRegister;
