import React from "react";
import { Link } from "wouter";
import NormalButton from "../components/NormalButton";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NormalButton typeButton={"buttom"}>
          <Link href="/login">Login</Link>
        </NormalButton>
        <NormalButton typeButton={"buttom"}>
          <Link href="/login">Sign Up</Link>
        </NormalButton>
      </div>
    );
  }
}

export default MainPage;
