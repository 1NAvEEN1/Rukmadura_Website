import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import Image from "../../assets/WelcomeImage.png";

const Welcome = () => {
  return (
    <Grid
      container
      // sx={{
      //   pt: { xs: 6, sm: 15, md: 25, lg: 33, xl: 40 },
      //   pr: 2,
      // }}
    >
      <Grid item xs={12} lg={7}>
        <img src={Image} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={5}
        textAlign={"center"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          sx={{
            ml: {
              xs: 0,
              lg: -7,
            },
            mr: {
              xs: 0,
              lg: 3,
            },
          }}
        >
          <Typography
            fontSize={{ xs: 28, sm: 70 }}
            fontWeight={700}
            mb={{ xs: -1, sm: -1 }}
          >
            WELCOME
          </Typography>
          <Typography fontSize={{ xs: 17, sm: 43 }} fontWeight={700}>
            TO RUK MADURA
          </Typography>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default Welcome;
