import styled, { css } from "styled-components";

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
      border: solid 2px ${({ theme }) => theme.lightColor};
      color: ${({ theme }) => theme.lightColor};

      &:hover {
        background: ${({ theme }) => theme.brandPrimary};
        border: solid 2px ${({ theme }) => theme.brandPrimary};
        color: ${({ theme }) => theme.bgwhite};
      }

      @media (max-width: 380px) {
        min-width: 100px;
      }
    `}
`;

export default Button;
