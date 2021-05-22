import styled from "styled-components";

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
`;

export default Button;
