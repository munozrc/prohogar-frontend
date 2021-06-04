import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, StyledToastContainer } from "./styles/GlobalStyles";
import { PrivateRoute, PublicRoute } from "./components/Route";
import { Theme } from "./styles/Theme";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import CreateAccount from "./pages/CreateAccount";
import AccountType from "./pages/AccountType";

// Utils functions
import clearDataUser from "./utils/clearDataUser";
import { UserContextProvider } from "./context/UserContext";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <UserContextProvider>
        <Router>
          <Switch>
            <PublicRoute exact path={"/"} component={Home} />
            <PublicRoute exact path={"/login"} component={Login} />
            <PublicRoute exact path={"/register"} component={AccountType} />
            <PublicRoute
              exact
              path={"/register/:type"}
              component={CreateAccount}
            />
            <PrivateRoute exact path={"/logout"} component={clearDataUser} />
            <PrivateRoute path={"/dashboard"} component={ClientDashboard} />
            <Route render={() => <Redirect to={"/"} />} />
          </Switch>
        </Router>
      </UserContextProvider>
      <StyledToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
