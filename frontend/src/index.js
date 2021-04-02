import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "wouter";

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
    <Switch>
      <Route path="/" component={MainPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </React.StrictMode>,
  document.getElementById("root")
);
