import { useState } from "react";
import styled from "styled-components";

// Local Custom Components
import SelectCategory from "./SelectCategory";
import EntryData from "./EntryData";

export default function ServiceForm() {
  const [state, setState] = useState({ step: "select-category", value: null });
  return (
    <WrapperElement>
      {state.step === "select-category" && (
        <SelectCategory changeStep={setState} />
      )}
      {state.step === "entry-data" && (
        <EntryData changeStep={setState} category={state.value} />
      )}
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
