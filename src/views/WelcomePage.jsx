import React from "react";
import ButtonGeneric from "../components/common/ButtonGeneric";
import { DASHBOARD_ROUTE } from "../constants";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.showDashboard = this.showDashboard.bind(this);
  }

  showDashboard() {
    this.props.history.push(DASHBOARD_ROUTE);
  }

  render() {
    return (
      <>
        <h2>WelcomePage</h2>
        <ButtonGeneric typeButton={"buttom"} onClick={this.showDashboard}>
          Continuar
        </ButtonGeneric>
      </>
    );
  }
}

export default WelcomePage;
