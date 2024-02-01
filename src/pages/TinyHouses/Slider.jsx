import React from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image1 from "../../assets/H1.png";
import Image2 from "../../assets/H2.png";
import Image3 from "../../assets/H3.png";
import Image4 from "../../assets/H2.png";
import Image5 from "../../assets/H3.png";

const Slider = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box mb={5}>
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
