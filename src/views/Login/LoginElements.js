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
`;

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  max-width: 26.58em;
  min-height: 22.58em;
  background: rgba(153, 170, 181, 0.1);
  border-radius: 4px;
  border: solid 1px rgba(255, 255, 255, 0.05);
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
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const Title = styled.h2`
  display: block;
  text-align: center;
  font-size: 1.8em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;
