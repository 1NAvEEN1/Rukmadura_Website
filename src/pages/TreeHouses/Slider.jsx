import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Import Splide CSS
import Image1 from "../../assets/TS1.png";
import Image2 from "../../assets/TS2.png";
import Image3 from "../../assets/TS3.png";

const Slider = () => {
  return (
    <Box mb={5}>
      <Box p={2} display={"flex"} justifyContent={"center"} mt={5} mb={2}>
        <Typography fontWeight={500} textAlign={"center"} maxWidth={1500}>
          A tree house is not just a structure; it's an investment in creating a
          magical and versatile space that adds value to your property and
          enhances your lifestyle. Whether for family enjoyment, personal
          relaxation, or as a unique architectural feature, a tree house brings
          a sense of wonder and joy to any backyard or garden.
        </Typography>
      </Box>
      <Splide
        options={{
          type: "loop",
          gap: "8%",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 1,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 3,
          },
        }}
      >
        <SplideSlide>
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            minWidth={480}
            spacing={3}
          >
            <Grid item xs={3} minWidth={160}>
              <img src={Image1} alt="Slider Image" />
            </Grid>
            <Grid item xs={3} minWidth={160}>
              <img src={Image2} alt="Slider Image" />
            </Grid>
            <Grid item xs={3} minWidth={160}>
              <img src={Image3} alt="Slider Image" />
            </Grid>
          </Grid>
        </SplideSlide>
      </Splide>
    </Box>
  );
};

export default Slider;
