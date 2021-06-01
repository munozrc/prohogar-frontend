import { useState } from "react";
import styled from "styled-components";

// Local Custom Components
import SelectCategory from "./SelectCategory";

export default function ServiceForm() {
  const [state, setState] = useState("select-category");
  return (
    <WrapperElement>
      {state === "select-category" && <SelectCategory />}
    </WrapperElement>
  );
}

const WrapperElement = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 500px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  background: ${({ theme }) => theme.bgContent};
`;
