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
    title: "Personal Retreat",
    text: "A tree house can serve as your personal retreat, providing a tranquil space to relax, read a book, or simply enjoy the beauty of your surroundings. It offers a peaceful escape from the hustle and bustle of daily life, allowing you to unwind and rejuvenate.",
  },
  {
    image: H3,
    title: "Personal Retreat",
    text: "A tree house can serve as your personal retreat, providing a tranquil space to relax, read a book, or simply enjoy the beauty of your surroundings. It offers a peaceful escape from the hustle and bustle of daily life, allowing you to unwind and rejuvenate.",
  },
  {
    image: H4,
    title: "Increased Property Value",
    text: "Well-designed and aesthetically pleasing tree houses can enhance the overall value of your property. Potential buyers often see unique outdoor features like tree houses as attractive additions, making your property stand out in the real estate market.",
  },
  {
    image: H5,
    title: "Educational Opportunities",
    text: "A tree house can be an educational space for children. It offers a unique vantage point for observing nature, teaching them about the environment, wildlife, and the changing seasons. It can spark an interest in the outdoors and foster a love for learning.",
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
