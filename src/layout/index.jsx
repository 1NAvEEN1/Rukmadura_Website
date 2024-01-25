import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import BackGroundImage from "../assests/Bg.svg";

const Layout = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
