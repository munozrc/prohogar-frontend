import React from "react";
import ReactDOM from "react-dom";
import decode from "jwt-decode";
import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "normalize.css";

import MainPage from "./views/MainPage";
import LoginPage from "./views/LoginPage";
import ClientPage from "./views/ClientPage";
import ProfessionalPage from "./views/ProfessionalPage";

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

const isAuthenticated = () => {
  const userCurrent = JSON.parse(window.localStorage.getItem("AppUser"));
  let isValid = true;
  try {
    isValid = decode(userCurrent.data.jwt);
  } catch (error) {
    return false;
  }
  return isValid;
};

const roleDashboard = (ClientDashboard, ProDashboard) => {
  const userCurrent = JSON.parse(window.localStorage.getItem("AppUser"));
  try {
    if (userCurrent.data.user.role === "client") return ClientDashboard;
    else if (userCurrent.data.user.role === "professional") return ProDashboard;
  } catch (error) {}
};

const PrivateRoute = (props) =>
  isAuthenticated() ? <Route {...props} /> : <Redirect to="/login" />;

const PublicRoute = (props) =>
  !isAuthenticated() ? <Route {...props} /> : <Redirect to="/dashboard" />;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={MainPage} />
        <PublicRoute exact path="/login" component={LoginPage} />
        <PrivateRoute
          exact
          path="/dashboard"
          component={roleDashboard(ClientPage, ProfessionalPage)}
        />
        <Redirect path="/**" to={isAuthenticated() ? "dashboard" : "/"} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
