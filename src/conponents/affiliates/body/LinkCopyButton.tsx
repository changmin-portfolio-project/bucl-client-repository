import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from '../../Alert';
import { salesInfoAtom } from '../../../states/affiliates';
import { useRecoilValue } from 'recoil';

const LinkCopyButton: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const salesInfo = useRecoilValue(salesInfoAtom);
  const linkCopyBtnOnClick = () => {
    navigator.clipboard.writeText(salesInfo.affiliateUrl);
    setAlertVisible(!alertVisible);
  };
  return (
    <>
      <LinkCopyBtn onClick={() => linkCopyBtnOnClick()}>
        독립 홍보 링크 복사
      </LinkCopyBtn>
      {alertVisible && (
        <Alert
          text="링크 복사가 완료되었습니다."
          onClick={linkCopyBtnOnClick}
        />
      )}
    </>
  );
};

const LinkCopyBtn = styled.button`
  padding: 5px;
  width: 35%;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 700;
  color: white;
`;

export default LinkCopyButton;
