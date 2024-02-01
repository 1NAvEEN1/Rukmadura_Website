import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../assets/TreeHouseHeading.png";
import T1 from "../../assets/T1.svg";
import T2 from "../../assets/T2.svg";

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
          <Grid item xs={12} display={"flex"} alignItems={"start"}>
            <Box>
              <Typography variant="h3" textAlign={"center"} mt={2}>
                Tree Houses
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
              >
                <Box mt={3} sx={{ display: { xs: "block", md: "none" } }}>
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
                <Typography
                  textAlign={"center"}
                  sx={{
                    fontWeight: {
                      xs: 400,
                      sm: 500,
                    },
                  }}
                >
                  Enliven your backyard or garden with our custom-designed tree
                  houses. Whether nestled in the branches of a majestic tree or
                  standing tall on sturdy supports, our tree houses are crafted
                  to blend seamlessly with nature while offering a magical
                  escape for children and adults alike.
                </Typography>

                <Typography
                  textAlign={"center"}
                  mt={3}
                  sx={{
                    fontWeight: {
                      xs: 400,
                      sm: 500,
                    },
                  }}
                >
                  Having a tree house in your garden or backyard can offer a
                  myriad of benefits and add a touch of enchantment to your
                  outdoor space. Here are some compelling reasons to consider
                  adding a tree house to your property:
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
                    <img src={T1} />
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

                <Grid
                  item
                  xs={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box>
                    <img src={T2} />
                  </Box>
                </Grid>
                <Grid item xs={10} mt={2} pr={2}>
                  <Typography fontWeight={500}>
                    Childhood Nostalgia and Creativity
                  </Typography>
                  <Typography mt={2} color={"#565656"}>
                    For families with children, a tree house is a magical
                    addition that fosters imagination and creativity. It becomes
                    a space for play, storytelling, and make-believe adventures,
                    creating cherished childhood memories that last a lifetime.
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
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Box
          maxWidth={750}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <img src={Image} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Heading;
