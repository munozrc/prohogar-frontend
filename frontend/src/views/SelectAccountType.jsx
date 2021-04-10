import React from "react";
import { Link } from "react-router-dom";
import ButtonGeneric from "../components/common/ButtonGeneric";

class SelectAccountType extends React.Component {
  render() {
    return (
      <>
        <h1>Seleccione su tipo de cuenta</h1>
        <Link to="/register/client">
          <ButtonGeneric typeButton={"buttom"}>Cliente</ButtonGeneric>
        </Link>
        <Link to="/register/professional">
          <ButtonGeneric typeButton={"buttom"}>Profesional</ButtonGeneric>
        </Link>
      </>
    );
  }
}

export default SelectAccountType;
