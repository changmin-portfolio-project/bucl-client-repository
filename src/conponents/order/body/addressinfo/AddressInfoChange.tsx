import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isAdressSelectPageAtom } from '../../../../states/orderAtom';

const AddressInfoChange: React.FC = () => {
  const setIsAddressSelectPage = useSetRecoilState(isAdressSelectPageAtom);

  return (
    <AddressInfoChangeContainer>
      <AddressInfoChangeLeftItem>배송지 정보</AddressInfoChangeLeftItem>
      <AddressInfoChangeButton onClick={() => setIsAddressSelectPage(true)}>
        변경하기
      </AddressInfoChangeButton>
    </AddressInfoChangeContainer>
  );
};

const AddressInfoChangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9.5px 20px 9.5px 20px;
  border-bottom: 1px solid #eaecef;
`;

const AddressInfoChangeLeftItem = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

const AddressInfoChangeButton = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.mainColor.Orange5};
  cursor: pointer;
`;

export default AddressInfoChange;
