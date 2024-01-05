import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPoint } from '../../../services/my/getPoint';
import { UserData, getUserProfile } from '../../../services/my/getUserProfile';
import EditProfilePopup from './EditProfilePopup';

const MyInfo: React.FC = () => {
  const [point, setPoint] = useState<number>();
  const [userInfo, setUserInfo] = useState<UserData>();
  useEffect(() => {
    getUserProfile().then((res) => {
      setUserInfo(res.data);
    });
    getPoint().then((res) => {
      setPoint(res.data.rewardSum);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [popupOpen, setPopupOpen] = useState(false);

  const EditBtnOnClick = () => {
    setPopupOpen(true);
    console.log('dd');
  };

  return (
    <MyInfoContainer>
      <UserImgBox>
        <UserImg src={userInfo?.profilePath} />
        <EditBtn onClick={EditBtnOnClick}>
          <img src="/assets/EditIcon.svg" />
        </EditBtn>
      </UserImgBox>
      <UserName>{userInfo?.nickname}</UserName>
      {popupOpen && <EditProfilePopup setPopupOpen={setPopupOpen} />}
      <PointBox>
        <PointTitle>누적포인트</PointTitle>
        <PointText>{point?.toLocaleString()}P</PointText>
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
  width: 35%;
  aspect-ratio: 1/1;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 50%;
  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
`;

const UserName = styled.span`
  padding: 10px 0 20px 0;
`;

const PointBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 80%;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 8px;
  font: ${({ theme }) => theme.fontSizes.Body4};
`;
const PointTitle = styled.span`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;
const PointText = styled(PointTitle)`
  font: ${({ theme }) => theme.fontSizes.Subhead4};
`;

export default MyInfo;
