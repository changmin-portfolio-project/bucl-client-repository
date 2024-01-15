import React, { useEffect } from 'react';
import TabBar from '../conponents/TabBar';
import styled from 'styled-components';
import Header from '../conponents/home/Header';
import TopBtn from '../conponents/TopBtn';
import Body from '../conponents/home/Body';
import { wishListAtom } from '../states/productAtom';
import { useSetRecoilState } from 'recoil';
import { getWishList } from '../services/wish/getWishList';

const HomePage: React.FC = () => {
  const setWishList = useSetRecoilState(wishListAtom);
  useEffect(() => {
    getWishList().then((res) => {
      setWishList(res.data);
    });
  }, []);
  return (
    <Container>
      <Header />
      <Body />
      <TabBar />
      <TopBtn />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default HomePage;
