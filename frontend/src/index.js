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
import NotFound from "./views/NotFound";
import CreateAccount from "./views/CreateAccount";
import WelcomePage from "./views/WelcomePage";
import SelectAccountType from "./views/SelectAccountType";

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

const getDashboardByRole = (ClientDashboard, ProDashboard, NotFoundView) => {
  const userCurrent = JSON.parse(window.localStorage.getItem("AppUser"));
  try {
    if (userCurrent.data.user.role === "client") return ClientDashboard;
    else if (userCurrent.data.user.role === "professional") return ProDashboard;
    else return NotFoundView;
  } catch (error) {
    return NotFoundView;
  }
};

const PrivateRoute = ({ path, component, ...props }) => {
  if (isAuthenticated()) {
    if (path === "/dashboard") {
      const viewDashboard = getDashboardByRole(
        ClientPage,
        ProfessionalPage,
        NotFound
      );
      return <Route {...props} path={path} component={viewDashboard} />;
    } else {
      return <Route {...props} path={path} component={component} />;
    }
  } else {
    return <Redirect to="/login" />;
  }
};

const PublicRoute = (props) =>
  !isAuthenticated() ? <Route {...props} /> : <Redirect to="/dashboard" />;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={MainPage} />
        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute
          exact
          path="/select-account-type"
          component={SelectAccountType}
        />
        <PublicRoute exact path="/register/:type" component={CreateAccount} />
        <PrivateRoute exact path="/dashboard" component={ClientPage} />
        <PrivateRoute exact path="/welcome" component={WelcomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
