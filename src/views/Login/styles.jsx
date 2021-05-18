import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
export const Container = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 450px;
  background: rgba(153, 170, 181, 0.1);
  border-radius: 35px;
  padding: 2em 3.2em;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 1.8em;
  line-height: 48px;
  color: #fff;
  text-align: center;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoIcon = styled.img`
  position: absolute;
  position: absolute;
  width: 15em;
  left: 3.75em;
  top: 2.9375em;
  cursor: pointer;
`;

export const LineItem = styled.div`
  display: inline-block;
  min-width: ${({ widthLine }) => widthLine}; //85px default
  min-height: 1px;
  margin-top: 0.2em;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom === "" ? "0" : marginBottom};
  background-color: #fff;
`;

export const LinkForm = styled(Link)`
  margin: 1em auto;
  font-size: 1.1em;
  color: #7289da;
`; // END Styled Components
