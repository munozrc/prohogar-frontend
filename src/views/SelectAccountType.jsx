import React from "react";
import Button from "../components/Button";

class SelectAccountType extends React.Component {
  constructor(props) {
    super(props);
    this.showCreateAccountAsClient = this.showCreateAccountAsClient.bind(this);
    this.showCreateAccountAsPro = this.showCreateAccountAsPro.bind(this);
  }

  showCreateAccountAsClient() {
    this.props.history.push(`/register/client`);
  }

  showCreateAccountAsPro() {
    this.props.history.push(`/register/professional`);
  }

  render() {
    return (
      <>
        <h1>Seleccione su tipo de cuenta</h1>
        <Button onClick={this.showCreateAccountAsClient}>Cliente</Button>
        <Button onClick={this.showCreateAccountAsPro}>Profesional</Button>
      </>
    );
  }
}

export default SelectAccountType;
