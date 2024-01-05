import React from 'react';
import ManagementHeader from '../../conponents/address/management/Header';
import ManagementBody from '../../conponents/address/management/Body';
import EditRegistrationHeader from '../../conponents/address/editRegistration/Header';
import EditRegistrationBody from '../../conponents/address/editRegistration/Body';
import { useRecoilValue } from 'recoil';
import { editRegistrationModeAtom } from '../../states/addressAtom';
import TabBar from '../../conponents/TabBar';

const MyAddressesPage: React.FC = () => {
  const editRegistrationMode = useRecoilValue(editRegistrationModeAtom);
  return (
    <div>
      {editRegistrationMode ? (
        <>
          <EditRegistrationHeader />
          <EditRegistrationBody />
        </>
      ) : (
        <>
          <ManagementHeader />
          <ManagementBody />
        </>
      )}
      <TabBar />
    </div>
  );
};

export default MyAddressesPage;
