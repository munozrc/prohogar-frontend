import React from "react";
import { Link } from "react-router-dom";
import ButtonGeneric from "../components/common/ButtonGeneric";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <ButtonGeneric typeButton={"buttom"}>Login</ButtonGeneric>
        </Link>
        <Link to="/select-account-type">
          <ButtonGeneric typeButton={"buttom"}>Sign Up</ButtonGeneric>
        </Link>
      </div>
    );
  }
}

export default MainPage;
