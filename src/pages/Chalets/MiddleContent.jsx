import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import QuestionMarkImage from "../../assets/QuestionMarkImage.png";

const MiddleContent = () => {
  return (
    <Box mt={3} p={2}>
      <Typography variant="h5" textAlign={"center"}>
        Why Ruk Madura?
      </Typography>
      <Grid container p={2} mt={4}>
        <Grid
          item
          xs={12}
          md={4}
          mb={2}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
          justifyContent={"center"}
        >
          <Box>
            <img src={QuestionMarkImage} height={350} />
          </Box>
        </Grid>
        <Grid item xs={12} md={8} display={"flex"} justifyContent={"end"}>
          <Box maxWidth={900}>
            <Box>
              <Typography fontWeight={500}>
                Expertise in Chalet Design
              </Typography>
              <Typography color={"#565656"} mt={1}>
                With years of experience in crafting luxury accommodations, we
                have honed our skills in chalet design. Our team of architects
                and designers are adept at creating spaces that balance
                functionality, aesthetics, and the unique requirements of your
                business.
              </Typography>
            </Box>

            <Box mt={3}>
              <Typography fontWeight={500}>
                Customization and Personalization
              </Typography>
              <Typography color={"#565656"} mt={1}>
                We understand that each hotel or business has its own distinct
                personality. Our approach involves close collaboration with you
                to understand your vision and requirements, ensuring that the
                final product is a reflection of your brand and exceeds your
                expectations.
              </Typography>
            </Box>

            <Box mt={3}>
              <Typography fontWeight={500}>Quality Craftsmanship</Typography>
              <Typography color={"#565656"} mt={1}>
                Our commitment to quality is unwavering. We source premium
                materials and employ skilled craftsmen to build chalets that not
                only stand the test of time but also exude an unmatched level of
                sophistication and craftsmanship.
              </Typography>
            </Box>

            <Box mt={3}>
              <Typography fontWeight={500}>
                Project Management Excellence
              </Typography>
              <Typography color={"#565656"} mt={1}>
                We pride ourselves on efficient project management, ensuring
                timely delivery without compromising on quality. Our streamlined
                processes and attention to detail make the construction of your
                chalets a seamless and stress-free experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
          justifyContent={"center"}
        >
          <Box>
            <img src={QuestionMarkImage} />
          </Box>
        </Grid>
      </Grid>

      <Box mt={8} mb={8}>
        <Typography fontWeight={500} textAlign={"center"}>
          Let's Transform Your Business
        </Typography>
        <Typography color={"#565656"} mt={1} textAlign={"center"}>
          Elevate your hotel or business to new heights with the addition of
          bespoke chalets by Ruk Madura. Contact us today, and let's embark on a
          journey to redefine luxury and create an enchanting retreat that sets
          your establishment apart in the hospitality landscape. Your guests
          deserve nothing less than the extraordinary, and we are here to make
          it happen.
        </Typography>
      </Box>
    </Box>
  );
};

export default MiddleContent;
