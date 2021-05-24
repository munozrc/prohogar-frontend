import styled from "styled-components";
import { Link } from "react-router-dom";

// Assets
import LogoIcon from "../assets/LogoIcon.png";
import DefaultImage from "../assets/profile-image.jpg";

export default function PageDashboard({
  children,
  photo = "",
  name = "Username",
  type = "type",
}) {
  return (
    <WrapperElement>
      <HeaderElement>
        <Link to={"/"}>
          <Logo src={LogoIcon} />
        </Link>
      </HeaderElement>
      <MenuSection>Menu</MenuSection>
      <SectionUser>
        <UserImageWrapper>
          <UserImage src={photo === "" ? DefaultImage : photo} />
        </UserImageWrapper>
        <UserData>
          <UserName>{name}</UserName>
          <UserType>{type}</UserType>
        </UserData>
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

const UserImageWrapper = styled.span`
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.brandPrimary};
`;

const UserImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.brandPrimary};
  border-radius: 50%;
  object-fit: cover;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15px;
`;

const UserName = styled.h3`
  color: ${({ theme }) => theme.bgWhite};
  font-weight: 600;
`;
const UserType = styled.p`
  color: ${({ theme }) => theme.lightColor};
  font-weight: 300;
`;

// Section Content

const SectionContent = styled.div`
  grid-area: content;
`;
