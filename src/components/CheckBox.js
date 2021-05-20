import { forwardRef } from "react";
import styled from "styled-components";

const CheckBox = forwardRef(({ children }, ref) => {
  return (
    <Container>
      <CheckElement ref={ref} type={"checkbox"} />
      <LabelElement>{children}</LabelElement>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
`;

const CheckElement = styled.input`
  display: inline-flex;
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
  margin-right: 10px;
  outline: none;
  background-color: ${({ theme }) => theme.brandPrimary};

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.brandPrimary};
  }
`;

const LabelElement = styled.label`
  font-size: 0.85em;
  color: ${({ theme }) => theme.labelColor};
`;

export default CheckBox;
