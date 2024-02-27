import React from 'react';
import { KAKAO_SDK_KEY } from './const/Kakao';

const AppInit: React.FC = () => {
  // kakao sdk
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_SDK_KEY);
  }
  return <></>;
};

export default AppInit;
