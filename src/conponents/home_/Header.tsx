import React from 'react';
import BuclLogo from '../BuclLogo';
import styled from 'styled-components';
import Point from '../home/header/Point';

import { MAIN_CAT_PROD_LIST } from '../../const/HomeConst';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <BuclLogo />
          <Point />
        </HeaderWrap>
      </HeaderContainer>

      <TabMenuNav>
        <TabMenuNavWrap>
          {MAIN_CAT_PROD_LIST.categoryList.map((v, i) => (
            <CategoryItemDiv key={i}>
              <Link to={v.link}>
                <CategoryItemWrap>
                  <CategoryImg src={v.imgPath} />
                </CategoryItemWrap>
                <TabMenu>{v.categoryName}</TabMenu>
              </Link>
            </CategoryItemDiv>
          ))}
        </TabMenuNavWrap>
      </TabMenuNav>
    </>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  max-width: 500px;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 10px 0 6px 0;
  width: 100%;
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;
const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 25px 0px 25px;
`;

const CategoryItemDiv = styled.div`
  padding-left: 7px;
  padding-right: 7px;
  margin-top: 5px;
`;

const CategoryItemWrap = styled.div`
  width: 50px;
  height: 50px;
`;

const CategoryImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;

const TabMenuNav = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 57px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  background-color: white;
  z-index: 1000;
  padding: 5px 0 5px 0;
`;

const TabMenuNavWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
`;
const TabMenu = styled.div`
  text-align: center;
  padding: 0
  min-width: fit-content;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};

`;

export default Header;
