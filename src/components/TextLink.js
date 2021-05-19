import { Link } from "react-router-dom";
import styled from "styled-components";

const TextLink = styled(Link)`
  max-width: fit-content;
  color: ${({ theme }) => theme.brandSecondary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  outline: none;

  &:hover {
    color: ${({ theme }) => theme.brandPrimary};
  }

  &:focus {
    text-decoration: underline;
  }
`;

export default TextLink;
