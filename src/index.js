import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { PrivateRoute, PublicRoute } from "./components/Routes";

// Normalice Styles Css
import "normalize.css";

// Views
import MainPage from "./views/MainPage";
import LoginPage from "./views/LoginPage";
import ClientPage from "./views/ClientPage";
import NotFound from "./views/NotFound";
import CreateAccount from "./views/CreateAccount";
import WelcomePage from "./views/WelcomePage";
import SelectAccountType from "./views/SelectAccountType";

// END Methods

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <Switch>
        <PublicRoute exact path={"/"} component={MainPage} />
        <PublicRoute exact path={"/login"} component={LoginPage} />
        <PublicRoute
          exact
          path={"/select-account-type"}
          component={SelectAccountType}
        />
        <PublicRoute
          exact
          path={"/create-account/:type"}
          component={CreateAccount}
        />
        <PrivateRoute exact path={"/dashboard"} component={ClientPage} />
        <PrivateRoute exact path={"/welcome"} component={WelcomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
