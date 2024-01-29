import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../assets/KidsPlayHeading.png";

const Heading = () => {
  return (
    <Grid container>
      <Grid item xs={12} mb={-4} mt={2}>
        <Typography
          variant="h3"
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            justifyContent: "center",
          }}
        >
          Kids Play Areas
        </Typography>
      </Grid>
      <Grid item xs={12} md={5.5} display={"flex"} alignItems={"center"} justifyContent={"end"}>
        <Box>
          <img src={Image} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6.5}>
        <Typography
          variant="h3"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "start",
            mt: 5,
          }}
        >
          Kids Play Areas
        </Typography>
        <Box
          p={2}
          sx={{
            ml: {
              xs: 0,
              md: -3,
            },
          }}
        >
          <Typography mt={4}>
            Play is an essential component of early childhood development,
            development through play contributes to the cognitive, physical,
            social, and emotional well-being of children. Play is not limited to
            a child’s physical development but it also engages a child’s
            creativity and imagination, their social skills and how they
            interact with others. These are the basic building blocks of
            development, vital for all children.
          </Typography>
        </Box>
        <Box
          p={2}
          sx={{
            ml: {
              xs: 0,
              md: 5,
            },
          }}
        >
          <Typography mt={4}>
            In addition, play offers an ideal opportunity for parents or
            caregivers to engage and bond with their children. Unfortunately, in
            today’s busy world time for play has reduced greatly, this creates a
            void in child development that is much needed. This is where we come
            in, we bring to your doorstep sustainable and affordable solutions
            for both homes and corporates, from tree houses, to dramatic play
            zones, to mini gym/obstacle course, to indoor jungle gyms and role
            play/imaginative play corners. What we strive to do is to help
            families and communities to have access to much needed safe,
            affordable play areas and equipment
          </Typography>
        </Box>
        <Box
          p={2}
          sx={{
            ml: {
              xs: 0,
              md: 5,
            },
          }}
        >
          <Typography mt={4}>Examples of Dramatic Play Zones</Typography>
          <Typography mt={2} color={"#565656"}>
            Travel and Airline Corner , Baker , Bank , Barber / Hair, Dresser ,
            Hospital , School , Farmers Market
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Heading;
