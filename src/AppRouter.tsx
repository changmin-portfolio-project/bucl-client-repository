import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import React from 'react';
import ProductsPage from './pages/Products';
import LoginPage from './pages/Login';
// import CategoriesPage from './pages/Categories';
import PhotoReviewsPage from './pages/PhotoReviews';
import ReviewsPage from './pages/Reviews';
import RewardsPage from './pages/rewards/Rewards';
import RewardWithdrawalsPage from './pages/rewards/RewardWithdrawals';
import RewardAccountsPage from './pages/rewards/RewardAccounts';
import MyPage from './pages/my/My';
import MyOrdersPage from './pages/my/MyOrders';
import OrdersPage from './pages/orders/Orders';
import MyOrdersDetailPage from './pages/my/MyOrdersDetail';
import PostReviewsPage from './pages/PostReviews';
import WishesPage from './pages/Wishes';
import MyContactsPage from './pages/my/MyContacts';
import MyAddressesPage from './pages/my/MyAddresses';
import { JSX } from 'react/jsx-runtime';
import OrderCompletePage from './pages/orders/OrderComplete';
import NotFoundPage from './pages/NotFound';
import BadRequestPage from './pages/BadRequest';
import ResetStateOnRouteChange from './states/ResetStateOnRouteChange';
import OrderPaymentProcessingProcessingPage from './pages/orders/OrderPaymentProcessing';
import {
  BAD_REQUEST_PATH,
  CATEGORIES_PATH,
  HOME_PATH,
  LOGIN_PATH,
  MARKET_PATH,
  MY_ADDRESS_PATH,
  MY_CONTACTS_PATH,
  MY_ORDERS_PATH,
  MY_PATH,
  ORDER_COMPLETE_PATH,
  ORDER_PATH,
  ORDER_PAYMENT_PROCESSING_PATH,
  PHOTO_REVIEW_PATH,
  POST_REVIEW_PATH,
  PRODUCT_PATH,
  REVIEW_PATH,
  REWARD_ACCOUNTS_PATH,
  REWARD_PATH,
  REWARD_PRODUCTS_PATH,
  REWARD_WITHDRAWAL_PATH,
  WISHES_PATH,
} from './const/PathVar';
import OrdTrackInfoPage from './pages/OrdTrackInfo';
import CategoriesMainPage from './pages/categories/CategoriesMain';
import CategoriesPage from './pages/Categories';
import MerketsPage from './pages/Markets';
import RewardProductPage from './pages/Home_';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ResetStateOnRouteChange />
      <Routes>
        <Route path={HOME_PATH} element={<RewardProductPage />} />
        <Route path={REWARD_PRODUCTS_PATH} element={<HomePage />} />
        <Route path={LOGIN_PATH} element={<LoginPage />} />
        <Route path={CATEGORIES_PATH} element={<CategoriesMainPage />}></Route>
        <Route
          path={`${CATEGORIES_PATH}/:category_id`}
          element={<CategoriesPage />}
        ></Route>
        <Route
          path={`${PRODUCT_PATH}/:product_code`}
          element={<ProductsPage />}
        />
        <Route path={`${MARKET_PATH}/:market_code`} element={<MerketsPage />} />

        <Route
          path={`${PRODUCT_PATH}/:product_code${PHOTO_REVIEW_PATH}`}
          element={<PhotoReviewsPage />}
        />
        <Route
          path={`${PRODUCT_PATH}/:product_code${REVIEW_PATH}`}
          element={<ReviewsPage />}
        />
        <Route path={`${ORDER_PATH}/:order_code`} element={<OrdersPage />} />

        <Route
          path={`${MY_ORDERS_PATH}/:order_code/track-info`}
          element={<OrdTrackInfoPage />}
        />
        <Route
          path={ORDER_PAYMENT_PROCESSING_PATH}
          element={<OrderPaymentProcessingProcessingPage />}
        />
        <Route path={ORDER_COMPLETE_PATH} element={<OrderCompletePage />} />
        {/* <Route path="/affiliates/:product_code" element={<AffiliatesPage />} /> */}
        <Route path={REWARD_PATH} element={<RewardsPage />} />
        <Route
          path={REWARD_WITHDRAWAL_PATH}
          element={<RewardWithdrawalsPage />}
        />
        <Route path={REWARD_ACCOUNTS_PATH} element={<RewardAccountsPage />} />
        <Route path={MY_PATH} element={<MyPage />} />
        <Route path={MY_ORDERS_PATH} element={<MyOrdersPage />} />
        <Route
          path={`${MY_ORDERS_PATH}/:order_code`}
          element={<MyOrdersDetailPage />}
        />
        <Route
          path={`${POST_REVIEW_PATH}/:order_code`}
          element={<PostReviewsPage />}
        />
        <Route path={WISHES_PATH} element={<WishesPage />} />
        <Route path={MY_CONTACTS_PATH} element={<MyContactsPage />} />
        <Route path={MY_ADDRESS_PATH} element={<MyAddressesPage />} />

        <Route path={BAD_REQUEST_PATH} element={<BadRequestPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
