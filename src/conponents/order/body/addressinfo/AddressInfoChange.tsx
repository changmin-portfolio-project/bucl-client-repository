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
  padding: 20px 20px 18px 20px;
  border-bottom: 1px solid #eaecef;
`;

const AddressInfoChangeLeftItem = styled.div``;

const AddressInfoChangeRightItem = styled.div``;

export default AddressInfoChange;
