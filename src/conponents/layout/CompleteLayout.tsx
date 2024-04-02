import React from 'react';
import styled from 'styled-components';

interface completeLayoutProps {
  children?: React.ReactNode;
}

const CompleteLayout: React.FC<completeLayoutProps> = ({ children }) => {
  return <CompleteLayoutContainer>{children}</CompleteLayoutContainer>;
};

const CompleteLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40vh;
  align-items: center;
  justify-content: center;

  span {
    font: ${({ theme }) => theme.fontSizes.Body4};
  }
  p {
    font: ${({ theme }) => theme.fontSizes.Subhead3};
    span {
      font: ${({ theme }) => theme.fontSizes.Subhead3};
      color: ${({ theme }) => theme.mainColor.Orange5};
    }
  }
`;

export default CompleteLayout;
