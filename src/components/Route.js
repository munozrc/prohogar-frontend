import { Redirect, Route } from "react-router";
import { isAuthenticated } from "../utils/isAuthenticated";

// Pages
import ClientDashboard from "../pages/ClientDashboard";
import NotFound from "../pages/NotFound";
import ProfessionalPage from "../pages/ProfessionalPage";

const getDashboardByRole = (ClientDashboard, ProDashboard, NotFoundView) => {
  try {
    const { role } = JSON.parse(
      window.localStorage.getItem("loggedProhogarUser")
    );
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
        ClientDashboard,
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
