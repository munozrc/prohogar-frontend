import { Redirect, Route } from "react-router";
import { isAuthenticated } from "../utils/isAuthenticated";

// Views
import ClientPage from "../views/ClientPage";
import NotFound from "../views/NotFound";
import ProfessionalPage from "../views/ProfessionalPage";

const getDashboardByRole = (ClientDashboard, ProDashboard, NotFoundView) => {
  try {
    const dataUser = JSON.parse(window.localStorage.getItem("USER_DATA"));
    const role = dataUser.data.user.role;
    if (role === "client") return ClientDashboard;
    else if (role === "professional") return ProDashboard;
    else return NotFoundView;
  } catch (error) {
    return NotFoundView;
  }
};

export const PrivateRoute = ({ path, component, ...props }) => {
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
    return <Redirect to={"/login"} />;
  }
};

export const PublicRoute = (props) =>
  !isAuthenticated() ? <Route {...props} /> : <Redirect to={"/dashboard"} />;
