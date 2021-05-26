// Assets
import OverviewIcon from "./assets/OverviewIcon";
import JobIcon from "./assets/JobIcon";
import LogoutIcon from "./assets/LogoutIcon";
import ServicesIcon from "./assets/ServicesIcon";
import SettingsIcon from "./assets/SettingsIcon";

export const URL_SERVER =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_DEV_API_URL;

export const LINK_PRO = [
  {
    path: "/dashboard",
    icon: OverviewIcon,
    text: "Información",
  },
  {
    path: "/dashboard/services",
    icon: JobIcon,
    text: "Solicitudes",
  },
  {
    path: "/dashboard/settings",
    icon: SettingsIcon,
    text: "Configuración",
  },
  {
    path: "/logout",
    icon: LogoutIcon,
    text: "Cerrar Sesion",
  },
];

export const LINK_CLIENT = [
  {
    path: "/dashboard",
    icon: OverviewIcon,
    text: "Información",
  },
  {
    path: "/dashboard/services",
    icon: ServicesIcon,
    text: "Servicios",
  },
  {
    path: "/dashboard/settings",
    icon: SettingsIcon,
    text: "Configuración",
  },
  {
    path: "/logout",
    icon: LogoutIcon,
    text: "Cerrar Sesion",
  },
];
