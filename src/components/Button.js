import styled from "styled-components";

const Button = styled.button`
  background: #5865f2;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  font-weight: 500;
  color: #fff;
  padding: 0.75em 1.625em;
  transition: background 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #7289da;
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(255, 255, 255, 0.8);
  }
`;

export default Button;
