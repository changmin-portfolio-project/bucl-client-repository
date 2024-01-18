import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from '../../Alert';
import { salesInfoAtom } from '../../../states/affiliates';
import { useRecoilValue } from 'recoil';

const SaveImgButton: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const saveImgBtnOnClick = () => {
    setAlertVisible(!alertVisible);
  };

  const salesInfo = useRecoilValue(salesInfoAtom);
  return (
    <>
      <SaveImgBtn onClick={saveImgBtnOnClick}>
        <a href={salesInfo.imagePath[0]} download="downloaded_image.jpg">
          사진 저장하기
        </a>
      </SaveImgBtn>
      {alertVisible && (
        <Alert text="사진 저장이 완료되었습니다." onClick={saveImgBtnOnClick} />
      )}
    </>
  );
};

const SaveImgBtn = styled.button`
  margin-bottom: 15px;
  padding: 5px 0;
  width: 65%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
  border-radius: 4px;
  a {
    font: ${({ theme }) => theme.fontSizes.Body1};
    font-weight: 700;
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

export default SaveImgButton;
