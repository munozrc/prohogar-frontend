import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, StyledToastContainer } from "./styles/GlobalStyles";
import { PrivateRoute, PublicRoute } from "./components/Route";
import { Theme } from "./styles/Theme";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import NotFound from "./pages/NotFound";
import CreateAccount from "./pages/CreateAccount";
import WelcomePage from "./pages/WelcomePage";
import AccountType from "./pages/AccountType";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
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
          <PrivateRoute exact path={"/dashboard"} component={ClientDashboard} />
          <PrivateRoute exact path={"/welcome"} component={WelcomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <StyledToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
