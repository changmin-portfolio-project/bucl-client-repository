/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from '../../Alert';
import { salesInfoAtom } from '../../../states/affiliates';
import { useRecoilValue } from 'recoil';
import OutlineButton from '../../OutlineButton';

const SaveImgButton: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const saveImgBtnOnClick = () => {
    setAlertVisible(!alertVisible);
  };

  const salesInfo = useRecoilValue(salesInfoAtom);
  const OutlineButtonStyle: React.CSSProperties = {
    marginBottom: '15px',
    padding: '5px 0',
    width: '300px',
    fontWeight: '700',
  };
  return (
    <>
      <OutlineButton
        onClick={saveImgBtnOnClick}
        style={OutlineButtonStyle}
        font="Body1"
        border="Orange5"
        color="Orange5"
      >
        <a href={salesInfo.imagePath[0]} download="downloaded_image.jpg">
          사진 저장하기
        </a>
      </OutlineButton>
      {alertVisible && (
        <Alert text="사진 저장이 완료되었습니다." onClick={saveImgBtnOnClick} />
      )}
    </>
  );
};

export default SaveImgButton;
