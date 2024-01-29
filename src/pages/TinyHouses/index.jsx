import { Box } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import MiddleContent from "./MiddleContent";
import Slider from "./Slider";

const TinyHouses = () => {
  return (
    <Box pt={8} minHeight={"78svh"}>
      <Heading />
      <MiddleContent />
      <Slider />
    </Box>
  );
};

export default TinyHouses;
