import React from 'react';
import ManagementBody from '../../conponents/address/management/Body';
import EditRegistrationBody from '../../conponents/address/editRegistration/Body';
import { useRecoilValue } from 'recoil';
import { editRegistrationModeAtom } from '../../states/addressAtom';
import TabBar from '../../conponents/TabBar';
import HeaderLayout from '../../conponents/layout/HeaderLayout';

const MyAddressesPage: React.FC = () => {
  const editRegistrationMode = useRecoilValue(editRegistrationModeAtom);
  return (
    <div>
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
      )}
      <TabBar />
    </div>
  );
};

export default MyAddressesPage;
