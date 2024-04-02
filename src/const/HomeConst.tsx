import { MID_CAT_LIST } from './CategoryVar';
import { CATEGORIES_PATH, REWARD_PRODUCTS_PATH } from './PathVar';

export const MAIN_CAT_PROD_LIST = {
  categoryList: [
    {
      categoryName: '리워드',
      imgPath: '/assets/RewardMainLogo.png',
      link: `${REWARD_PRODUCTS_PATH}`,
    },
    {
      categoryName: `${MID_CAT_LIST[0].title}`,
      imgPath: '/assets/TopClothIcon.png',
      link: `${CATEGORIES_PATH}/0`,
    },
    {
      categoryName: `${MID_CAT_LIST[1].title}`,
      imgPath: '/assets/OuterClothIcon.png',
      link: `${CATEGORIES_PATH}/1`,
    },
    {
      categoryName: `${MID_CAT_LIST[2].title}`,
      imgPath: '/assets/DressClothIcon.png',
      link: `${CATEGORIES_PATH}/2`,
    },
    {
      categoryName: `${MID_CAT_LIST[3].title}`,
      imgPath: '/assets/SkirtClothIcon.png',
      link: `${CATEGORIES_PATH}/3`,
    },
    {
      categoryName: `${MID_CAT_LIST[4].title}`,
      imgPath: '/assets/BottomClothIcon.png',
      link: `${CATEGORIES_PATH}/4`,
    },
  ],
};
