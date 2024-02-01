import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Location from "../../assets/location.svg";
import Email from "../../assets/MailGrey.svg";
import Phone from "../../assets/PhoneGrey.svg";
import ContactUsImage from "../../assets/ContactUs.png";

const ContactUs = () => {
  return (
    <Box
      minHeight={"80dvh"}
      display={"flex"}
      alignItems={"end"}
      justifyContent={"center"}
    >
      <Box pt={12}>
        <Typography variant="h3" textAlign={"center"}>
          Contact Us
        </Typography>
        <Box
          pt={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: {
              xs: 0,
              md: 18,
            },
          }}
        >
          <Typography textAlign={"center"} maxWidth={800}>
            We are also available for a site visit to discuss with you the best
            option we could provide to suit your needs. Please feel free to
            contact us to make an appointment.
          </Typography>
        </Box>

        <Grid container mt={10} mb={0}>
          <Grid
            item
            xs={12}
            md={7}
            display={"flex"}
            sx={{
              justifyContent: {
                xs: "center",
                md: "end",
              },
            }}
            justifyContent={"end"}
          >
            <Grid
              container
              spacing={4}
              maxWidth={500}
              pl={5}
              pb={10}
              display={"flex"}
              sx={{
                justifyContent: {
                  xs: "center",
                  md: "end",
                },
              }}
              alignItems={"center"}
              maxHeight={400}
            >
              <Grid
                item
                xs={2}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
              >
                <img src={Location} width={25} />
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
                  <a
                    href="tel:+94777491496"
                    style={{ textDecoration: "none", color: "#52AC8C" }}
                  >
                    +94 777 491496
                  </a>
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
                <Typography maxWidth={800}>Drop us an Email</Typography>
                <Typography maxWidth={800} variant="body2">
                  <a
                    href="mailto:rukmadura@gmail.com"
                    style={{ textDecoration: "none", color: "#52AC8C" }}
                  >
                    rukmadura@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "end",
              },
              mt: {
                xs: -5,
                md: 0,
              },
            }}
          >
            <Box>
              <img src={ContactUsImage} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
