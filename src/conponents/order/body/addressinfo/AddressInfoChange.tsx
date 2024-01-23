import React from 'react';
import styled from 'styled-components';

const AddressInfoChange: React.FC = () => {
  return (
    <AddressInfoChangeContainer>
      <AddressInfoChangeLeftItem>배송지 정보</AddressInfoChangeLeftItem>
      <AddressInfoChangeRightItem>변경하기</AddressInfoChangeRightItem>
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

const AddressInfoChangeRightItem = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default AddressInfoChange;
