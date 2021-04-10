import React from "react";
import { Link } from "react-router-dom";
import ButtonGeneric from "../components/common/ButtonGeneric";
import {
  CLIENT_USER,
  PROFESSIONAL_USER,
  CREATE_ACCOUNT_ROUTE_ACCESS,
} from "../constants";

class SelectAccountType extends React.Component {
  render() {
    return (
      <>
        <h1>Seleccione su tipo de cuenta</h1>
        <Link to={`${CREATE_ACCOUNT_ROUTE_ACCESS}/${CLIENT_USER}`}>
          <ButtonGeneric typeButton={"buttom"}>Cliente</ButtonGeneric>
        </Link>
        <Link to={`${CREATE_ACCOUNT_ROUTE_ACCESS}/${PROFESSIONAL_USER}`}>
          <ButtonGeneric typeButton={"buttom"}>Profesional</ButtonGeneric>
        </Link>
      </>
    );
  }
}

export default SelectAccountType;
