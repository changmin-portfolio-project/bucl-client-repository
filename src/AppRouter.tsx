import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import React from 'react';
import ProductsPage from './pages/Products';
import LoginPage from './pages/Login';
import CategoriesPage from './pages/Categories';
import PhotoReviewsPage from './pages/PhotoReviews';
import ReviewsPage from './pages/Reviews';
import AffiliatesPage from './pages/Affiliates';
import RewardsPage from './pages/rewards/Rewards';
import RewardWithdrawalsPage from './pages/rewards/RewardWithdrawals';
import RewardAccountsPage from './pages/rewards/RewardAccounts';
import MyPage from './pages/my/My';
import MyOrdersPage from './pages/my/MyOrders';
import OrdersPage from './pages/Orders';
import MyOrdersDetailPage from './pages/my/MyOrdersDetail';
import PostReviewsPage from './pages/PostReviews';
import WishesPage from './pages/Wishes';
import MyContactsPage from './pages/my/MyContacts';
import MyAddressesPage from './pages/my/MyAddresses';
import { JSX } from 'react/jsx-runtime';

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categories" element={<CategoriesPage />}></Route>
        <Route path="/products/:product_code" element={<ProductsPage />} />
        <Route
          path="/products/:product_code/photo-reviews"
          element={<PhotoReviewsPage />}
        />
        <Route
          path="/products/:product_code/reviews"
          element={<ReviewsPage />}
        />
        <Route path="/orders/:order_code" element={<OrdersPage />} />
        <Route path="/affiliates/:product_code" element={<AffiliatesPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/reward-withdrawals" element={<RewardWithdrawalsPage />} />
        <Route path="/reward-accounts" element={<RewardAccountsPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/my/orders" element={<MyOrdersPage />} />
        <Route path="/my/orders/:order_code" element={<MyOrdersDetailPage />} />
        <Route
          path="/post-revies/:product_code"
          element={<PostReviewsPage />}
        />
        <Route path="/wishes" element={<WishesPage />} />
        <Route path="/my/contacts" element={<MyContactsPage />} />
        <Route path="/my/addresses" element={<MyAddressesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
