import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.brandPrimary};
  border: none;
  border-radius: 4px;
  font-size: 1em;
  font-weight: 500;
  color: ${({ theme }) => theme.bgWhite};
  padding: 0.87em 1.625em;
  transition: background 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.brandSecondary};
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.lightColor};
  }
`;

export default Button;
