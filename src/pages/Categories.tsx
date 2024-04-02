import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../conponents/category/Header';
import Body from '../conponents/category/Body';
import TopBtn from '../conponents/TopButton';
import HeaderLayout from '../conponents/layout/HeaderLayout';
import { useParams } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  categoryIdByCategoriesAtom,
  pageNumByCategoriesAtom,
  productListByCategoriesAtom,
} from '../states/categoryAtom';
import { MID_CAT_LIST } from '../const/CategoryVar';

const CategoriesPage: React.FC = () => {
  const param = useParams();
  const categoryId = parseInt(param.category_id || '0') || 0;
  const setCategoryIdByCategories = useSetRecoilState(
    categoryIdByCategoriesAtom,
  );

  const resetPageNumByCategories = useResetRecoilState(pageNumByCategoriesAtom);
  const resetCategoryProductList = useResetRecoilState(
    productListByCategoriesAtom,
  );
  useEffect(() => {
    resetCategoryProductList();
    setCategoryIdByCategories(
      MID_CAT_LIST[categoryId].productList[0].categoryId,
    );
    resetPageNumByCategories();
  }, []);

  return (
    <CategoriesContainer>
      <HeaderLayout text={MID_CAT_LIST[categoryId].title} />
      <Header />
      <Body />
      <TopBtn />
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div``;

export default CategoriesPage;
