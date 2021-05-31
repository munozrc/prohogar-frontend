import styled from "styled-components";

export const TabContainer = styled.div`
  width: 100%;
  padding: 20px;

  @media (max-width: 360px) {
    padding: 10px;
  }
`;

export const TabTitle = styled.h2`
  color: ${({ theme }) => theme.lightColor};
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 3px;
  border-bottom: solid 1.5px ${({ theme }) => theme.lightColor};

  @media (max-width: 360px) {
    margin-bottom: 15px;
  }
`;
