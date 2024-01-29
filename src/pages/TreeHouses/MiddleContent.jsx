import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import T3 from "../../assets/T3.svg";
import T4 from "../../assets/T4.svg";
import T5 from "../../assets/T5.svg";
import T6 from "../../assets/T6.svg";
import T7 from "../../assets/T7.svg";
import T8 from "../../assets/T8.svg";

const itemsData = [
  {
    image: T3,
    title: "Personal Retreat",
    text: "A tree house can serve as your personal retreat, providing a tranquil space to relax, read a book, or simply enjoy the beauty of your surroundings. It offers a peaceful escape from the hustle and bustle of daily life, allowing you to unwind and rejuvenate.",
  },
  {
    image: T4,
    title: "Increased Property Value",
    text: "Well-designed and aesthetically pleasing tree houses can enhance the overall value of your property. Potential buyers often see unique outdoor features like tree houses as attractive additions, making your property stand out in the real estate market.",
  },
  {
    image: T5,
    title: "Educational Opportunities",
    text: "A tree house can be an educational space for children. It offers a unique vantage point for observing nature, teaching them about the environment, wildlife, and the changing seasons. It can spark an interest in the outdoors and foster a love for learning.",
  },
  {
    image: T6,
    title: "Versatility in Design",
    text: "Tree houses come in various designs and styles, from simple and rustic structures to more elaborate and luxurious designs. Whether you want a traditional wooden cabin or a modern architectural masterpiece, the versatility in design allows you to choose a tree house that complements your personal taste and the overall aesthetic of your property.",
  },
  {
    image: T7,
    title: "Family Bonding",
    text: "Building or spending time in a tree house can be a collaborative family project. The process of planning, designing, and constructing the tree house fosters teamwork and strengthens family bonds. Once completed, it becomes a shared space for family activities and quality time together.",
  },
  {
    image: T8,
    title: "Environmental Connection",
    text: "Being up in the trees provides a unique connection to the environment. It allows you to appreciate the beauty of your surroundings from a different perspective and encourages a sense of environmental awareness and appreciation.",
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
      </Grid>
    </Box>
  );
};

export default MiddleContent;
