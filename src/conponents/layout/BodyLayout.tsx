import React from 'react';
import styled from 'styled-components';

interface bodyLayoutProps {
  children?: React.ReactNode;
}

const BodyLayout: React.FC<bodyLayoutProps> = ({ children }) => {
  return <BodyLayoutContainer>{children}</BodyLayoutContainer>;
};

const BodyLayoutContainer = styled.main`
  padding: 57px 0 72px 0;
`;

export default BodyLayout;
