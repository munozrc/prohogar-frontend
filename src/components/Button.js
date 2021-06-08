import styled, { css } from "styled-components";
import ArrowBackIcon from "../assets/ArrowBackIcon";

const Button = styled.button`
  height: 44px;
  min-width: 130px;
  min-height: 44px;
  background: ${({ theme }) => theme.brandPrimary};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.bgWhite};
  padding: 2px 16px;
  transition: background 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.brandSecondary};
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.lightColor};
  }

  ${(p) =>
    p.variant === "subtn" &&
    css`
      width: fit-content;
      height: 32px;
      min-width: fit-content;
      min-height: 32px;
      font-size: 14px;
      padding: 5px 16px;
      margin-left: auto;
    `}

  ${(p) =>
    p.variant === "outline" &&
    css`
      background-color: transparent;
      border: solid 1px ${({ theme }) => theme.lightColor};
      color: ${({ theme }) => theme.lightColor};

      &:hover {
        background: ${({ theme }) => theme.brandPrimary};
        border: solid 1px ${({ theme }) => theme.brandPrimary};
        color: ${({ theme }) => theme.bgwhite};
      }

      @media (max-width: 380px) {
        min-width: 100px;
      }
    `}
`;

export const ArrowButton = styled(ArrowBackIcon)`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 40px;
  height: 40px;
  padding: 5px;
  color: ${({ theme }) => theme.bgWhite};
  font-size: 30px;
  margin-left: auto;
  border-radius: 50%;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.bgContent};
  }
`;

export default Button;
