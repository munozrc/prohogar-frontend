import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Custom Components
import Avatar from "../components/Avatar";

// Assets
import LogoIcon from "../assets/LogoIcon.png";
import OverviewIcon from "../assets/OverviewIcon";
import JobIcon from "../assets/JobIcon";

export default function PageDashboard({ children, photo, name, type }) {
  return (
    <WrapperElement>
      <HeaderElement>
        <Link to={"/"}>
          <Logo src={LogoIcon} />
        </Link>
      </HeaderElement>
      <MenuSection>
        <MenuTitle>Menu</MenuTitle>
        <MenuItem to="/" active>
          <OverviewIcon />
          Informacion General
        </MenuItem>
        <MenuItem to="/">
          <JobIcon />
          Solicitudes
        </MenuItem>
      </MenuSection>
      <SectionUser>
        <Avatar photo={photo} name={name} type={type} />
      </SectionUser>
      <SectionContent>{children}</SectionContent>
    </WrapperElement>
  );
}

const WrapperElement = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.brandGradient};
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    "logo content"
    "menu content"
    "user content";
`;

const HeaderElement = styled.header`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 130px;
`;

// Section Menu
const MenuSection = styled.div`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;

  & > a {
    margin-bottom: 10px;
  }
`;

const MenuTitle = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.lightColor};
  font-weight: 600;
  text-align: left;
  margin-bottom: 10px;
  font-size: 16px;
  padding-left: 15px;
`;

const MenuItem = styled(Link)`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.lightColor};
  font-weight: 400;
  font-size: 16px;
  border-radius: 4px;
  padding-left: 15px;
  background: transparent;
  transition: background 0.3s ease;
  outline: none;

  & > svg {
    font-size: 24px;
    fill: ${({ theme }) => theme.lightColor};
    stroke: ${({ theme }) => theme.lightColor};
    margin-right: 10px;
  }

  &:hover {
    background: ${({ theme }) => theme.brandPrimary};
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.lightColor};
  }

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.brandPrimary};
    `}
`;

// Section User
const SectionUser = styled.div`
  position: relative;
  grid-area: user;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
`;

// Section Content
const SectionContent = styled.div`
  grid-area: content;
  border-left: solid 1px ${({ theme }) => theme.borderLightColor};
`;
