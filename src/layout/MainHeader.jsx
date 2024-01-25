import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SegmentIcon from "@mui/icons-material/Segment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { Grid, useScrollTrigger, Slide } from "@mui/material";

const pages = [
  { name: "HOME", path: "/home" },
  { name: "OUR SERVICES", path: "/our_services" },
  { name: "ABOUT US", path: "/about_us" },
  { name: "CONTACT US", path: "/contact_us" },
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            boxShadow: "none",
            background: "transparent",
            // position: "sticky",
            // top: 0,
          }}
        >
          <Box>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", sm: "none" },
                    flexDirection: "row-reverse",
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer}
                    color="black"
                  >
                    <SegmentIcon />
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
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "end",
                  }}
                >
                  {pages.map((page) => (
                    <Typography
                      variant="button"
                      noWrap
                      component={Link}
                      to={page.path}
                      key={page.name}
                      sx={{
                        mx: 3,
                        color: "black",
                        display: "block",
                        textDecoration: "none",
                        textTransform: "none",
                        ":hover": {
                          color: "#F2B51C",
                        },
                      }}
                    >
                      {page.name}
                    </Typography>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </Box>
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
