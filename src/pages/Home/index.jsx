import React from "react";
import { Box } from "@mui/material";
import BackGroundImage from "../../assests/Bg.svg";

const Home = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${BackGroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh", // Set a minimum height to cover the entire viewport
        overflow: "hidden", // Hide overflow content behind the background
      }}
    >
      <Box mt={5}>
        hom
      </Box>
      <Box height={1000}></Box>
    </Box>
  );
};

export default Home;
