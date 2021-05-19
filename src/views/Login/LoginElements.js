import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 30px 0px 30px;

  @media (min-width: 1400px) {
    padding: 120px 30px 0px 30px;
  }

  @media (max-width: 320px) {
    padding: 0px 20px 0px 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  max-width: 26.58em;
  min-height: 22.58em;
  background: ${({ theme }) => theme.bgContent};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  & > button {
    margin-top: 30px;
  }

  & > a,
  span {
    margin-top: 10px;
  }

  & > span {
    color: ${({ theme }) => theme.labelColor};
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.8em;
  font-weight: 400;
  color: ${({ theme }) => theme.lightColor};
`;
