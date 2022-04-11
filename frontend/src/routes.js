/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./pages/Dashboard";
// import UserProfile from "views/UserProfile.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import Icons from "views/Icons.js";
// import Maps from "views/Maps.js";
// import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "fas fa-chart-pie",
    component: <Dashboard/>,
    layout: "/admin",
  },
  {
    path: "/movements",
    name: "Movements",
    icon: "fas fa-hand-holding-usd",
    //component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "fas fa-file-alt",
    //component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "fas fa-user-circle",
    //component: UserProfile,
    layout: "/admin",
  }
];

export default dashboardRoutes;
