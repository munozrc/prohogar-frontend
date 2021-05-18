import React from "react";
import ButtonGeneric from "../components/common/ButtonGeneric";

class SelectAccountType extends React.Component {
  constructor(props) {
    super(props);
    this.showCreateAccountAsClient = this.showCreateAccountAsClient.bind(this);
    this.showCreateAccountAsPro = this.showCreateAccountAsPro.bind(this);
  }

  showCreateAccountAsClient() {
    this.props.history.push(`/create-account/client`);
  }

  showCreateAccountAsPro() {
    this.props.history.push(`/create-account/professional`);
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
