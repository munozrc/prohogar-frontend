import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon.png";

export default function PageWithGradient({ children }) {
  return (
    <WrapperSimple>
      <HeaderSimple>
        <Link to={"/"}>
          <Logo src={LogoIcon} />
        </Link>
      </HeaderSimple>
      <ContainerSimple>{children}</ContainerSimple>
    </WrapperSimple>
  );
}

const WrapperSimple = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.brandGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerSimple = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

const HeaderSimple = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1400px) {
    padding: 0 30px;
  }

  @media (max-width: 500px) {
    padding: 0 20px;
    height: 120px;
  }

  @media (max-width: 320px) {
    padding: 0 20px;
    height: 100px;
  }
`;

const Logo = styled.img`
  max-width: 180px;

  @media (max-width: 500px) {
    max-width: 150px;
  }

  @media (max-width: 320px) {
    max-width: 120px;
  }
`;
