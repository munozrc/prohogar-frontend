import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 140px;
  max-width: 140px;
  background-color: #7289da;
  padding: 0.6em 0;
  font-size: 1em;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: ${({ center }) => (center ? "0 auto" : "0")};
  transition: background-color 0.2s ease 0s;

  & a {
    color: #fff;
    text-decoration: none;
  }

  :hover {
    background-color: #7d92dd;
  }
`;

const ButtonGeneric = ({
  typeButton = "button",
  center = false,
  children,
  ...props
}) => {
  return (
    <Button type={typeButton} center={center} {...props}>
      {children}
    </Button>
  );
};

export default ButtonGeneric;
