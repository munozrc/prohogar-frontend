import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { PrivateRoute, PublicRoute } from "./components/Route";
import { Theme } from "./styles/Theme";

// Views
import MainPage from "./views/MainPage";
import Login from "./views/Login";
import ClientPage from "./views/ClientPage";
import NotFound from "./views/NotFound";
import CreateAccount from "./views/CreateAccount";
import WelcomePage from "./views/WelcomePage";
import SelectAccountType from "./views/SelectAccountType";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
