import { Box } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import MiddleContent from "./MiddleContent";
import Slider from "./Slider";

const Chalets = () => {
  return (
    <Box pt={8} minHeight={"78svh"}>
      <Heading />
      <MiddleContent />
      <Slider />
    </Box>
  );
};

export default Chalets;
