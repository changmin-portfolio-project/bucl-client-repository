import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CONTACT_US_LINK, FAQ_LINK, NOTICE_LINK } from '../../../const/LinkVar';

const MenuTab: React.FC = () => {
  const tabList = [
    {
      name: '문의하기',
      icon: '/assets/HeadphoneIcon.svg',
      url: CONTACT_US_LINK,
    },
    {
      name: 'FAQ',
      icon: '/assets/PencilIcon.svg',
      url: FAQ_LINK,
    },
    {
      name: '공지사항',
      icon: '/assets/WarningIcon.svg',
      url: NOTICE_LINK,
    },
  ];
  return (
    <MenuTabContainer>
      {tabList.map((v, i) => (
        <Link to={v.url} key={i}>
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
        </Link>
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
  width: 20px;
  aspect-ratio: 1/1;
`;

export default MenuTab;
