import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuTab: React.FC = () => {
  const tabList = [
    {
      name: '주문내역',
      icon: '/assets/TruckIcon.svg',
      url: '/my/orders',
    },
    {
      name: '찜 목록',
      icon: '/assets/HeartIcon.svg',
      url: '/wishes',
    },
    {
      name: '주소지 관리',
      icon: '/assets/LocationIcon.svg',
      url: '/my/addresses',
    },
    {
      name: '등록 계좌 변경',
      icon: '/assets/AccountIcon.svg',
      url: '/reward-accounts',
    },
    {
      name: '고객 센터',
      icon: '/assets/TalkBubbleIcon.svg',
      url: '/my/contacts',
    },
  ];
  return (
    <MenuTabContainer>
      {tabList.map((v, i) => (
        <MenuItemBox key={i}>
          <IconTitleBox>
            <Icon src={v.icon} />
            <Title>{v.name}</Title>
          </IconTitleBox>
          <Link to={v.url}>
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
          </Link>
        </MenuItemBox>
      ))}
    </MenuTabContainer>
  );
};

const MenuTabContainer = styled.section``;

const MenuItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px ${({ theme }) => theme.paddings.base};
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
