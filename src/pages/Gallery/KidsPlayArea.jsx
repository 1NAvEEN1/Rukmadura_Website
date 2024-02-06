import { Box, Grid, Typography, Collapse, Button } from "@mui/material";
import React, { useState } from "react";
import GKP1 from "../../assets/GKP1.png";
import GKP2 from "../../assets/GKP2.png";
import GKP3 from "../../assets/GKP3.png";
import GKP4 from "../../assets/GKP4.png";
import GKP5 from "../../assets/GKP5.png";
import GKP6 from "../../assets/GKP6.png";

const ShowMoreContent = (
  <Grid container spacing={1} maxWidth={1150}>
    <Grid item xs={7.5} display={"flex"} justifyContent={"center"}>
      <img src={GKP3} />
    </Grid>
    <Grid item xs={4.5} display={"flex"} justifyContent={"center"}>
      <img src={GKP4} />
    </Grid>
    <Grid item xs={5.5} display={"flex"} justifyContent={"center"}>
      <img src={GKP5} />
    </Grid>
    <Grid item xs={6.5} display={"flex"} justifyContent={"center"}>
      <img src={GKP6} />
    </Grid>
  </Grid>
);

const KidsPlayArea = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box display={"flex"} justifyContent={"center"} mb={2}>
      <Box
        bgcolor={"#ffff"}
        maxWidth={1200}
        sx={{
          p: {
            xs: 1,
            md: 2,
          },
        }}
        borderRadius={1}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Grid container spacing={1} maxWidth={1150}>
            <Grid item xs={12}>
              <Typography variant="h6" textAlign={"center"}>
                Kids Play Area
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <img src={GKP1} />
            </Grid>
            <Grid item xs={7} display={"flex"} justifyContent={"center"}>
              <img src={GKP2} />
            </Grid>
          </Grid>
        </Box>

        <Box display={"flex"} justifyContent={"center"} mt={1}>
          <Collapse in={checked}>{ShowMoreContent}</Collapse>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"end"}
          sx={{
            mt: {
              xs: 0,
              md: 2,
            },
          }}
        >
          <Button onClick={handleChange}>
            <Typography textAlign={"right"}>
              {checked ? "Show less..." : "Show more..."}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default KidsPlayArea;
