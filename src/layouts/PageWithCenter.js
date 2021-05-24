import styled from "styled-components";
import { Link } from "react-router-dom";

// Assets
import LogoIcon from "../assets/LogoIcon.png";

export default function PageWithCenter({ children }) {
  return (
    <WrapperMain>
      <HeaderElement>
        <HeaderContainer>
          <Link to={"/"}>
            <Logo src={LogoIcon} />
          </Link>
        </HeaderContainer>
      </HeaderElement>
      {children}
    </WrapperMain>
  );
}

const WrapperMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.bgWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderElement = styled.header`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.brandDark};
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.img`
  max-width: 130px;
`;
