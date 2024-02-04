import { Box, Grid, Typography, Collapse, Button } from "@mui/material";
import React, { useState } from "react";
import GC1 from "../../assets/GC1.png";
import GC2 from "../../assets/GC2.png";
import GC3 from "../../assets/GC3.png";
import GC4 from "../../assets/GC4.png";
import GC5 from "../../assets/GC5.png";
import GC6 from "../../assets/GC6.png";
import GC7 from "../../assets/GC7.png";
import GC8 from "../../assets/GC8.png";
import GC9 from "../../assets/GC9.png";

const ShowMoreContent = (
  <Grid container spacing={1} maxWidth={1150}>
    <Grid item xs={4.5} display={"flex"} justifyContent={"center"}>
      <img src={GC4} />
    </Grid>
    <Grid item xs={4.5} display={"flex"} justifyContent={"center"}>
      <img src={GC5} />
    </Grid>
    <Grid item xs={3} display={"flex"} justifyContent={"center"}>
      <img src={GC6} />
    </Grid>
    <Grid item xs={5} display={"flex"} justifyContent={"center"}>
      <img src={GC7} />
    </Grid>
    <Grid item xs={4} display={"flex"} justifyContent={"center"}>
      <img src={GC8} />
    </Grid>
    <Grid item xs={3} display={"flex"} justifyContent={"center"}>
      <img src={GC9} />
    </Grid>
  </Grid>
);

const Chalets = () => {
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
                Chalets
              </Typography>
            </Grid>
            <Grid item xs={4.7}>
              <img src={GC1} />
            </Grid>
            <Grid item xs={4.3} display={"flex"} justifyContent={"center"}>
              <img src={GC2} />
            </Grid>
            <Grid item xs={3} display={"flex"} justifyContent={"center"}>
              <img src={GC3} />
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

export default Chalets;
