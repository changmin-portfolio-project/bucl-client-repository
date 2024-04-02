import React from 'react';
import styled from 'styled-components';

import TextButton from '../../conponents/TextButton';
import theme from '../../style/theme';
import { Link } from 'react-router-dom';
import TabBar from '../../conponents/TabBar';
import { CATEGORIES_PATH } from '../../const/PathVar';
import {
  ACCESSORIES_LIST_NUM,
  CAT_PROD_LIST,
  MEN_LIST_NUM,
  WOMEN_LIST_NUM,
} from '../../const/CategoryVar';

const CategoriesMainPage: React.FC = () => {
  const TextButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    cursor: 'pointer',
    fontFamily: 'Pretendard-Light',
    fontWeight: '400',
    fontSize: '15px',
    paddingBottom: '4px',
  };
  return (
    <>
      <Container>
        <Wrap>
          <Link to={`${CATEGORIES_PATH}/${WOMEN_LIST_NUM}`}>
            <CategoriesMainItemWrapDiv>
              <CategoriesMainItemTitleDiv>Women</CategoriesMainItemTitleDiv>

              <TextButton font="Body3" style={TextButtonStyle} color="Orange4">
                {CAT_PROD_LIST[WOMEN_LIST_NUM].title}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke={theme.mainColor.Orange4}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </TextButton>
            </CategoriesMainItemWrapDiv>
          </Link>
          <Link to={`${CATEGORIES_PATH}/${MEN_LIST_NUM}`}>
            <CategoriesMainItemWrapDiv>
              <CategoriesMainItemTitleDiv>
                Cross Border
              </CategoriesMainItemTitleDiv>

              <TextButton font="Body3" style={TextButtonStyle} color="Orange4">
                {CAT_PROD_LIST[MEN_LIST_NUM].title}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke={theme.mainColor.Orange4}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </TextButton>
            </CategoriesMainItemWrapDiv>
          </Link>
          <Link to={`${CATEGORIES_PATH}/${ACCESSORIES_LIST_NUM}`}>
            <CategoriesMainItemWrapDiv>
              <CategoriesMainItemTitleDiv>
                Accessories
              </CategoriesMainItemTitleDiv>

              <TextButton font="Body3" style={TextButtonStyle} color="Orange4">
                {CAT_PROD_LIST[ACCESSORIES_LIST_NUM].title}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke={theme.mainColor.Orange4}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </TextButton>
            </CategoriesMainItemWrapDiv>
          </Link>
        </Wrap>
      </Container>
      <TabBar />
    </>
  );
};

const Container = styled.div`
  display: table;
  min-height: 100vh;
  width: 100%;
`;

const Wrap = styled.div`
  margin-top: 60px;
`;

const CategoriesMainItemWrapDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid;
  margin-left: 42px;
  cursor: pointer;
  margin-bottom: 13vh;
`;

const CategoriesMainItemTitleDiv = styled.div`
  display: flex;
  align-items: end;
  font: ${({ theme }) => theme.fontSizes.Subhead1};
  font-size: 32px;
`;

// display: flex;
//     align-items: center;
//     cursor: pointer;

export default CategoriesMainPage;
