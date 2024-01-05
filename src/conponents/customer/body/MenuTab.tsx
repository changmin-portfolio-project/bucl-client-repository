import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuTab: React.FC = () => {
  const tabList = [
    {
      name: '문의하기',
      icon: '/assets/HeadphoneIcon.svg',
      url: '/my/contacts',
    },
    {
      name: 'FAQ',
      icon: '/assets/PencilIcon.svg',
      url: '/my/contacts',
    },
    {
      name: '공지사항',
      icon: '/assets/WarningIcon.svg',
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
  padding: 15px 7%;
  width: calc(100% - 14%);
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
  width: 20px;
  aspect-ratio: 1/1;
`;

export default MenuTab;
