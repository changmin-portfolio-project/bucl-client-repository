import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { PAGE_NUM } from '../../const/Pagenation';
import {
  categoryIdByCategoriesAtom,
  pageNumByCategoriesAtom,
} from '../../states/categoryAtom';

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
      categoryName: '생산지직송',
    },
    {
      categoryId: 4,
      categoryName: '건강기능식품',
    },
    {
      categoryId: 5,
      categoryName: '뷰티',
    },
    {
      categoryId: 6,
      categoryName: '패션',
    },
    {
      categoryId: 7,
      categoryName: '육아용품',
    },
    {
      categoryId: 8,
      categoryName: '주방용품',
    },
  ];

  const categoryItemOnClick = (categoryId: number) => {
    setCategoryIdByCategories(categoryId);
    setPageNumByCategories(PAGE_NUM);
  };

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4vh 0 6px 0;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
  overflow-x: auto;
  width: 100%;
  max-width: 600px;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & nav {
    padding: 0px 12px 0px 12px;
  }
`;

const TabMenuNav = styled.nav`
  display: flex;
`;
const TabMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  min-width: fit-content;
  height: 100%;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};

  &.active {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 19px;
    color: black;
  }
`;

export default Header;
