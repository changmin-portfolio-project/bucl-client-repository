import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryIdAtom } from '../../../states/productAtom';

const CategoriesNav: React.FC = () => {
  const categoryId = useRecoilValue(categoryIdAtom);

  const categoryList = [
    {
      categoryId: 1,
      categoryName: '핫딜',
    },
    {
      categoryId: 2,
      categoryName: '리워드',
    },
  ];

  const setCategoryId = useSetRecoilState(categoryIdAtom);
  const categoryItemOnClick = (categoryId: number) => {
    setCategoryId(categoryId);
  };

  return (
    <CategoriesNavContainer>
      <CategoryNav>
        {categoryList.map((v, i) => (
          <CategoryItem
            key={i}
            onClick={() => categoryItemOnClick(v.categoryId)}
          >
            <Link
              to={`/`}
              className={categoryId === v.categoryId ? 'active' : ''}
            >
              {v.categoryName}
            </Link>
          </CategoryItem>
        ))}
      </CategoryNav>
    </CategoriesNavContainer>
  );
};

const CategoriesNavContainer = styled.nav``;

const CategoryNav = styled.nav`
  display: flex;
  height: 100%;
`;
const CategoryItem = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    font-size: 12px;
    color: ${({ theme }) => theme.grey.Grey6};

    &.active {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 20px;
      color: black;
    }
  }
`;

export default CategoriesNav;
