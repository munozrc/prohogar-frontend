import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon.png";

export default function PageWithGradient({ children, minHeight = "800px" }) {
  return (
    <WrapperSimple minHeight={minHeight}>
      <ContainerSimple>
        <HeaderSimple>
          <Link to={"/"}>
            <Logo src={LogoIcon} />
          </Link>
        </HeaderSimple>
        {children}
      </ContainerSimple>
    </WrapperSimple>
  );
}

const WrapperSimple = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: ${({ minHeight }) => minHeight};
  background: ${({ theme }) => theme.brandGradient};
  display: flex;
  justify-content: center;
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
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1400px) {
    padding: 0 30px;
  }

  @media (max-width: 500px) {
    padding: 0 30px;
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
