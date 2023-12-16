import React, { useState } from 'react';
import styled from 'styled-components';
import WishBtn from '../WishBtn';
import OptionChoose from '../productDetail/footer/OptionChoose';

const Footer: React.FC = () => {
  const [optionCheck, setOptionCheck] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>('');

  const wishBtnStyle: React.CSSProperties = {
    width: '26px',
    height: '26px',
  };

  const buyToggleBtnOnClick = () => {
    setOptionCheck(!optionCheck);
    setCurrentOption('');
  };

  return (
    <FooterContainer>
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
      />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: sticky;
  z-index: 999;
  bottom: 0;
  padding: 0 0 3vh 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid #eaecef;
`;

const FeatureBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
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
`;
const SaleBtn = styled(BuyBtn)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default Footer;
