import React from "react";
import { Box } from "@mui/material";
import BackGroundImage from "../../assets/Bg.svg";

const Home = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${BackGroundImage})`,
        backgroundSize: "100% auto", // Set to cover the screen width and adjust height
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Set a minimum height to cover the entire viewport
        overflow: "hidden", // Hide overflow content behind the background
      }}
    >
      <Box mt={7}>hom</Box>
      <Box height={1000}></Box>
    </Box>
  );
};

export default Home;
