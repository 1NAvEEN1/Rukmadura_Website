import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Location from "../../assets/location.svg";
import Email from "../../assets/MailGrey.svg";
import Phone from "../../assets/PhoneGrey.svg";

const ContactUs = () => {
  return (
    <Box pt={18} minHeight={"78svh"}>
      <Typography variant="h3" textAlign={"center"}>
        Contact Us
      </Typography>
      <Box pt={3} display={"flex"} justifyContent={"center"}>
        <Typography textAlign={"center"} maxWidth={800}>
          We are also available for a site visit to discuss with you the best
          option we could provide to suit your needs. Please feel free to
          contact us to make an appointment.
        </Typography>
      </Box>

      <Box display={"flex"} justifyContent={"center"} mt={10} mb={10}>
        <Grid container spacing={4} maxWidth={500} pl={5}>
          <Grid
            item
            xs={2}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <img src={Location} width={30} />
          </Grid>
          <Grid item xs={10}>
            <Typography maxWidth={800}>Our Address</Typography>
            <Typography maxWidth={800} variant="body2">
              700 D, Weliwatta Place,Arawwala, Pannipitiya
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <img src={Phone} width={28} />
          </Grid>
          <Grid item xs={10}>
            <Typography maxWidth={800}>Give us a Call</Typography>
            <Typography maxWidth={800} variant="body2">
              +94 777 491496
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <img src={Email} width={30} />
          </Grid>
          <Grid item xs={10}>
            <Typography maxWidth={800}>Drop us a Email</Typography>
            <Typography maxWidth={800} variant="body2">
              rukmadura@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
