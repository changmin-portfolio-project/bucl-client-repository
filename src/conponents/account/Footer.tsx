import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <AccountConfirmBtn>확인</AccountConfirmBtn>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 10px 7% 40px 7%;
  width: calc(100% - 14%);
  border-top: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const AccountConfirmBtn = styled.button`
  padding: 10px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: white;
`;

export default Footer;
