import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { getMainProductList } from '../services/home/getMainProductList';
import {
  mainPageNumByHomeAtom,
  mainProductListByHomeAtom,
} from '../states/homeAtom';

const MainProductInfiniteScroll: React.FC = () => {
  const [pageNumByCategories, setPageNumByCategories] = useRecoilState(
    mainPageNumByHomeAtom,
  );

  const [ref, inView] = useInView();

  const setList = useSetRecoilState(mainProductListByHomeAtom);

  const callback = () => {
    getMainProductList(pageNumByCategories)
      .then((res) => {
        if (res.length != 0) {
          setList((prev) => [...prev, ...res]);
          setPageNumByCategories((prev) => prev + 1);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    // categoryId가 변경되고 이전 categoryId와 다를 때에만 실행
    if (
      // categoryIdByCategories != prevCategoryIdByCategories.current ||
      inView
    ) {
      callback();
    }
  }, [inView]);

  return <ScrollBottomContainer ref={ref}></ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default MainProductInfiniteScroll;
