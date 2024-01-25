import React from 'react';
import styled from 'styled-components';
import ReviewImgItem from './ReviewImgItem';
import Star from './Star';
import { convertDtStrToDStr } from '../utils/DateTimeUtil';

interface ReviewItemProps {
  nickname?: string;
  imgPath?: string | string[];
  style?: React.CSSProperties;
  userImg?: string;
  content?: string;
  selectedOption?: string;
  starRate?: number;
  reviewDate?: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  nickname,
  imgPath,
  style,
  userImg,
  content,
  selectedOption,
  starRate,
  reviewDate,
}) => {
  const ReviewImgItemStyle: React.CSSProperties = {
    width: 'calc(20% - 4px)',
  };
  const StarStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    paddingRight: '1px',
  };

  return (
    <ReviewItemContainer style={style}>
      <InfoBox>
        <UserInfoBox>
          <UserImg src={userImg} />
          <RatingNicknameDateBox>
            <Star count={starRate} style={StarStyle} />
            <NicknameDateBox>
              <NicknameText>{nickname}</NicknameText>
              <DateText>
                {convertDtStrToDStr(reviewDate ?? '날짜 표기 할 수 없습니다.')}
              </DateText>
            </NicknameDateBox>
          </RatingNicknameDateBox>
        </UserInfoBox>
        <ReviewTextBox>
          <p>{content}</p>
        </ReviewTextBox>
        {selectedOption && (
          <BuyOptionBox>
            <span>구매 옵션 명 - {selectedOption}</span>
          </BuyOptionBox>
        )}
      </InfoBox>
      <ReviewImgItem style={ReviewImgItemStyle} imgPath={imgPath} />
    </ReviewItemContainer>
  );
};

const ReviewItemContainer = styled.div`
  display: flex;
  padding: 7px theme.paddings.base 13px theme.paddings.base;
  border-bottom: 1px solid #eaecef;
`;

const InfoBox = styled.div`
  width: 80%;
  padding: 0 10px 0 0;
`;
const UserInfoBox = styled.div`
  display: flex;
`;
const UserImg = styled.img`
  margin-right: 5px;
  width: calc(12% + 5px);
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

const BuyOptionBox = styled.div`
  margin: 1px 0 8px 0;
  span {
    padding: 2px 5px;
    background-color: ${({ theme }) => theme.grey.Grey1};
    border-radius: 4px;
    font: ${({ theme }) => theme.fontSizes.Label};
    color: ${({ theme }) => theme.grey.Grey6};
  }
`;

const ReviewTextBox = styled.div`
  padding: 7px 0 10px 0;
  font: ${({ theme }) => theme.fontSizes.Body2};
  font-size: 16px;
  color: ${({ theme }) => theme.grey.Grey8};
`;

const RatingNicknameDateBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NicknameDateBox = styled.div``;
const NicknameText = styled.span`
  padding-right: 5px;
  border-right: 1px solid ${({ theme }) => theme.grey.Grey5};
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey5};
`;
const DateText = styled(NicknameText)`
  padding-left: 5px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 500;
  border: none;
`;

export default ReviewItem;
