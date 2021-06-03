import styled from "styled-components";
import { fadeIn } from "../styles/Animations";

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

export const NewContent = styled.span`
  position: fixed;
  top: 50px;
  left: 53.5%;
  color: ${({ theme }) => theme.lightColor};
  background: ${({ theme }) => theme.brandDark};
  padding: 15px 20px;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.3s ease;
  animation: ${fadeIn} 0.3s;
  font-size: 16px;
  font-weight: 500;
  border: solid 1px ${({ theme }) => theme.labelColor};
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  z-index: 2;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.brandPrimary};
  }

  @media (max-width: 1000px) {
    top: 120px;
    left: 26%;
  }
`;
