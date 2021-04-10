import React from "react";
import { Link } from "react-router-dom";
import NormalButton from "../components/NormalButton";

class SelectAccountType extends React.Component {
  render() {
    return (
      <>
        <h1>Seleccione su tipo de cuenta</h1>
        <Link to="/register/client">
          <NormalButton typeButton={"buttom"}>Cliente</NormalButton>
        </Link>
        <Link to="/register/professional">
          <NormalButton typeButton={"buttom"}>Profesional</NormalButton>
        </Link>
      </>
    );
  }
}

export default SelectAccountType;
