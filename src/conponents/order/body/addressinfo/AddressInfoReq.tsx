import React from 'react';
import styled from 'styled-components';
import Dropdown from './AddressInfoReqDropDown';

const AddressInfoReq: React.FC = () => {
  const options = [
    '문 앞에 놓아주세요.',
    '관리실에 맡겨주세요.',
    '배송 전 연락바랍니다.',
    '직접 입력',
  ];
  return (
    <AddressInfoReqContainer>
      <AddressInfoBody3>배송 요청사항</AddressInfoBody3>
      {/* <AddressInfoBody2>배송 시 요청사항을 선택해주세요.</AddressInfoBody2> */}
      <Dropdown options={options} />
    </AddressInfoReqContainer>
  );
};

const AddressInfoReqContainer = styled.div`
  margin-bottom: 20px;
`;

const AddressInfoBody3 = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body3};
  padding: 9.5px 20px 8.5px 20px;
  border-bottom: 1px solid #eaecef;
`;

// const AddressInfoBody2 = styled.div`
//   font: ${({ theme }) => theme.fontSizes.Body2};
// `;

export default AddressInfoReq;
