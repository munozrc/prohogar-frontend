import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.bgContent};
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  padding: 30px;
  margin: 30px 0px;

  & > button {
    margin-top: 15px;
  }

  & > a {
    margin-top: 5px;
  }

  & > span {
    color: ${({ theme }) => theme.labelColor};
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.lightColor};
`;
