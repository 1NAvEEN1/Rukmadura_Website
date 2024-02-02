import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import H2 from "../../assets/H2.svg";
import H3 from "../../assets/H3.svg";
import H4 from "../../assets/H4.svg";
import H5 from "../../assets/H5.svg";
import H6 from "../../assets/H6.svg";

const itemsData = [
  {
    image: H2,
    title: "Flexible Growth for Young Couples",
    text: "For newlyweds looking to establish their life together, a Ruk Madura tiny house provides an ideal starting point. These homes are not just residences; they're the foundation upon which to build dreams. Their compact nature is perfect for young couples starting small, allowing them to gradually expand their living space as their family and needs grow over time.",
  },
  {
    image: H3,
    title: "Customizable Designs to Suit Your Lifestyle",
    text: "Ruk Madura takes pride in offering customizable designs that cater to the unique needs and preferences of our clients. Whether you're a couple looking for a cozy nest or envisioning a space for a growing family, our tiny homes can be tailored to fit your lifestyle, ensuring that every square foot serves a purpose.",
  },
  {
    image: H4,
    title: "Sustainable Living without Sacrifice",
    text: "Tiny homes by Ruk Madura are crafted with sustainability in mind. Embrace a lifestyle that reduces your environmental footprint without compromising on comfort or style. Our homes feature energy-efficient designs, eco-friendly materials, and the option to incorporate renewable energy sources, allowing you to live responsibly without sacrificing modern conveniences.",
  },
  {
    image: H5,
    title: "Portability and Adaptability",
    text: "Life is an ever-evolving journey, and Ruk Madura tiny homes are designed to adapt to your changing circumstances. Whether you want to relocate for a job, travel the country, or simply explore different neighborhoods, the portability of our tiny homes provides you with the freedom to live where you desire.",
  },
];

const GridItem = ({ image, title, text }) => {
  return (
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <img src={image} />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography fontWeight={500}>{title}</Typography>
          <Typography mt={2} color={"#565656"}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const MiddleContent = () => {
  return (
    <Box
      mt={-3}
      p={2}
      sx={{
        pl: {
          xs: 4,
          lg: 9,
        },
      }}
    >
      <Grid container spacing={4} mt={3}>
        {itemsData.map((item, index) => (
          <GridItem
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={2}
              md={1}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box>
                <img src={H6} />
              </Box>
            </Grid>
            <Grid item xs={10} md={11} pr={2}>
              <Typography fontWeight={500}>
                Expert Craftsmanship and Quality Assurance
              </Typography>
              <Typography mt={2} color={"#565656"}>
                Ruk Madura takes pride in its commitment to craftsmanship and
                quality. Our tiny homes are built with precision and attention
                to detail, ensuring durability and longevity. You can trust that
                your investment in a Ruk Madura tiny house is an investment in a
                home that will stand the test of time.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box mt={8} mb={8}>
        <Typography fontWeight={500} textAlign={"center"}>
          Start Your Journey with Ruk Madura:
        </Typography>
        <Typography color={"#565656"} mt={4} textAlign={"center"}>
          As you embark on the exciting journey of marriage or navigate the
          challenges of the economic landscape, let Ruk Madura be your partner
          in creating a home that reflects your values, meets your needs, and
          evolves with you. Contact us today and discover how a Ruk Madura tiny
          home can be the key to a more affordable, adaptable, and aspirational
          way of living.
        </Typography>
      </Box>
    </Box>
  );
};

export default MiddleContent;
