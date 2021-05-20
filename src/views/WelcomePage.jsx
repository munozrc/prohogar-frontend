import React from "react";
import Button from "../components/Button";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.showDashboard = this.showDashboard.bind(this);
  }

  showDashboard() {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <>
        <h2>WelcomePage</h2>
        <Button onClick={this.showDashboard}>Continuar</Button>
      </>
    );
  }
}

export default WelcomePage;
