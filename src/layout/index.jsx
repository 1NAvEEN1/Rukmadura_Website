import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./footer";

const Layout = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
