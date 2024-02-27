import React from 'react';
import HeaderLayout from '../../conponents/layout/HeaderLayout';
import Body from '../../conponents/orderAddressSelect/Body';

const OrderAddressSelectPage: React.FC = () => {
  return (
    <div>
      <HeaderLayout text="배송지 관리" />
      <Body />

      {/* <HeaderLayout text="배송지 등록/수정" />
          <EditRegistrationBody />
      {editRegistrationMode ? (
        <>
          <HeaderLayout text="배송지 등록/수정" />
          <EditRegistrationBody />
        </>
      ) : (
        <>
          <HeaderLayout text="배송지 관리" />
          <ManagementBody />
        </>
      )} */}
    </div>
  );
};

export default OrderAddressSelectPage;
