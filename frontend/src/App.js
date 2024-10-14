import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import React from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dashboardRoutes, settingsRoutes } from "../src/routes.js";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

function App() {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Login></Login>;
  }

  console.log(user);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} element={prop.component} key={key} />;
    });
  };
  // {...props} themeComponents={xThemeComponents}
  return (
    <>
      {/* <AppTheme> */}
      <Router>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: "flex" }}>
          <Navbar />

          <ToastContainer />
          {/* Main content */}
          <Box
            component="main"
            sx={(theme) => ({
              flexGrow: 1,
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                : alpha(theme.palette.background.default, 1),
              overflow: "auto",
              width: "100%",
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 5 },
            })}
          >
            <Routes>
              {getRoutes([...dashboardRoutes, ...settingsRoutes])}
            </Routes>
          </Box>
        </Box>
      </Router>
      {/* </AppTheme> */}
    </>
  );
}

export default App;
