import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, StyledToastContainer } from "./styles/GlobalStyles";
import { PrivateRoute, PublicRoute } from "./components/Route";
import { Theme } from "./styles/Theme";

// Pages
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import ClientPage from "./pages/ClientPage";
import NotFound from "./pages/NotFound";
import CreateAccount from "./pages/CreateAccount";
import WelcomePage from "./pages/WelcomePage";
import SelectAccountType from "./pages/SelectAccountType";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <PublicRoute exact path={"/"} component={MainPage} />
          <PublicRoute exact path={"/login"} component={Login} />
          <PublicRoute exact path={"/register"} component={SelectAccountType} />
          <PublicRoute
            exact
            path={"/register/:type"}
            component={CreateAccount}
          />
          <PrivateRoute exact path={"/dashboard"} component={ClientPage} />
          <PrivateRoute exact path={"/welcome"} component={WelcomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <StyledToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
