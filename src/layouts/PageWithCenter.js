import styled from "styled-components";
import { Link } from "react-router-dom";

// Custom Components
import LogoLink from "../components/LogoLink";
import { fadeUpDown } from "../styles/Animations";

export default function PageWithCenter({ children }) {
  return (
    <WrapperMain>
      <HeaderElement>
        <HeaderContainer>
          <LogoLink />
          <ButtonLogin to={"/login"}>Login</ButtonLogin>
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
  animation: ${fadeUpDown} 0.8s ease;
`;

const HeaderElement = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.brandDark};
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const ButtonLogin = styled(Link)`
  height: 35px;
  min-height: 35px;
  background: ${({ theme }) => theme.brandPrimary};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.bgWhite};
  padding: 5px 16px;
  transition: background 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.brandSecondary};
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.lightColor};
  }
`;
