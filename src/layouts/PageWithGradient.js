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
      {children}
    </WrapperSimple>
  );
}

const WrapperSimple = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.brandGradient};
`;

const HeaderSimple = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 1;

  @media (max-width: 320px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  max-width: 130px;
`;
