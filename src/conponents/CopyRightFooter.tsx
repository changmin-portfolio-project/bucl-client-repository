import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  BUSINESS_INFO_LINK,
  PAYMENT_SUBSCRIPTION_INFO_LINK,
  PRIVACY_POLICY_LINK,
  SERVICE_TERMS_LINK,
} from '../const/LinkVar';

const CopyRightFooter: React.FC = () => {
  const [isActive, setActive] = useState<boolean>(false);
  return (
    <Footer>
      <MainTitle onClick={() => setActive(!isActive)}>
        <span>
          <div>(주) Pixpergram 사업자 정보</div>
        </span>
        <div style={{ width: '4px' }}></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          color="#828ca2"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="m15 7.5-5 5-5-5"
          ></path>
        </svg>
      </MainTitle>
      {isActive && (
        <MainInfo>
          <div>
            대표자 : 김창민 / 경기 성남시 수정구 복정동 495 6층(코코네스쿨)
          </div>
          <div>대표번호 : 010-2503-2160</div>
          <div>이메일: ckd29672@naver.com</div>
          <div>사업자등록번호: 현재 프토토타입으로 등록 전 상태</div>
          <div>통신판매업 신고번호: 현재 프토토타입으로 등록 전 상태</div>
        </MainInfo>
      )}

      <CopyRightTitle>
        Copyright Pixpergram Inc, All Right Reserved.
      </CopyRightTitle>

      <SubInfo>
        <div>
          <Link to={SERVICE_TERMS_LINK}>이용약관</Link>
        </div>
        <SubInfoGap />
        <div>
          <Link to={PRIVACY_POLICY_LINK}>개인정보처리방침</Link>
        </div>
        <SubInfoGap />
        <div>
          <Link to={BUSINESS_INFO_LINK}>사업자정보확인</Link>
        </div>
        <SubInfoGap />
        <div>
          <Link to={PAYMENT_SUBSCRIPTION_INFO_LINK}>DANAL 가입확인</Link>
        </div>
      </SubInfo>
    </Footer>
  );
};

const Footer = styled.div`
  margin: 0;

  font: ${({ theme }) => theme.fontSizes.Label};
  font-size: 12px;
  color: ${({ theme }) => theme.grey.Grey5};
  width: 100%;
`;

const MainTitle = styled.div`
  display: flex;
  margin-bottom: 8px;
  cursor: pointer;
`;

const MainInfo = styled.div`
  margin-bottom: 8px;
`;

const CopyRightTitle = styled.div`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.grey.Grey4};
`;

const SubInfo = styled.div`
  font: ${({ theme }) => theme.fontSizes.Label};
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  > div {
    padding-right: 8px;
  }
  a {
    color: ${({ theme }) => theme.grey.Grey5};
  }

  font-size: 9px;
`;

const SubInfoGap = styled.div`
  border-left: 1px solid ${({ theme }) => theme.grey.Grey5};
`;

export default CopyRightFooter;
