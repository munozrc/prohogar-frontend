import { Link } from "react-router-dom";
import styled from "styled-components";

const TextLink = styled(Link)`
  max-width: fit-content;
  color: #7289da;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  outline: none;

  &:hover {
    color: #5865f2;
  }

  &:focus {
    text-decoration: underline;
  }
`;

export default TextLink;
