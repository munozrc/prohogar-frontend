import React from "react";
import { Link } from "react-router-dom";
import ButtonGeneric from "../components/common/ButtonGeneric";
import { LOGIN_ROUTE, SELECT_ACCOUNT_ROUTE } from "../constants";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Link to={LOGIN_ROUTE}>
          <ButtonGeneric typeButton={"buttom"}>Login</ButtonGeneric>
        </Link>
        <Link to={SELECT_ACCOUNT_ROUTE}>
          <ButtonGeneric typeButton={"buttom"}>Sign Up</ButtonGeneric>
        </Link>
      </div>
    );
  }
}

export default MainPage;
