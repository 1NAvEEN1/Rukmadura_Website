import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PastWork from "./PastWork";

const Gallery = () => {
  return (
    <Box pt={12} minHeight={"78svh"} pl={1} pr={1}>
      <Typography variant="h3" textAlign={"center"}>
        Rukmadura Gallery
      </Typography>

      <Typography variant="h6">Our Past Work</Typography>
      <PastWork />

      <Typography variant="h6">Day Concepts</Typography>
    </Box>
  );
};

export default Gallery;
