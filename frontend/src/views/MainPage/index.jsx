import React from "react";
import { Link } from "wouter";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Link href="/login">Login</Link>
        <Link href="/login">Sign Up</Link>
      </div>
    );
  }
}

export default MainPage;
