import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import ServiceItemCard from "./ServiceItemCard";
import BackGroundImage from "../../assets/Bg.svg";
import KidsPlay from "../../assets/kidsPlay.png";
import TreeHouse from "../../assets/treeHouse.png";
import Chalets from "../../assets/chalets.png";
import TinyHomes from "../../assets/tinyHomes.png";
import WhyChooseUsCard from "./WhyChooseUsCard";
import OurProcess from "./OurProcess";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <Box
      // style={{
      //   backgroundImage: `url(${BackGroundImage})`,
      //   backgroundSize: "100% auto", // Set to cover the screen width and adjust height
      //   backgroundRepeat: "no-repeat",
      //   minHeight: "100vh", // Set a minimum height to cover the entire viewport
      //   overflow: "hidden", // Hide overflow content behind the background
      // }}
      pt={7}
    >
      <Welcome />
      <Typography variant="h3" textAlign={"center"} mt={7}>
        Our Services
      </Typography>
      <Grid container spacing={3} pl={5} pr={5} mt={0}>
        <ServiceItemCard imageSrc={KidsPlay} title="Kids Play Area" />
        <ServiceItemCard imageSrc={TreeHouse} title="Tree Houses" />
        <ServiceItemCard imageSrc={Chalets} title="Chalets" />
        <ServiceItemCard imageSrc={TinyHomes} title="Tiny Homes" />
      </Grid>

      <Typography variant="h3" textAlign={"center"} mt={10}>
        Why Choose Us?
      </Typography>
      <WhyChooseUsCard />

      <Typography variant="h3" textAlign={"center"} mt={10}>
        Our process
      </Typography>
      <OurProcess />
    </Box>
  );
};

export default Home;
