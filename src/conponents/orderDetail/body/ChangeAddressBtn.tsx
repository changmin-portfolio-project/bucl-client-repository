import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ChangeAddressBtn: React.FC = () => {
  return (
    <ChangeAddressButton>
      <Link to="/my/addresses">배송지 변경</Link>
    </ChangeAddressButton>
  );
};

const ChangeAddressButton = styled.button`
  padding: 5px 0;
  background-color: white;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

export default ChangeAddressBtn;
