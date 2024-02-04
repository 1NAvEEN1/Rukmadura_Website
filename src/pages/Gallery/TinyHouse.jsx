import { Box, Grid, Typography, Collapse, Button } from "@mui/material";
import React, { useState } from "react";
import GTH1 from "../../assets/GTH1.png";
import GTH2 from "../../assets/GTH2.png";
import GTH3 from "../../assets/GTH3.png";
import GTH4 from "../../assets/GTH4.png";
import GTH5 from "../../assets/GTH5.png";
import GTH6 from "../../assets/GTH6.png";

const ShowMoreContent = (
  <Grid container spacing={1} maxWidth={1150}>
    <Grid item xs={4.5} display={"flex"} justifyContent={"center"}>
      <img src={GTH4} />
    </Grid>
    <Grid item xs={4.5} display={"flex"} justifyContent={"center"}>
      <img src={GTH5} />
    </Grid>
    <Grid item xs={3} display={"flex"} justifyContent={"center"}>
      <img src={GTH6} />
    </Grid>
  </Grid>
);

const TinyHouse = () => {
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
                Tiny House
              </Typography>
            </Grid>
            <Grid item xs={4.8}>
              <img src={GTH1} />
            </Grid>
            <Grid item xs={3.2} display={"flex"} justifyContent={"center"}>
              <img src={GTH2} />
            </Grid>
            <Grid item xs={4} display={"flex"} justifyContent={"center"}>
              <img src={GTH3} />
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

export default TinyHouse;
