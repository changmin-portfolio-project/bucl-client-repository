import React from 'react';
import TabBar from '../conponents/TabBar';

const WishesPage: React.FC = () => {
  const openPopup = (url: string) => {
    window.open(url, '_blank', 'width=400,height=800');
    // '_blank'은 새 창에 열기, 'width'와 'height'는 창의 크기를 지정합니다.
  };
  return (
    <div>
      <h1>URL : /wishes</h1>
      <a
        href="#"
        onClick={() =>
          openPopup(
            'https://m.search.naver.com/search.naver?query=CJ%EB%8C%80%ED%95%9C%ED%86%B5%EC%9A%B4577444690400',
          )
        }
      >
        네이버
      </a>

      <TabBar />
    </div>
  );
};

export default WishesPage;
