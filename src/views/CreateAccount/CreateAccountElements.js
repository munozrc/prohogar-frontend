import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 30px 0px 30px;

  @media (max-width: 500px) {
    padding: 0px 20px 0px 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  max-width: 26.58em;
  min-height: 22.58em;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bgContent};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  padding: 30px;

  & > button {
    margin: 5px 0px;
  }
`;