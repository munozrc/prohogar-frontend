import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon.png";

export default function LogoLink(props) {
  return (
    <Link to={"/"} {...props}>
      <Logo src={LogoIcon} />
    </Link>
  );
}

const Logo = styled.img`
  max-width: 130px;
`;
