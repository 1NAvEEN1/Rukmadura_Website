import React from "react";
import { Grid, Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Import Splide CSS
import Image1 from "../../assets/C1.png";
import Image2 from "../../assets/C2.png";
import Image3 from "../../assets/C3.png";

const Slider = () => {
  return (
    <Box mb={5}>
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
            <Grid item xs={3} minWidth={120}>
              <img src={Image1} alt="Slider Image" />
            </Grid>
            <Grid item xs={3} minWidth={120}>
              <img src={Image2} alt="Slider Image" />
            </Grid>
            <Grid item xs={3} minWidth={120}>
              <img src={Image3} alt="Slider Image" />
            </Grid>
            <Grid item xs={3} minWidth={120}>
              <img src={Image3} alt="Slider Image" />
            </Grid>
          </Grid>
        </SplideSlide>
      </Splide>
    </Box>
  );
};

export default Slider;
