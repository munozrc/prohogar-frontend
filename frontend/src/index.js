import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Router, Route } from "wouter";

// Views
import ClientPage from "./views/ClientPage";
import LoginPage from "./views/LoginPage";
import MainPage from "./views/MainPage";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router base="/prohogar">
      <Route path="/" component={MainPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/client" component={ClientPage} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
