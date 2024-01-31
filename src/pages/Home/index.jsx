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

const serviceItems = [
  {
    imageSrc: KidsPlay,
    title: "Kids Play Area",
    text: "Our team of skilled architects and designers understands the importance of creating engaging and safe environments for children. From vibrant play structures to interactive zones, we combine creativity with safety to build spaces where kids can explore, learn, and play freely. Most importantly, focusing on their early childhood development needs.",
    path: "/new/services/kids_play_area",
  },
  {
    imageSrc: TreeHouse,
    title: "Tree Houses",
    text: "Enliven your backyard or garden with our custom-designed tree houses. Whether nestled in the branches of a majestic tree or standing tall on sturdy supports, our tree houses are crafted to blend seamlessly with nature while offering a magical escape for children and adults alike.",
    path: "/new/services/tree_houses",
  },
  {
    imageSrc: Chalets,
    title: "Chalets",
    text: "Elevate your business establishment’s allure with our bespoke chalets that embody luxury and comfort. Our designs seamlessly integrate with the surrounding landscape, providing guests with a cozy retreat and an unforgettable experience. From traditional Alpine aesthetics to modern interpretations, we tailor each chalet to suit the unique identity of your establishment.",
    path: "/new/services/chalets",
  },
  {
    imageSrc: TinyHomes,
    title: "Tiny Homes",
    text: "With the economic crunch that has led to an era of minimalism and sustainable living, our tiny homes are a perfect solution for those seeking compact, yet stylish living spaces. Designed with functionality and aesthetics in mind, our tiny homes maximize space, embrace energy efficiency, and offer a customizable haven for those who crave simplicity without compromising on comfort.",
    path: "/new/services/tiny_houses",
  },
];
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
      pt={8}
    >
      <Welcome />
      <Typography variant="h3" textAlign={"center"} mt={7}>
        Our Services
      </Typography>
      <Grid container spacing={3} pl={5} pr={5} mt={0}>
        {serviceItems.map((item, index) => (
          <ServiceItemCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            text={item.text}
            path={item.path}
          />
        ))}
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
