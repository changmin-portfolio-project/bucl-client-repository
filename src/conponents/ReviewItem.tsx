import React from 'react';
import styled from 'styled-components';
import ReviewImgItem from './ReviewImgItem';
import Star from './Star';
import { convertDtStrToDStr } from '../utils/DateTimeUtil';

interface ReviewItemProps {
  nickname?: string;
  profilePath?: string;
  imgPath?: string;
  count?: number;
  reviewDate?: string;
  content?: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  nickname,
  profilePath,
  imgPath,
  count,
  reviewDate,
  content,
}) => {
  const ReviewImgItemStyle: React.CSSProperties = {
    width: '20%',
  };
  const StarStyle: React.CSSProperties = {
    fontSize: '0.7rem',
  };
  return (
    <ReviewItemContainer>
      <InfoBox>
        <UserInfoBox>
          <UserImg src={profilePath} />
          <RatingNicknameDateBox>
            <Star count={count} style={StarStyle} />
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
      </InfoBox>
      <ReviewImgItem style={ReviewImgItemStyle} imgPath={imgPath} />
    </ReviewItemContainer>
  );
};

const ReviewItemContainer = styled.div`
  display: flex;
  padding: 10px 7%;
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
  width: 12%;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

const ReviewTextBox = styled.div`
  padding: 5px 0 0 0;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

const RatingNicknameDateBox = styled.div``;

const NicknameDateBox = styled.div``;
const NicknameText = styled.span`
  padding-right: 5px;
  border-right: 1px solid ${({ theme }) => theme.grey.Grey5};
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 700;
  color: ${({ theme }) => theme.grey.Grey5};
`;
const DateText = styled(NicknameText)`
  padding-left: 5px;
  font-weight: 500;
  border: none;
`;

export default ReviewItem;
