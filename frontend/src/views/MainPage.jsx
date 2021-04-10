import React from "react";
import ButtonGeneric from "../components/common/ButtonGeneric";
import { LOGIN_ROUTE, SELECT_ACCOUNT_ROUTE } from "../constants";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.showLoginPage = this.showLoginPage.bind(this);
    this.showSelectAccountPage = this.showSelectAccountPage.bind(this);
  }

  showLoginPage() {
    this.props.history.push(LOGIN_ROUTE);
  }

  showSelectAccountPage() {
    this.props.history.push(SELECT_ACCOUNT_ROUTE);
  }

  render() {
    return (
      <div>
        <ButtonGeneric typeButton={"buttom"} onClick={this.showLoginPage}>
          Iniciar Sesión
        </ButtonGeneric>
        <ButtonGeneric
          typeButton={"buttom"}
          onClick={this.showSelectAccountPage}
        >
          Crear Cuenta
        </ButtonGeneric>
      </div>
    );
  }
}

export default MainPage;
