import React from "react";
import { Typography, Grid } from "@mui/material";
import Bulb from "../../assets/bulb.svg";
import Builder from "../../assets/Builder.svg";
import Rubic from "../../assets/rubic.svg";
import Medic from "../../assets/Medic.svg";
import BuilderPerson from "../../assets/BuilderPerson.png";

const WhyChooseUsCard = () => {
  return (
    <Grid container mt={5}>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
        }}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <img src={BuilderPerson} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container mb={3}>
          <Grid
            item
            xs={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <img src={Bulb} />
          </Grid>
          <Grid item xs={9} sx={{ pr: { xs: 1.5, sm: 0 } }}>
            <Typography fontWeight={700} mb={1}>
              Innovation and Creativity
            </Typography>
            <Typography maxWidth={600}>
              Our team thrives on pushing the boundaries of design, ensuring
              that each project is a testament to innovation and creativity. We
              tailor our solutions to suit the unique preferences and
              requirements of our clients.
            </Typography>
          </Grid>
        </Grid>
        <Grid container mb={3}>
          <Grid
            item
            xs={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <img src={Builder} />
          </Grid>
          <Grid item xs={9} sx={{ pr: { xs: 1.5, sm: 0 } }}>
            <Typography fontWeight={700} mb={1}>
              Quality Craftsmanship
            </Typography>
            <Typography maxWidth={600}>
              With a commitment to excellence, we employ skilled craftsmen who
              bring each vision to life with meticulous attention to detail. Our
              structures are built to last, combining durability with aesthetic
              appeal.
            </Typography>
          </Grid>
        </Grid>
        <Grid container mb={3}>
          <Grid
            item
            xs={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <img src={Rubic} />
          </Grid>
          <Grid item xs={9} sx={{ pr: { xs: 1.5, sm: 0 } }}>
            <Typography fontWeight={700} mb={1}>
              Collaborative Approach
            </Typography>
            <Typography maxWidth={600}>
              We believe in collaborative partnerships with our clients. From
              concept to completion, we work closely with you to understand your
              vision, incorporating your ideas into the design process.
            </Typography>
          </Grid>
        </Grid>
        <Grid container mb={3}>
          <Grid
            item
            xs={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <img src={Medic} />
          </Grid>
          <Grid item xs={9} sx={{ pr: { xs: 1.5, sm: 0 } }}>
            <Typography fontWeight={700} mb={1}>
              Safety First
            </Typography>
            <Typography maxWidth={600}>
              Especially when it comes to children's play areas, safety is our
              top priority. We adhere to stringent safety standards and
              guidelines, ensuring that our creations provide a secure
              environment for all users.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <img src={BuilderPerson} />
      </Grid>
    </Grid>
  );
};

export default WhyChooseUsCard;
