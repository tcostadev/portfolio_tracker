import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography, Avatar } from "@mui/material";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import { dashboardRoutes } from "../../routes.js";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import OptionsMenu from "./OptionsMenu.tsx";
import logo from "../../../src/assets/img/logo.svg";

const drawerWidth = 240;
const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

function Navbar() {
  const { user } = useSelector((state) => state["auth"]);

  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route); // Replace with the desired route
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          p: 2,
        }}
      >
        <Box sx={{ width: 50 }}>
          <img src={logo} alt="Logo" style={{ maxWidth: "100%" }} />
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              lineHeight: "16px",
              textDecoration: "bold",
            }}
          >
            Portfolio Tracker
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{
          flexGrow: 1,
          p: 1,
          justifyContent: "space-between",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <List dense>
          {dashboardRoutes.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={index === 0}
                onClick={() => handleClick(item.path)}
              >
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>

      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            {user.name}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {user.email}
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}

export default Navbar;
