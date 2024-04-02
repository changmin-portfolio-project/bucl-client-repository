import React from 'react';
import BodyLayout from '../layout/BodyLayout';
import MainProducts from './body/MainProducts';
import CopyRightFooter from '../CopyRightFooter';
import styled from 'styled-components';

const Body: React.FC = () => {
  const HomeLayoutStyle: React.CSSProperties = {
    paddingTop: '0px',
  };
  return (
    <BodyLayout style={HomeLayoutStyle}>
      <MainProducts />
      <CopyRightWrap>
        <CopyRightFooter />
      </CopyRightWrap>
    </BodyLayout>
  );
};

const CopyRightWrap = styled.div`
  margin: 20px 0 0px 0;
  padding: 0 0 40px 15px;
`;

export default Body;
