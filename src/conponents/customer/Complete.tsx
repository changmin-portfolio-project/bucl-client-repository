import React from 'react';
import CompleteLayout from '../layout/CompleteLayout';

const Complete: React.FC = () => {
  return (
    <CompleteLayout>
      <p>
        <span>회원 탈퇴</span>가 완료되었습니다.
      </p>
      <span>BUCL을 이용해주셔서 감사합니다.</span>
    </CompleteLayout>
  );
};

export default Complete;
