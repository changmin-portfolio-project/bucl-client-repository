import React, { Dispatch, SetStateAction } from 'react';
import PopupLayout from '../../layout/PopupLayout';
import styled from 'styled-components';
import {
  PatchProfileImgReq,
  patchProfileImg,
} from '../../../services/my/patchProfileImg';
import { patchDefaultImg } from '../../../services/my/patchDefaultImg';
import { myUserInfoAtom } from '../../../states/myAtom';
import { useSetRecoilState } from 'recoil';
import { resizeImage } from '../../../utils/ImageUtil';
import { PROFILE_HEIGHT, PROFILE_WIDTH } from '../../../const/MyVar';

interface EditProfilePopupProps {
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
}

const EditProfilePopup: React.FC<EditProfilePopupProps> = ({
  setPopupOpen,
}) => {
  const setUserInfo = useSetRecoilState(myUserInfoAtom);

  const deleteBtnOnClick = () => {
    setPopupOpen(false);
  };

  const registerBasicImgOnClick = () => {
    patchDefaultImg().then((res) => {
      setUserInfo((prev) => ({ ...prev, profilePath: res.profilePath }));
      deleteBtnOnClick();
    });
  };

  async function galleryOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    const file = e.target.files[0];
    const resizedImage = await resizeImage(file, PROFILE_WIDTH, PROFILE_HEIGHT);
    const uploadFile = new File([resizedImage], file.name);
    formData.append(PatchProfileImgReq.profileImage, uploadFile);
    patchProfileImg(formData)
      .then((res) => {
        setUserInfo((prev) => ({ ...prev, profilePath: res.profilePath }));
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    deleteBtnOnClick();
  }
  return (
    <PopupLayout>
      <EditProfilePopupContainer>
        <>
          <Title>
            프로필 수정
            <DeleteBtn onClick={deleteBtnOnClick}>
              <DeleteBtnImg src="/assets/XGreyButton.svg" />
            </DeleteBtn>
          </Title>
          <Gallery>
            <input
              type="file"
              id="fileInput"
              accept="image/*" // 이미지 파일만 선택 가능
              onChange={galleryOnChange}
            />
            <label htmlFor="fileInput">프로필 사진 등록</label>
          </Gallery>
          <RegisterBasicImg onClick={registerBasicImgOnClick}>
            기본 이미지로 등록
          </RegisterBasicImg>
        </>
      </EditProfilePopupContainer>
    </PopupLayout>
  );
};

const EditProfilePopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: white;
  border-radius: 4px;
`;

const Title = styled.p`
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body3};
  font-size: 16px;
`;
const DeleteBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
`;

const DeleteBtnImg = styled.img`
  vertical-align: middle;
`;

const RegisterPhoto = styled(Title)`
  color: ${({ theme }) => theme.grey.Grey6};
`;
const RegisterBasicImg = styled(RegisterPhoto)``;

const Gallery = styled(RegisterPhoto)`
  input {
    display: none;
  }
`;

export default EditProfilePopup;
