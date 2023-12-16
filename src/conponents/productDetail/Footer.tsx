import React, { useState } from 'react';
import styled from 'styled-components';
import Deadline from '../Deadline';
import WishBtn from '../WishBtn';
import OptionChoose from './footer/OptionChoose';

const Footer: React.FC = () => {
  const [optionCheck, setOptionCheck] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>('');
  const [currentOptionExtraAmt, setCurrentOptionExtraAmt] = useState<number>(0);

  const wishBtnStyle: React.CSSProperties = {
    width: '26px',
    height: '26px',
  };

  const buyToggleBtnOnClick = () => {
    setOptionCheck(!optionCheck);
    setCurrentOption('');
    setCurrentOptionExtraAmt(0);
    if (optionCheck) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <FooterContainer>
      <Deadline />
      <FeatureBtnBox>
        <WishBtn productCode={0} wished={false} style={wishBtnStyle} />
        <BuyBtn onClick={() => buyToggleBtnOnClick()}>구매하기</BuyBtn>
        <SaleBtn>판매하기</SaleBtn>
      </FeatureBtnBox>
      <OptionChoose
        active={optionCheck}
        buyToggleBtnOnClick={buyToggleBtnOnClick}
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        currentOptionExtraAmt={currentOptionExtraAmt}
        setCurrentOptionExtraAmt={setCurrentOptionExtraAmt}
      />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  max-width: 600px;
  border-radius: 12px 12px 0 0;
  z-index: 999;
  bottom: 0;
  padding: 0 0 3vh 0;
  width: 100%;
  background-color: white;
`;

const FeatureBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 0 20px;
  & > * {
    margin: 0 4px;
  }
`;
const BuyBtn = styled.button`
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: white;
  cursor: pointer;
  width: 100%;
`;
const SaleBtn = styled(BuyBtn)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default Footer;
