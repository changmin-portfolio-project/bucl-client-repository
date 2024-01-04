import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  AddressData,
  getAddressList,
} from '../../../../services/address/getAddressList';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  addrRegFormAtom,
  addressListAtom,
  currentAddressNumAtom,
  isDefaultAddressAtom,
} from '../../../../states/addressAtom';
import { deleteAddressItem } from '../../../../services/address/deleteAddressItem';

const AddressList: React.FC = () => {
  const [currentAddressNum, setCurrentAddressNum] = useRecoilState(
    currentAddressNumAtom,
  );
  const setIsDefaultAddress = useSetRecoilState(isDefaultAddressAtom);

  const setAddrRegForm = useSetRecoilState(addrRegFormAtom);

  const [addressList, setAddressList] = useRecoilState(addressListAtom);
  useEffect(() => {
    getAddressList().then((res) => {
      setAddressList(res);
    });
  }, []);

  const addressItemOnClick = (data: AddressData) => {
    const phoneNum = data.contactNumber.split('-');
    setCurrentAddressNum(data.id);
    setIsDefaultAddress(data.isDefaultAddress);

    setAddrRegForm((prev) => ({
      ...prev,
      recipientName: data.recipientName,
      locationName: data.shippingAddressName,
      address: data.address,
      detailAddress: data.addressDetail,
      firstPhoneNum: phoneNum[0],
      middlePhoneNum: phoneNum[1],
      lastPhoneNum: phoneNum[2],
      zipCode: data.zipCode,
    }));
  };

  const deleteBtnOnClick = (addressData: AddressData) => {
    if (!addressData.isDefaultAddress) {
      deleteAddressItem(addressData.id).then((res) => {
        const addressListTemp: AddressData[] = [];

        addressList.map((v) => {
          if (v.id !== res) {
            addressListTemp.push(v);
          }
        });

        setAddressList(addressListTemp);
        setCurrentAddressNum(0);
      });
    } else {
      alert('현재 배송지는 삭제할 수 없습니다.');
    }
  };

  return (
    <AddressListContainer>
      {addressList?.map((v, i) => (
        <AddressItem
          key={i}
          $active={currentAddressNum === v.id}
          onClick={(e) => {
            e.stopPropagation();
            addressItemOnClick(v);
          }}
        >
          <AddrWrapper>
            <NameDeleteBtnBox>
              <Name>
                {v.shippingAddressName}({v.recipientName})
                {v.isDefaultAddress && <DefaultBadge>현재배송지</DefaultBadge>}
              </Name>
              <DeleteBtn onClick={() => deleteBtnOnClick(v)}>
                <img src="/assets/XIcon.svg" />
              </DeleteBtn>
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
  padding-top: 20px;

  height: 70%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AddrWrapper = styled.div`
  padding: 10px 15px;
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
const DeleteBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  font-size: 1rem;
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

const DefaultBadge = styled.span`
  margin-left: 5px;
  padding: 3px;
  background-color: ${({ theme }) => theme.subColor.Yellow0};
  font: ${({ theme }) => theme.fontSizes.Label};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default AddressList;
