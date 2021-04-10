import React from "react";
import ButtonGeneric from "../components/common/ButtonGeneric";
import {
  CLIENT_USER,
  PROFESSIONAL_USER,
  CREATE_ACCOUNT_ROUTE_ACCESS,
} from "../constants";

class SelectAccountType extends React.Component {
  constructor(props) {
    super(props);
    this.showCreateAccountAsClient = this.showCreateAccountAsClient.bind(this);
    this.showCreateAccountAsPro = this.showCreateAccountAsPro.bind(this);
  }

  showCreateAccountAsClient() {
    this.props.history.push(`${CREATE_ACCOUNT_ROUTE_ACCESS}/${CLIENT_USER}`);
  }

  showCreateAccountAsPro() {
    this.props.history.push(
      `${CREATE_ACCOUNT_ROUTE_ACCESS}/${PROFESSIONAL_USER}`
    );
  }

  render() {
    return (
      <>
        <h1>Seleccione su tipo de cuenta</h1>
        <ButtonGeneric
          typeButton={"buttom"}
          onClick={this.showCreateAccountAsClient}
        >
          Cliente
        </ButtonGeneric>
        <ButtonGeneric
          typeButton={"buttom"}
          onClick={this.showCreateAccountAsPro}
        >
          Profesional
        </ButtonGeneric>
      </>
    );
  }
}

export default SelectAccountType;
