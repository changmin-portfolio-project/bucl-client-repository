import React from 'react';
import CategoryProducts from './body/CategoryProducts';
import BodyLayout from '../layout/BodyLayout';
import CopyRightFooter from '../CopyRightFooter';
import styled from 'styled-components';

const Body: React.FC = () => {
  const CategoryBodyStyle: React.CSSProperties = {
    paddingTop: '114px',
  };
  return (
    <BodyLayout style={CategoryBodyStyle}>
      <CategoryProducts />
      <CopyRightWrap>
        <CopyRightFooter />
      </CopyRightWrap>
    </BodyLayout>
  );
};
const CopyRightWrap = styled.div`
  margin: 20px 0 0px 0;
  padding-left: 15px;
`;

export default Body;
