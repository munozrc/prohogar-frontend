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
`;

const NormalButton = ({ text, center }) => {
  return (
    <Button type="submit" center={center}>
      {text}
    </Button>
  );
};

export default NormalButton;
