import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PastWork from "./PastWork";
import KidsPlayArea from "./KidsPlayArea";
import TreeHouse from "./TreeHouse";
import TinyHouse from "./TinyHouse";
import Chalets from "./Chalets";

const Gallery = () => {
  return (
    <Box pt={12} minHeight={"78svh"} pl={1} pr={1}>
      <Typography variant="h3" textAlign={"center"}>
        Rukmadura Gallery
      </Typography>

      <Box display={"flex"} justifyContent={"center"} mt={4} mb={2}>
        <Grid container maxWidth={1200}>
          <Grid item xs={12} pl={2}>
            <Typography variant="h5" textAlign={"left"}>
              Our Past Work
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <PastWork />

      <Box display={"flex"} justifyContent={"center"} mt={4} mb={2}>
        <Grid container maxWidth={1200}>
          <Grid item xs={12} pl={2}>
            <Typography variant="h5">Day Concepts</Typography>
          </Grid>
        </Grid>
      </Box>

      <KidsPlayArea />
      <TreeHouse />
      <TinyHouse />
      <Chalets />
    </Box>
  );
};

export default Gallery;
