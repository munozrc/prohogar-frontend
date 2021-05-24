// Assets
import OverviewIcon from "./assets/OverviewIcon";
import JobIcon from "./assets/JobIcon";
import LogoutIcon from "./assets/LogoutIcon";

export const URL_SERVER =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export const LINK_PRO = [
  {
    path: "/dashboard",
    icon: OverviewIcon,
    text: "Información General",
  },
  {
    path: "/",
    icon: JobIcon,
    text: "Solicitudes",
  },
  {
    path: "/logout",
    icon: LogoutIcon,
    text: "Cerrar Sesion",
  },
];
