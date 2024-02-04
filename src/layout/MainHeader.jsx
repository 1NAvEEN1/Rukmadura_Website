import React, { useEffect, useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Grid,
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoBlack from "../assets/LogoBlack.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const pages = [
  { name: "HOME", path: "home" },
  {
    name: "OUR SERVICES",
    path: "services",
    subMenus: [
      { name: "Kids Play Area", path: "services/kids_play_area" },
      { name: "Tree Houses", path: "services/tree_houses" },
      { name: "Chalets", path: "services/chalets" },
      { name: "Tiny Houses", path: "services/tiny_houses" },
    ],
  },
  { name: "ABOUT US", path: "about" },
  { name: "GALLERY", path: "gallery" },
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
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [urlLocation, setUrlLocation] = useState("");
  const [urlLocation2, setUrlLocation2] = useState("");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
    scrollToTop();
  };

  // State and handlers for the Menu component
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, pageName) => {
    if (pageName == "OUR SERVICES") {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const currentUrl = location.pathname;
    const pathSegments = currentUrl.split("/");
    const firstPath = pathSegments[2];
    const secondPath = pathSegments[3]; // Access the second path segment
    setUrlLocation(firstPath);
    setUrlLocation2(secondPath);
    // Assuming you want to navigate to "home" when the firstPath is empty or undefined
    if (!firstPath) {
      navigate("home");
    }
  }, [location.pathname]);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            boxShadow: "none",
            background: "#e2f0ea",
            position: "fixed",
            top: 0,
            pt: 2,
            pr: { xs: 0, md: 3 },
            mr: { xs: -1, md: 0 },
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
                <Box sx={{ ml: { xs: -1.5, md: 0 } }}>
                  <img src={LogoBlack} width={80} />
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
              >
                {pages.map((page) => (
                  <div>
                    <Box
                      key={page.name}
                      sx={{
                        bgcolor:
                          urlLocation == page.path
                            ? "#00AC8C"
                            : open && page.path == "services"
                            ? "#00AC8C"
                            : "transparent",
                        borderRadius: 1,
                        height: 40,
                        mr: 2,
                        p: 1,
                        boxShadow:
                          urlLocation == page.path
                            ? "4px 7px 5px 1px rgba(0, 0, 0, 0.2)"
                            : 0,
                        cursor:
                          urlLocation == page.path ? "default" : "pointer",
                      }}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e) => {
                        if (page.path == "services") {
                          handleClick(e, page.name);
                        } else {
                          handleNavigation(page.path);
                        }
                      }}
                    >
                      <Typography
                        variant="button"
                        noWrap
                        sx={{
                          color: urlLocation == page.path ? "white" : "black",
                          textDecoration: "none",
                          textTransform: "none",
                          ":hover": {
                            color:
                              urlLocation == page.path ? "white" : "#00AC8C",
                          },
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </Box>
                    {!page.subMenus == "" && (
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        sx={{
                          mt: 1,
                        }}
                      >
                        <Box mt={-1} mb={-1}>
                          {page.subMenus?.map((sub) => (
                            <MenuItem
                              onClick={() => {
                                handleNavigation(sub.path);
                                handleClose();
                              }}
                              sx={{
                                bgcolor:
                                  urlLocation + "/" + urlLocation2 === sub.path
                                    ? "#00AC8C"
                                    : "#e2f0ea",
                                color:
                                  urlLocation + "/" + urlLocation2 === sub.path
                                    ? "white"
                                    : "black",
                                ":hover": {
                                  color:
                                    urlLocation2 === sub.path
                                      ? "white"
                                      : "#00AC8C",
                                },
                              }}
                            >
                              <Typography>{sub.name}</Typography>
                            </MenuItem>
                          ))}
                        </Box>
                      </Menu>
                    )}
                  </div>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        slotProps={{
          backdrop: {
            sx: {
              background: "rgba(0,0,0,0.4)",
            },
          },
        }}
        PaperProps={{
          sx: { width: "50%", backgroundColor: "#e2f0ea" },
        }}
      >
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          sx={{ minHeight: "100svh" }}
          pl={1}
        >
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={LogoBlack} width={80} />
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid container display={"flex"} justifyContent={"center"}>
              {pages.map((page) => (
                <Grid
                  item
                  xs={12}
                  key={page.name}
                  sx={{
                    bgcolor: urlLocation == page.path ? "#00AC8C" : "#d3dcd7",
                    borderRadius: 1,
                    height: page.subMenus ? 235 : 40,
                    mr: 2,
                    p: 1,
                    mb: 2.5,
                    boxShadow:
                      urlLocation == page.path
                        ? "4px 7px 5px 1px rgba(0, 0, 0, 0.2)"
                        : "3px 5px 5px 1px rgba(0, 0, 0, 0.1)",
                    cursor: urlLocation == page.path ? "default" : "pointer",
                    display: page.subMenus ? "inline" : "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    pt: 1.3,
                  }}
                  onClick={() => !page.subMenus && handleNavigation(page.path)}
                >
                  <Box display={"flex"} justifyContent={"center"}>
                    <Typography
                      fontWeight={500}
                      sx={{
                        color: urlLocation == page.path ? "white" : "black",
                        ":hover": {
                          color: urlLocation == page.path ? "white" : "#00AC8C",
                        },
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Box>

                  <Box ml={0.8}>
                    {page.subMenus?.map((sub) => (
                      <Box
                        item
                        xs={12}
                        key={sub.name}
                        sx={{
                          bgcolor:
                            urlLocation + "/" + urlLocation2 == sub.path
                              ? "white"
                              : "#e2f0ea",
                          borderRadius: 1,
                          height: 40,
                          mr: 0.8,
                          p: 1,
                          mb: 1,
                          boxShadow:
                            urlLocation2 == sub.path
                              ? "4px 7px 5px 1px rgba(0, 0, 0, 0.2)"
                              : 0,
                          cursor:
                            urlLocation2 == sub.path ? "default" : "pointer",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        onClick={() => handleNavigation(sub.path)}
                      >
                        <Typography
                          sx={{
                            color:
                              urlLocation + "/" + urlLocation2 == sub.path
                                ? "#19b396"
                                : "black",
                            ":hover": {
                              color:
                                urlLocation2 == sub.path ? "white" : "#00AC8C",
                            },
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {sub.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <IconButton sx={{ boxShadow: 5 }} onClick={toggleDrawer}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}

export default MainHeader;
