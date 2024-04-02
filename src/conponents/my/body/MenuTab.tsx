import React from 'react';
import styled from 'styled-components';
import AppLink from '../../AppLink';
import {
  MY_ADDRESS_PATH,
  MY_CONTACTS_PATH,
  MY_ORDERS_PATH,
  REWARD_ACCOUNTS_PATH,
  WISHES_PATH,
} from '../../../const/PathVar';

const MenuTab: React.FC = () => {
  const tabList = [
    {
      name: '주문 내역',
      icon: '/assets/TruckIcon.svg',
      url: MY_ORDERS_PATH,
      isApp: false,
    },
    {
      name: '좋아요',
      icon: '/assets/HeartIcon.svg',
      url: WISHES_PATH,
      isApp: false,
    },
    {
      name: '주소지 관리',
      icon: '/assets/LocationIcon.svg',
      url: MY_ADDRESS_PATH,
      isApp: false,
    },
    {
      name: '등록 계좌 변경',
      icon: '/assets/AccountIcon.svg',
      url: REWARD_ACCOUNTS_PATH,
      isApp: false,
    },
    {
      name: '고객 센터',
      icon: '/assets/TalkBubbleIcon.svg',
      url: MY_CONTACTS_PATH,
      isApp: false,
    },
  ];

  return (
    <MenuTabContainer>
      {tabList.map((v, i) => (
        <div key={i}>
          <AppLink to={v.url} isApp={v.isApp}>
            <MenuItemBox>
              <IconTitleBox>
                <Icon src={v.icon} />
                <Title>{v.name}</Title>
              </IconTitleBox>

              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.832031 13L6.83203 7L0.832031 1"
                  stroke="#CED4DA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MenuItemBox>
          </AppLink>
        </div>
      ))}
    </MenuTabContainer>
  );
};

const MenuTabContainer = styled.section``;

const MenuItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px ${({ theme }) => theme.paddings.base};
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const IconTitleBox = styled.div`
  display: flex;
`;
const Title = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey8};
`;
const Icon = styled.img`
  margin-right: 10px;
  width: 17px;
  aspect-ratio: 1/1;
`;

export default MenuTab;
