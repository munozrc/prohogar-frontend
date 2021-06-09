// Assets
import OverviewIcon from "./assets/OverviewIcon";
import JobIcon from "./assets/JobIcon";
import LogoutIcon from "./assets/LogoutIcon";
import ServicesIcon from "./assets/ServicesIcon";
import SettingsIcon from "./assets/SettingsIcon";
import ContractIcon from "./assets/ContractIcon";

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
    path: "/dashboard/requests",
    icon: JobIcon,
    text: "Solicitudes",
  },
  {
    path: "/dashboard/contracts",
    icon: ContractIcon,
    text: "Contratos",
  },
  {
    path: "/dashboard/settings",
    icon: SettingsIcon,
    text: "Configuración",
  },
  {
    path: "/dashboard/logout",
    icon: LogoutIcon,
    text: "Cerrar Sesión",
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
    path: "/dashboard/contracts",
    icon: ContractIcon,
    text: "Contratos",
  },
  {
    path: "/dashboard/settings",
    icon: SettingsIcon,
    text: "Configuración",
  },
  {
    path: "/dashboard/logout",
    icon: LogoutIcon,
    text: "Cerrar Sesión",
  },
];

export const CategoryIcons = {
  Albañil:
    "https://s3.amazonaws.com/timbrit-produccion/icono_albanil_thumb.png",
  Mudanzas:
    "https://s3.amazonaws.com/timbrit-produccion/icono_mudanzas_thumb.png",
  Plomero:
    "https://s3.amazonaws.com/timbrit-produccion/icono_plomero_thumb.png",
  Tapicero:
    "https://s3.amazonaws.com/timbrit-produccion/icono_tapicero_thumb.png",
};

export const CategoryStatement = {
  Albañil: "No dejes que tu casa se caiga a pedazos, dinos tu problema...",
  Mudanzas: "¿Vas a mudarte?, déjanos ayudarte...",
  Plomero: "Tuberías tapadas, olores extraños, déjalo en nuestras manos...",
  Tapicero: "¿Muebles o sillas viejas?, déjanos renovarlos por ti...",
};
