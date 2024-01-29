import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../assets/ChaletsHeading.png";
import C1 from "../../assets/C1.svg";
import C2 from "../../assets/C2.svg";
import C3 from "../../assets/C3.svg";
import C4 from "../../assets/C4.svg";

const Heading = () => {
  return (
    <Grid container spacing={2} pr={2} pl={2}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            justifyContent: "center",
            mt: 7,
          }}
        >
          Chalets
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
        <Grid container spacing={2} mt={3} display={"flex"} alignItems={"end"}>
          <Grid
            item
            xs={12}
            pr={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
          >
            <Box maxWidth={600}>
              <img src={Image} />
            </Box>
          </Grid>

          <Grid item xs={12} pr={2}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <Box>
                  <img src={C3} />
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                mt={2}
                pr={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"end"}
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <Box>
                  <Typography fontWeight={500}>
                    Versatility in Design
                  </Typography>
                  <Typography mt={2} color={"#565656"}>
                    No two businesses are the same, and neither should their
                    chalets be. We understand the importance of individuality
                    and offer a range of design options to suit the unique
                    character and theme of your establishment. From traditional
                    alpine aesthetics to contemporary interpretations, our
                    chalets are crafted to reflect your brand identity.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              mt: 5,
            }}
          >
            Chalets
          </Typography>
          <Typography textAlign={"center"} fontWeight={500} mt={5}>
            Elevate Your Establishment with Bespoke Chalets by Ruk Madura
          </Typography>
          <Box>
            <Typography mt={3} textAlign={"center"}>
              Welcome to the epitome of luxury and charm – where rustic elegance
              meets modern comfort. At Ruk Madura, we specialize in crafting
              bespoke chalets for hotels and businesses that seek to create an
              unforgettable and exclusive experience for their guests. Our
              commitment to excellence, attention to detail, and passion for
              design make us the ideal partner for bringing your vision of a
              unique and inviting retreat to life.
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={500} mt={8}>
              Why Choose Chalets for Your Hotel or Business?
            </Typography>
          </Box>
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
                  <img src={C1} />
                </Box>
              </Grid>
              <Grid item xs={10} pr={2}>
                <Typography fontWeight={500}>
                  Unparalleled Aesthetics
                </Typography>
                <Typography mt={2} color={"#565656"}>
                  Chalets exude a timeless charm that seamlessly blends with
                  various architectural styles. Whether you're situated in a
                  mountainous retreat, coastal haven, or urban oasis, our
                  chalets are designed to enhance the aesthetic appeal of your
                  establishment, creating a picturesque ambiance that captivates
                  guests.
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
                  <img src={C2} />
                </Box>
              </Grid>
              <Grid item xs={10} mt={2} pr={2}>
                <Typography fontWeight={500}>Luxury Redefined</Typography>
                <Typography mt={2} color={"#565656"}>
                  Elevate the level of luxury at your hotel or business with our
                  custom-designed chalets. From spacious living areas to private
                  balconies with breathtaking views, we prioritize comfort and
                  opulence in every detail, ensuring that your guests experience
                  the pinnacle of indulgence during their stay.
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <Box>
                  <img src={C3} />
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                mt={2}
                pr={2}
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <Box>
                  <Typography fontWeight={500}>
                    Versatility in Design
                  </Typography>
                  <Typography mt={2} color={"#565656"}>
                    No two businesses are the same, and neither should their
                    chalets be. We understand the importance of individuality
                    and offer a range of design options to suit the unique
                    character and theme of your establishment. From traditional
                    alpine aesthetics to contemporary interpretations, our
                    chalets are crafted to reflect your brand identity.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <Box>
                  <img src={C4} />
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                mt={2}
                pr={2}
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <Box>
                  <Typography fontWeight={500}>
                    Experiential Hospitality
                  </Typography>
                  <Typography mt={2} color={"#565656"}>
                    Chalets provide a unique and immersive hospitality
                    experience. Guests can enjoy the seclusion and privacy of
                    their own cozy haven while still having access to the
                    amenities and services of your hotel or business. It's a
                    perfect blend of exclusivity and convenience.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid container p={2}>
        <Grid
          item
          md={1}
          xs={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Box>
            <img src={C4} />
          </Box>
        </Grid>
        <Grid
          item
          md={11}
          xs={10}
          mt={2}
          pr={2}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Box>
            <Typography fontWeight={500}>Experiential Hospitality</Typography>
            <Typography mt={2} color={"#565656"}>
              Chalets provide a unique and immersive hospitality experience.
              Guests can enjoy the seclusion and privacy of their own cozy haven
              while still having access to the amenities and services of your
              hotel or business. It's a perfect blend of exclusivity and
              convenience.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Heading;
