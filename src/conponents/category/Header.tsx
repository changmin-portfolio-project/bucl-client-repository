import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categoryIdAtom } from '../../states/productAtom';
import { useRecoilState } from 'recoil';

const Header: React.FC = () => {
  const [categoryId, setCategoryId] = useRecoilState(categoryIdAtom);

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
    setCategoryId(categoryId);
  };

  return (
    <HeaderContainer>
      <TabMenuNav>
        {categoryList.map((v, i) => (
          <TabMenu key={i}>
            <Link
              to={`/categories/${v.categoryId}`}
              className={categoryId === v.categoryId ? 'active' : ''}
              onClick={() => categoryItemOnClick(v.categoryId)}
            >
              {v.categoryName}
            </Link>
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
  padding: 5vh 0 6px 0;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
  overflow: hidden;
`;

const TabMenuNav = styled.nav`
  display: flex;
`;
const TabMenu = styled.div`
  color: ${({ theme }) => theme.grey.Grey6};
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

export default Header;
