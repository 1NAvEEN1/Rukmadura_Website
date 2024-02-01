import React from "react";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image1 from "../../assets/TS1.png";
import Image2 from "../../assets/TS2.png";
import Image3 from "../../assets/TS3.png";
import Image4 from "../../assets/TS2.png";
import Image5 from "../../assets/TS3.png";

const Slider = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
      <Grid container py={5}>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            gap: 10,
            arrows: false,
            pagination: false,
            perPage: isSmallScreen ? 2 : 4, // Change perPage based on screen size
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 2,
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide>
            <img src={Image1} alt="Slider Image" />
          </SplideSlide>
          <SplideSlide>
            <img src={Image2} alt="Slider Image" />
          </SplideSlide>
          <SplideSlide>
            <img src={Image3} alt="Slider Image" />
          </SplideSlide>
          <SplideSlide>
            <img src={Image4} alt="Slider Image" />
          </SplideSlide>
          <SplideSlide>
            <img src={Image5} alt="Slider Image" />
          </SplideSlide>
        </Splide>
      </Grid>
    </Box>
  );
};

export default Slider;
