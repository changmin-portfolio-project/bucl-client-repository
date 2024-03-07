import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { PAGE_NUM } from '../../const/Pagenation';
import {
  categoryIdByCategoriesAtom,
  pageNumByCategoriesAtom,
} from '../../states/categoryAtom';
import HeaderLayout from '../layout/HeaderLayout';

const Header: React.FC = () => {
  const [categoryIdByCategories, setCategoryIdByCategories] = useRecoilState(
    categoryIdByCategoriesAtom,
  );
  const setPageNumByCategories = useSetRecoilState(pageNumByCategoriesAtom);

  const categoryList = [
    {
      categoryId: 1,
      categoryName: '핫딜',
    },
    {
      categoryId: 2,
      categoryName: '리워드',
    },
    {
      categoryId: 3,
      categoryName: '상의',
    },
    {
      categoryId: 4,
      categoryName: '하의',
    },
    {
      categoryId: 5,
      categoryName: '패션잡화',
    },
    {
      categoryId: 6,
      categoryName: '뷰티',
    },
  ];

  const categoryItemOnClick = (categoryId: number) => {
    setCategoryIdByCategories(categoryId);
    setPageNumByCategories(PAGE_NUM);
  };

  const HeaderLayoutStyle: React.CSSProperties = {
    alignItems: 'center',
    overflowX: 'auto',
    maxWidth: '600px',
    msOverflowStyle: 'none',
  };

  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <TabMenuNav>
        {categoryList.map((v, i) => (
          <TabMenu
            key={i}
            className={categoryIdByCategories === v.categoryId ? 'active' : ''}
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
  justify-content: first-start;
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
