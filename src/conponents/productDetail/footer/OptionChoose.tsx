import React, { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import OptionCount from './OptionCount';
import {
  getOptions,
  optionsData,
} from '../../../services/productDetail/getOptions';
import { useParams } from 'react-router-dom';
import OutlineButton from '../../OutlineButton';

interface OptionChooseProps {
  active: boolean;
  buyToggleBtnOnClick: () => void;
  currentOption: string;
  setCurrentOption: React.Dispatch<SetStateAction<string>>;
  currentOptionExtraAmt: number;
  setCurrentOptionExtraAmt: React.Dispatch<SetStateAction<number>>;
}

const OptionChoose: React.FC<OptionChooseProps> = ({
  active,
  buyToggleBtnOnClick,
  currentOption,
  setCurrentOption,
  currentOptionExtraAmt,
  setCurrentOptionExtraAmt,
}) => {
  const param = useParams();

  const optionItemOnClick = (
    optionName: string,
    extraAmount: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    e.stopPropagation(); // 이벤트 전파 중지
    setCurrentOption(optionName);
    setCurrentOptionExtraAmt(extraAmount);
  };

  const [optionList, setOptionList] = useState<optionsData[]>();
  const [optionCount, setOptionCount] = useState<number>(1);
  useEffect(() => {
    if (param.product_code)
      getOptions(param.product_code).then((res) => {
        setOptionList(res.data);
      });
  }, []);

  // const handStopPopup = (event: React.MouseEvent<HTMLElement>) => {
  //   console.log(event);
  // };

  return (
    <>
      {active && (
        <OptionChooseContainer
          id="option-pop-container"
          onClick={buyToggleBtnOnClick}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {currentOption ? (
              <OptionCount
                currentOption={currentOption}
                setCurrentOption={setCurrentOption}
                currentOptionExtraAmt={currentOptionExtraAmt}
                setCurrentOptionExtraAmt={setCurrentOptionExtraAmt}
                optionCount={optionCount}
                setOptionCount={setOptionCount}
              />
            ) : (
              <>
                <OptionBox>
                  <Title>옵션 선택하기</Title>
                  {optionList?.map((v, i) => (
                    <OptionItem
                      onClick={(e) =>
                        optionItemOnClick(
                          v?.values.toString(),
                          v?.extraAmount,
                          e,
                        )
                      }
                      key={i}
                    >
                      <OptionName>{v.values}</OptionName>
                    </OptionItem>
                  ))}
                </OptionBox>
                <CloseBtnBox>
                  <OutlineButton onClick={buyToggleBtnOnClick}>
                    옵션 선택 닫기
                  </OutlineButton>
                </CloseBtnBox>
              </>
            )}
          </div>
        </OptionChooseContainer>
      )}
    </>
  );
};

const OptionChooseContainer = styled.div`
  position: fixed;
  max-width: 600px;
  z-index: 999;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const OptionBox = styled.div`
  /* position: absolute;
  bottom: 0; */
  padding: 0 7% 5px 7%;
  width: calc(100% - 14%);
  max-height: 50vh;
  overflow-y: auto;
  background-color: white;
  border-radius: 8px 8px 0 0;
`;
const Title = styled.p`
  padding: 15px 0 8px 0;
  font: ${({ theme }) => theme.fontSizes.Body3};
`;
const OptionItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
`;
const OptionName = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

const CloseBtnBox = styled.div`
  padding: 15px 7% 40px 7%;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey3};
`;
// const CloseBtn = styled.button`
//   padding: 10px 0;
//   width: 100%;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.mainColor.Orange5};
//   border-radius: 4px;
//   font: ${({ theme }) => theme.fontSizes.Subhead2};
//   color: ${({ theme }) => theme.mainColor.Orange5};
// `;

export default OptionChoose;
