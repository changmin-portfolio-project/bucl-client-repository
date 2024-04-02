import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  categoryIdByCategoriesAtom,
  pageNumByCategoriesAtom,
  productListByCategoriesAtom,
} from '../../states/categoryAtom';
import HeaderLayout from '../layout/HeaderLayout';
import { ACTIVE_NAME } from '../../const/AttributeVar';
import { useParams } from 'react-router-dom';
import { MID_CAT_LIST } from '../../const/CategoryVar';

const Header: React.FC = () => {
  const param = useParams();
  const categoryId = parseInt(param.category_id || '0') || 0;
  const [categoryIdByCategories, setCategoryIdByCategories] = useRecoilState(
    categoryIdByCategoriesAtom,
  );
  const resetPageNumByCategories = useResetRecoilState(pageNumByCategoriesAtom);
  const resetCategoryProductList = useResetRecoilState(
    productListByCategoriesAtom,
  );

  const categoryItemOnClick = (categoryId: number) => {
    resetCategoryProductList();
    setCategoryIdByCategories(categoryId);
    resetPageNumByCategories();
  };

  const HeaderLayoutStyle: React.CSSProperties = {
    alignItems: 'center',
    overflowX: 'auto',

    msOverflowStyle: 'none',
    marginTop: '55px',
  };

  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <TabMenuNav>
        {MID_CAT_LIST[categoryId].productList.map((v, i) => (
          <TabMenu
            key={i}
            className={
              categoryIdByCategories === v.categoryId ? ACTIVE_NAME : ''
            }
            onClick={() => categoryItemOnClick(v.categoryId)}
          >
            {v.categoryName}
          </TabMenu>
        ))}
      </TabMenuNav>
    </HeaderLayout>
  );
};

const TabMenuNav = styled.nav`
  padding-left: 10px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const TabMenu = styled.div`
  display: flex;

  align-items: center;
  padding: 0 12px;
  min-width: fit-content;
  height: 100%;
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey6};

  &.active {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 19px;
    color: black;
  }
`;

export default Header;
