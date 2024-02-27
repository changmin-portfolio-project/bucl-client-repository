import React, { useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { getUserProfile } from '../../../services/my/getUserProfile';
import EditProfilePopup from './EditProfilePopup';
import { useRecoilState } from 'recoil';
import { myUserInfoAtom } from '../../../states/myAtom';
import { getReward } from '../../../services/reward/getReward';
import AppLink from '../../AppLink';

const MyInfo: React.FC = () => {
  const [point, setPoint] = useState<number>(0);
  const [userInfo, setUserInfo] = useRecoilState(myUserInfoAtom);
  useEffect(() => {
    getUserProfile()
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch(() => {});
    getReward()
      .then((res) => {
        setPoint(res);
      })
      .catch(() => {});
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [popupOpen, setPopupOpen] = useState(false);

  const EditBtnOnClick = () => {
    setPopupOpen(true);
  };

  const RewardButtonStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <MyInfoContainer>
      <UserImgBox>
        <UserImg src={userInfo?.profilePath} />
        <EditBtn onClick={EditBtnOnClick}>
          <img src="/assets/EditIcon.svg" />
        </EditBtn>
      </UserImgBox>
      <UserName>{userInfo?.nickname} 님</UserName>
      {popupOpen && <EditProfilePopup setPopupOpen={setPopupOpen} />}

      <PointBox>
        <AppLink to="/rewards" style={RewardButtonStyle}>
          <PointTitle>누적포인트</PointTitle>
          <PointText>{point.toLocaleString()}P</PointText>
        </AppLink>
      </PointBox>
    </MyInfoContainer>
  );
};

const MyInfoContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 30px 0;
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
  &::before {
    position: absolute;
    content: '';
    top: 0;
    width: 100%;
    height: 35%;
    background: linear-gradient(to bottom, #ff8000, #ffad0d);
  }
`;

const UserImgBox = styled.div`
  position: relative;
  width: 25%;
  aspect-ratio: 1/1;
`;
const UserImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
`;
const EditBtn = styled.button`
  position: absolute;
  top: 100%;
  transform: translate(-100%, -100%);
  width: 35px;
  height: 35px;
  aspect-ratio: 1/1;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 50%;
  padding: 0px;
  img {
    width: 18px;
    padding: 0px;
    aspect-ratio: 1/1;
  }
`;

const UserName = styled.span`
  padding: 10px 0 20px 0;
  font: ${({ theme }) => theme.fontSizes.Body4};
`;

const PointBox = styled.div`
  padding: 20px;
  width: 80%;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 8px;
  font: ${({ theme }) => theme.fontSizes.Body4};
  color: ${({ theme }) => theme.grey.Grey8};
`;
const PointTitle = styled.span`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;
const PointText = styled(PointTitle)`
  font: ${({ theme }) => theme.fontSizes.Subhead4};
`;

export default MyInfo;
