import React from "react";
import { Grid, Card, Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Import Splide CSS
import Image from "../../assets/KidsPlayHeading.png";

const Slider = () => {
  return (
    <Box>
      <Splide
        options={{
          type: "loop",
          gap: 5,
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 3,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 3,
          },
        }}
      >
        <SplideSlide>
          <img src={Image} alt="Slider Image" />
        </SplideSlide>
      </Splide>
    </Box>
  );
};

export default Slider;
