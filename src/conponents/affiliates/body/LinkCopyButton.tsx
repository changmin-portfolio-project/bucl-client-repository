import React, { useState } from 'react';
import Alert from '../../Alert';
import { salesInfoAtom } from '../../../states/affiliates';
import { useRecoilValue } from 'recoil';
import ColoredButton from '../../ColoredButton';

const LinkCopyButton: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const salesInfo = useRecoilValue(salesInfoAtom);
  const linkCopyBtnOnClick = () => {
    navigator.clipboard.writeText(salesInfo.affiliateUrl);
    setAlertVisible(!alertVisible);
  };

  const ColoredButtonStyle: React.CSSProperties = {
    padding: '8px 20px',
    width: 'auto',
  };
  return (
    <>
      <ColoredButton
        onClick={() => linkCopyBtnOnClick()}
        style={ColoredButtonStyle}
        font="Body1"
        color="white"
      >
        독립 홍보 링크 복사
      </ColoredButton>
      {alertVisible && (
        <Alert
          text="링크 복사가 완료되었습니다."
          onClick={linkCopyBtnOnClick}
        />
      )}
    </>
  );
};

export default LinkCopyButton;
