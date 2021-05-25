import { Redirect, Route } from "react-router";
import { isAuthenticated } from "../utils/isAuthenticated";

// Pages
import ClientDashboard from "../pages/ClientDashboard";
import ProDashboard from "../pages/ProDashboard";

const getDashboardByRole = (ClientDashboard, ProDashboard) => {
  try {
    const { role } = JSON.parse(
      window.localStorage.getItem("loggedProhogarUser")
    );
    if (role === "client") return ClientDashboard;
    else if (role === "professional") return ProDashboard;
    else return <Redirect to={"/"} />;
  } catch (error) {
    return <Redirect to={"/"} />;
  }
};

export const PrivateRoute = ({ path, component, ...props }) => {
  if (isAuthenticated()) {
    if (path === "/dashboard") {
      const viewDashboard = getDashboardByRole(ClientDashboard, ProDashboard);
      return <Route {...props} path={path} component={viewDashboard} />;
    } else {
      return <Route {...props} path={path} component={component} />;
    }
  } else {
    return <Redirect to={"/login"} />;
  }
};

export const PublicRoute = (props) =>
  !isAuthenticated() ? <Route {...props} /> : <Redirect to={"/dashboard"} />;
