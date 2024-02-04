import { Box, Grid, Typography, Collapse, Button } from "@mui/material";
import React, { useState } from "react";
import GTR1 from "../../assets/GTR1.png";
import GTR2 from "../../assets/GTR2.png";
import GTR3 from "../../assets/GTR3.png";
import GTR4 from "../../assets/GTR4.png";
import GTR5 from "../../assets/GTR5.png";
import GTR6 from "../../assets/GTR6.png";
import GTR7 from "../../assets/GTR7.png";

const ShowMoreContent = (
  <Grid container spacing={1} maxWidth={1150}>
    <Grid item xs={7} display={"flex"} justifyContent={"center"}>
      <img src={GTR3} />
    </Grid>
    <Grid item xs={5} display={"flex"} justifyContent={"center"}>
      <img src={GTR4} />
    </Grid>
    <Grid item xs={3} display={"flex"} justifyContent={"center"}>
      <img src={GTR5} />
    </Grid>
    <Grid item xs={3} display={"flex"} justifyContent={"center"}>
      <img src={GTR6} />
    </Grid>
    <Grid item xs={6} display={"flex"} justifyContent={"center"}>
      <img src={GTR7} />
    </Grid>
  </Grid>
);

const TreeHouse = () => {
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
                Tree Houses
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <img src={GTR1} />
            </Grid>
            <Grid item xs={7} display={"flex"} justifyContent={"center"}>
              <img src={GTR2} />
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

export default TreeHouse;
