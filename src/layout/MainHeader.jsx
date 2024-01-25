import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { Grid, useScrollTrigger, Slide } from "@mui/material";
import LogoBlack from "../assets/LogoBlack.png";

const pages = [
  { name: "HOME", path: "home" },
  { name: "OUR SERVICES", path: "services" },
  { name: "ABOUT US", path: "about" },
  { name: "CONTACT US", path: "contacts" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function MainHeader(props) {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [urlLocation, setUrlLocation] = useState("");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // Use location.pathname to get the current URL path
    const currentUrl = location.pathname;

    const firstPath = currentUrl.split("/")[1];
    console.log("path", firstPath);
    setUrlLocation(firstPath);
    // const setUrl = removePart(location)
    // Your existing removePart function can be used here if needed
  }, [location.pathname]);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            boxShadow: "none",
            background: "transparent",
            // position: "sticky",
            // top: 0,
            pt:2,
            pr:2
          }}
        >
          <Toolbar disableGutters>
            <Grid
              container
              sx={{
                display: { xs: "flex", sm: "none" },
              }}
            >
              <Grid item xs={3} pt={1} pl={2}>
                <img src={LogoBlack} width={60} />
              </Grid>
              <Grid item xs={9} display={"flex"} justifyContent={"end"}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer}
                  color="black"
                >
                  <MenuRoundedIcon fontSize="large" />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", sm: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.name}
                      component={Link}
                      to={page.path}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Grid item xs={2} pl={2}>
                <img src={LogoBlack} width={80} />
              </Grid>
              <Grid
                item
                xs={10}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
              >
                {pages.map((page) => (
                  <Box
                    key={page.name}
                    sx={{
                      bgcolor:
                        urlLocation == page.path ? "#00AC8C" : "transparent",
                      borderRadius: 1,
                      height: 40,
                      mr: 2,
                      p: 1,
                      boxShadow:
                        urlLocation == page.path
                          ? "4px 7px 5px 1px rgba(0, 0, 0, 0.2)"
                          : 0,
                      cursor: urlLocation == page.path ? "default" : "pointer",
                    }}
                    onClick={() => handleNavigation(page.path)}
                  >
                    <Typography
                      variant="button"
                      noWrap
                      sx={{
                        color: urlLocation == page.path ? "white" : "black",
                        textDecoration: "none",
                        textTransform: "none",
                        ":hover": {
                          color: urlLocation == page.path ? "white" : "#F2B51C",
                        },
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Grid container display={"flex"} justifyContent={"center"}></Grid>
        <Grid item>
          <List>
            {pages.map((page) => (
              <ListItem
                button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={toggleDrawer}
              >
                <ListItemText primary={page.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Drawer>
    </>
  );
}

export default MainHeader;
