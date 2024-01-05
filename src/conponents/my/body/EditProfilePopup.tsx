import React, { Dispatch, SetStateAction, useState } from 'react';
import PopupLayout from '../../layout/PopupLayout';
import styled from 'styled-components';

interface EditProfilePopupProps {
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
}

const EditProfilePopup: React.FC<EditProfilePopupProps> = ({
  setPopupOpen,
}) => {
  const [registerPhoto, setRegisterPhoto] = useState(false);

  const deleteBtnOnClick = () => {
    setPopupOpen(false);
    setRegisterPhoto(false);
  };
  const registerPhotoOnClick = () => {
    setRegisterPhoto(true);
  };

  const galleryOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('image', e.target.files[0]);
  };
  return (
    <PopupLayout>
      <EditProfilePopupContainer>
        {registerPhoto ? (
          <>
            <Title>
              프로필 사진 등록
              <DeleteBtn onClick={deleteBtnOnClick}>
                <img src="/assets/XIcon.svg" />
              </DeleteBtn>
            </Title>
            <Gallery>
              <input
                type="file"
                id="fileInput"
                accept="image/*" // 이미지 파일만 선택 가능
                onChange={galleryOnChange}
              />
              <label htmlFor="fileInput">갤러리에서 선택하기</label>
            </Gallery>
            <Camera>카메라 촬영</Camera>
          </>
        ) : (
          <>
            <Title>
              프로필 수정
              <DeleteBtn onClick={deleteBtnOnClick}>
                <img src="/assets/XIcon.svg" />
              </DeleteBtn>
            </Title>
            <RegisterPhoto onClick={registerPhotoOnClick}>
              프로필 사진 등록
            </RegisterPhoto>
            <RegisterBasicImg>기본 이미지로 등록</RegisterBasicImg>
          </>
        )}
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
`;
const DeleteBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
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
const Camera = styled(RegisterPhoto)``;

export default EditProfilePopup;
