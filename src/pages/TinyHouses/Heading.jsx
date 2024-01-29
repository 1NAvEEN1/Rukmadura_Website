import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../assets/TinyHouseHeading.png";
import H1 from "../../assets/H1.svg";
import H2 from "../../assets/H2.svg";
import H3 from "../../assets/H3.svg";
import H4 from "../../assets/H4.svg";
import H5 from "../../assets/H5.svg";
import H6 from "../../assets/H6.svg";

const Heading = () => {
  return (
    <Grid container pl={3}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          pl: {
            xs: 0,
            lg: 5,
          },
          mt: {
            xs: -2,
            md: 0,
          },
          mb: {
            xs: -2,
            md: 0,
          },
        }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid container display={"flex"} alignItems={"end"}>
          <Grid item xs={12} display={"flex"} alignItems={"start"} justifyContent={"end"}>
            <Box maxWidth={800}>
              <Typography variant="h3" textAlign={"center"} mt={5}>
                Tiny Houses
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box sx={{ display: { xs: "flex", md: "none" } }} pr={4}>
                  <img src={Image} />
                </Box>
              </Box>
              <Box
                mt={3}
                sx={{
                  pr: {
                    xs: 2,
                    md: 0,
                  },
                }}
              >
                <Typography textAlign={"center"} fontWeight={500}>
                  Embark on Your Journey with Ruk Madura Tiny Homes: Affordable,
                  Adaptable, and Aspirational
                </Typography>

                <Typography textAlign={"center"} mt={3} color={"#565656"}>
                  In a world where economic considerations often influence
                  lifestyle choices, Ruk Madura Tiny Homes emerges as a beacon
                  of practicality and aspiration. Our commitment to providing
                  quality, customizable tiny homes is driven by the
                  understanding that life's adventures are best undertaken when
                  unburdened by excessive costs. Here's why choosing a tiny
                  house from Ruk Madura is a wise decision, especially for those
                  navigating economic challenges or newlyweds embarking on their
                  shared journey:
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Grid container spacing={2} mt={3}>
                <Grid
                  item
                  xs={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box>
                    <img src={H1} />
                  </Box>
                </Grid>
                <Grid item xs={10} pr={2}>
                  <Typography fontWeight={500}>
                    Immersive Outdoor Experience
                  </Typography>
                  <Typography mt={2} color={"#565656"}>
                    A tree house provides a unique and immersive outdoor
                    experience. It allows you to connect with nature, offering a
                    space where you can enjoy the sights and sounds of the
                    outdoors while being elevated in a peaceful and private
                    environment.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          maxWidth={750}
          ml={-5}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <img src={Image} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Heading;
