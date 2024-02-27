import React from 'react';
import CategoryProducts from './body/CategoryProducts';
import BodyLayout from '../layout/BodyLayout';
import CopyRightFooter from '../CopyRightFooter';
import styled from 'styled-components';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <CategoryProducts />
      <CopyRightWrap>
        <CopyRightFooter />
      </CopyRightWrap>
    </BodyLayout>
  );
};
const CopyRightWrap = styled.div`
  margin-bottom: 50px;
  padding-left: 15px;
`;

export default Body;
