import React from "react";
import styled from "styled-components";

// Components
import WaveForm from "../common/WaveForm";
import { Link } from "react-router-dom";

// Constants
import { HOME_ROUTE } from "../../constants";

// Assets
import LogoSVG from "../../assets/logo.svg";

// Start Styles
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flexbox;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(87, 105, 170, 0.25) 0%,
      rgba(35, 39, 42, 0.25) 100%
    ),
    #23272a;
`;

export const LogoIcon = styled.img`
  position: absolute;
  position: absolute;
  width: 15em;
  left: 3.75em;
  top: 2.9375em;
  cursor: pointer;
`;

// End Styles

export default function ContainerCenter({ children }) {
  return (
    <Wrapper>
      <Link to={HOME_ROUTE}>
        <LogoIcon src={LogoSVG} />
      </Link>
      {children}
      <WaveForm up={false} />
      <WaveForm up={true} />
    </Wrapper>
  );
}
