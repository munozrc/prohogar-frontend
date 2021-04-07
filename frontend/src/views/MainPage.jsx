import React from "react";
import { Link } from "react-router-dom";
import NormalButton from "../components/NormalButton";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <NormalButton typeButton={"buttom"}>Login</NormalButton>
        </Link>
        <Link to="/login">
          <NormalButton typeButton={"buttom"}>Sign Up</NormalButton>
        </Link>
      </div>
    );
  }
}

export default MainPage;
