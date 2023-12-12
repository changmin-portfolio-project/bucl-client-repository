import React from 'react';
import styled from 'styled-components';
import TabBar from '../conponents/TabBar';
import Header from '../conponents/category/Header';
import Body from '../conponents/category/Body';
import TopBtn from '../conponents/TopBtn';

const CategoriesPage: React.FC = () => {
  return (
    <CategoriesContainer>
      <Header />
      <Body />
      <TabBar />
      <TopBtn />
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div``;

export default CategoriesPage;
