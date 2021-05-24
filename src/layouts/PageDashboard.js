import styled from "styled-components";

// Custom Components
import Avatar from "../components/Avatar";
import LogoLink from "./LogoLink";

// Assets
import MenuIcon from "../assets/MenuIcon";
import Navbar from "../components/Navbar";

export default function PageDashboard({ children, photo, name, type, links }) {
  return (
    <WrapperElement>
      <HeaderElement>
        <LogoLink />
        <HeaderMenuIcon>
          <MenuIcon />
        </HeaderMenuIcon>
      </HeaderElement>
      <Navbar links={links} />
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

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas:
      "logo"
      "content";
  }
`;

const HeaderElement = styled.header`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    justify-content: space-between;
    padding: 0px 30px;
    border-bottom: solid 1px ${({ theme }) => theme.borderLightColor};
  }
`;

const HeaderMenuIcon = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  border: none;
  border-radius: 4px;
  padding: 5px;
  color: ${({ theme }) => theme.lightColor};
  background: transparent;
  transition: background 0.3s ease;
  outline: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: flex;
  }

  &:hover {
    background: ${({ theme }) => theme.brandPrimary};
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.lightColor};
  }
`;

// Section Menu

// Section User
const SectionUser = styled.div`
  position: relative;
  grid-area: user;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

// Section Content
const SectionContent = styled.div`
  grid-area: content;
  border-left: solid 1px ${({ theme }) => theme.borderLightColor};
`;
