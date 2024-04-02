import React, { useEffect } from 'react';
import ManagementBody from '../../conponents/address/management/Body';
import EditRegistrationBody from '../../conponents/address/editRegistration/Body';
import { useRecoilState } from 'recoil';
import { editRegistrationModeAtom } from '../../states/addressAtom';
import HeaderLayout from '../../conponents/layout/HeaderLayout';
import { MY_PATH } from '../../const/PathVar';

const MyAddressesPage: React.FC = () => {
  const [editRegistrationMode, setEditRegistrationMode] = useRecoilState(
    editRegistrationModeAtom,
  );
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      {editRegistrationMode ? (
        <>
          <HeaderLayout
            text="배송지 등록/수정"
            setFunction={setEditRegistrationMode}
          />
          <EditRegistrationBody />
        </>
      ) : (
        <>
          <HeaderLayout text="배송지 관리" to={MY_PATH} />
          <ManagementBody />
        </>
      )}
    </div>
  );
};

export default MyAddressesPage;
