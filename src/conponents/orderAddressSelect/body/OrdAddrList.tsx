import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  AddressData,
  getAddressList,
} from '../../../services/address/getAddressList';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { crntOrdAddrNumAtom, ordAddrAtom } from '../../../states/orderAtom';

const AddressList: React.FC = () => {
  const [crntOrdAddrNum, setCrntOrdAddrNum] =
    useRecoilState(crntOrdAddrNumAtom);
  const setOrdAddr = useSetRecoilState(ordAddrAtom);
  const [addressList, setAddressList] = useState<AddressData[]>([]);

  useEffect(() => {
    getAddressList().then((res) => {
      setAddressList(res);
    });
  }, []);

  const addressItemOnClick = (data: AddressData) => {
    setCrntOrdAddrNum(data.id);

    setOrdAddr((prev) => ({
      ...prev,
      shippingAddressNam: data.shippingAddressName,
      recipientName: data.recipientName,
      locationName: data.shippingAddressName,
      address: data.address,
      contactNum: data.contactNumber,
      detailAddress: data.addressDetail,
      zipCode: data.zipCode,
    }));
  };

  return (
    <AddressListContainer>
      {addressList?.map((v, i) => (
        <AddressItem
          key={i}
          $active={crntOrdAddrNum === v.id}
          onClick={(e) => {
            e.stopPropagation();
            addressItemOnClick(v);
          }}
        >
          <AddrWrapper>
            <NameDeleteBtnBox>
              <Name>
                {v.shippingAddressName}({v.recipientName})
              </Name>
            </NameDeleteBtnBox>
            <PhoneText>{v.contactNumber}</PhoneText>
            <AddressDetail>{v.addressDetail}</AddressDetail>
            <Address>{v.address}</Address>
          </AddrWrapper>
        </AddressItem>
      ))}
    </AddressListContainer>
  );
};

const AddressListContainer = styled.section`
  padding-top: 80px;

  height: 70%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AddrWrapper = styled.div`
  padding: 10px 10px 10px 15px;
`;

const AddressItem = styled.div<{ $active: boolean }>`
  margin: 0 auto;
  margin-bottom: 10px;
  width: calc(100% - 30px);
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 8px;
  ${(props) =>
    props.$active &&
    css`
      border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
    `}
`;

const NameDeleteBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

const PhoneText = styled.p`
  padding: 0 0 3px 0;
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey6};
`;
const AddressDetail = styled(PhoneText)`
  padding: 0;
`;
const Address = styled(AddressDetail)``;

export default AddressList;
