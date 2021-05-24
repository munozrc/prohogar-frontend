import styled from "styled-components";
import { Link } from "react-router-dom";

// Assets
import LogoIcon from "../assets/LogoIcon.png";
import { Avatar } from "../components/Avatar";

export default function PageDashboard({ children, photo, name, type }) {
  return (
    <WrapperElement>
      <HeaderElement>
        <Link to={"/"}>
          <Logo src={LogoIcon} />
        </Link>
      </HeaderElement>
      <MenuSection>Menu</MenuSection>
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
  grid-template-columns: 250px 1fr;
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

const MenuSection = styled.div`
  grid-area: menu;
`;

// Section User
const SectionUser = styled.div`
  position: relative;
  grid-area: user;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Section Content
const SectionContent = styled.div`
  grid-area: content;
`;
