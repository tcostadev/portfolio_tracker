import Dashboard from "./pages/Dashboard";
import Movements from "./components/Movements/Movements";
import Categories from "./components/Categories/Categories";
import User from "./components/User/User";

export const dashboardRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "fas fa-chart-pie",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/movements",
    name: "Movements",
    icon: "fas fa-hand-holding-usd",
    component: <Movements />,
    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "fas fa-file-alt",
    component: <Categories />,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Profile",
    icon: "fas fa-file-alt",
    component: <User />,
    layout: "/admin",
  },
];

export const settingsRoutes = [
  {
    path: "/categories",
    name: "Logout",
    icon: "fas fa-file-alt",
    component: <Categories />,
    layout: "/admin",
  },
];
