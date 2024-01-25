import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
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
      <Grid
        container
        mt={7}
        sx={{
          pt: { xs: 6, sm: 15, md: 25, lg: 33, xl: 40 },
          pr: 2,
        }}
      >
        <Grid item xs={5} sm={5}></Grid>
        <Grid item xs={7} sm={7} color={"white"} textAlign={"center"}>
          <Typography
            fontSize={{ xs: 28, sm: 70 }}
            fontWeight={700}
            mb={{ xs: -1.5, sm: -1 }}
          >
            WELCOME
          </Typography>
          <Typography fontSize={{ xs: 17, sm: 43 }} fontWeight={700}>
            TO RUK MADURA
          </Typography>
        </Grid>
        <Grid item xs={1} sm={5}></Grid>
        <Grid item xs={11} sm={7} color={"white"} textAlign={"center"} mt={2}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography maxWidth={800} variant="body2">
              Where imagination meets craftsmanship to create enchanting spaces
              for children and adults alike. We specialize in designing and
              constructing innovative kids' play areas, charming tree houses,
              luxurious chalets for hotels, and cozy tiny homes. Our passion
              lies in crafting unique and captivating spaces that inspire
              creativity, foster a sense of wonder, and provide a retreat from
              the ordinary.
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} mt={5}>
            <Button
              variant="contained"
              sx={{ bgcolor: "white", color: "#00AC8C" }}
            >
              <Typography fontWeight={700}>Contact Us</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box height={1000}></Box>
    </Box>
  );
};

export default Home;
