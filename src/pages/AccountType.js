import styled from "styled-components";
import { Link } from "react-router-dom";

// Custom Components
import PageWithGradient from "../layouts/PageWithGradient";
import { TitleForm } from "../layouts/TitleForm";

// Assets
import ClientIcon from "../assets/client-icon.svg";
import ProIcon from "../assets/professional-icon.svg";

export default function AccountType() {
  return (
    <PageWithGradient>
      <BoxElement>
        <TitleForm>¿Cómo desea registrarse?</TitleForm>
        <WrapperCard>
          <CardElement to={"/register/client"} role={"button"}>
            <IconElement src={ClientIcon} alt={"icon cliente prohogar"} />
            Cliente
          </CardElement>
          <CardElement to={"/register/professional"} role={"button"}>
            <IconElement src={ProIcon} alt={"icon professional prohogar"} />
            Profesional
          </CardElement>
        </WrapperCard>
      </BoxElement>
    </PageWithGradient>
  );
}

const BoxElement = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperCard = styled.div`
  display: flex;
  margin-top: 30px;

  & > a {
    margin: 0px 20px;
  }
`;

const CardElement = styled(Link)`
  width: 142px;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.bgContent};
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.bgWhite};
  border: solid 1px ${({ theme }) => theme.borderLightColor};
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  border-radius: 4px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    border: solid 1px ${({ theme }) => theme.brandPrimary};
  }
`;

const IconElement = styled.img`
  max-width: 100px;
  margin-bottom: 10px;
`;
