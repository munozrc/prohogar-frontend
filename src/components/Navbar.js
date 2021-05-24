import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ links = [] }) {
  let location = useLocation();
  return (
    <Nav>
      <Title>Menu</Title>
      {links.map((link) => (
        <NavItem
          key={link.text}
          to={link.path}
          variant={link.path === location.pathname ? "isActive" : ""}
        >
          <link.icon />
          {link.text}
        </NavItem>
      ))}
    </Nav>
  );
}

const Nav = styled.nav`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;

  & > a {
    margin-bottom: 10px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Title = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.lightColor};
  font-weight: 300;
  text-align: left;
  margin-bottom: 10px;
  font-size: 16px;
  padding-left: 15px;
`;

const NavItem = styled(Link)`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.lightColor};
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;
  padding-left: 15px;
  background: transparent;
  transition: background 0.3s ease;
  outline: none;
  cursor: pointer;

  & > svg {
    font-size: 24px;
    fill: ${({ theme }) => theme.lightColor};
    stroke: ${({ theme }) => theme.lightColor};
    margin-right: 10px;
  }

  &:hover {
    background: ${({ theme }) => theme.brandPrimary};
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.lightColor};
  }

  ${({ variant }) =>
    variant === "isActive" &&
    css`
      background: ${({ theme }) => theme.brandPrimary};
    `}
`;
