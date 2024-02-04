import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Meeting from "../../assets/Meeting.svg";
import Design from "../../assets/Design.svg";
import TreeHouse from "../../assets/TreeHouse.svg";

const WhyChooseUsCard = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} mb={5}>
      <Grid container mt={0} spacing={2} maxWidth={1400}>
        <Grid item xs={12} p={2} display={"flex"} justifyContent={"center"}>
          <Typography textAlign={"center"}>
            We follow very simplified process. We are also available for a site
            visit to discuss with you the best option we could provide to suit
            your needs. Please feel free to contact us to make an appointment.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            maxHeight: {
              xs: 320,
              md: 700,
            },
          }}
        >
          <Grid container p={2} maxWidth={450}>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={Meeting} />
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography mb={2} mt={2} variant="h6">
                Meeting & Consultation
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"start"}
              minHeight={200}
            >
              <Typography variant="body2" textAlign={"center"}>
                These spaces are used for many reasons as Kids play area,
                peaceful environment at your own residence, Man Caves and with
                working from home being the new normal, as the quite office
                space.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            maxHeight: {
              xs: 320,
              md: 700,
            },
          }}
        >
          <Grid container p={2} maxWidth={450}>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={Design} />
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography mb={2} mt={2} variant="h6">
                Design and Planning
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"start"}
              minHeight={200}
            >
              <Typography variant="body2" textAlign={"center"}>
                We can provide you with a plethora of designs to choose from our
                catalogs or we could get specific information from you to design
                your dream heaven.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            maxHeight: {
              xs: 320,
              md: 700,
            },
          }}
        >
          <Grid container maxWidth={450} p={2}>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={TreeHouse} />
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography mb={2} mt={2} variant="h6">
                Construction
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"start"}
              minHeight={200}
            >
              <Typography variant="body2" textAlign={"center"}>
                Our highly skilled craftsmen use the best material to build the
                space and use novel methods to ensure longevity and strength of
                the structure. We also ensure that the natural environment is
                left unharmed.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUsCard;
