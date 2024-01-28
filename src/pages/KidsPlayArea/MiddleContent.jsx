import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Student from "../../assets/student.gif";
import Emotions from "../../assets/emotions.gif";
import Maze from "../../assets/maze.gif";
import Idea from "../../assets/idea.gif";
import Skills from "../../assets/skills.gif";
import SocialCare from "../../assets/social-care.gif";

const itemsData = [
  {
    image: Student,
    text: "Teaches children self-regulation",
  },
  {
    image: Emotions,
    text: "Gives children an emotional outlet",
  },
  { image: Maze, text: "Teaches conflict resolution" },
  {
    image: Idea,
    text: "Develops creative thinking and storytelling ability",
  },
  {
    image: Skills,
    text: "Helps children improve social skills",
  },
  {
    image: SocialCare,
    text: "Supports and encourages literacy",
  },
];

const GridItem = ({ image, text }) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box borderRadius={1} p={0.2} bgcolor={"white"} maxWidth={80}>
            <img src={image} alt={text} />
          </Box>
        </Grid>
        <Grid item xs={9} display={"flex"} alignItems={"center"}>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const MiddleContent = () => {
  return (
    <Box mt={3} p={2}>
      <Box>
        <Typography variant="h5">
          Why dramatic play is good for children.
        </Typography>
        <Grid container spacing={2} mt={3}>
          {itemsData.map((item, index) => (
            <GridItem key={index} image={item.image} text={item.text} />
          ))}
        </Grid>
      </Box>

      <Box>
        <Typography variant="h5">
          Why dramatic play is good for children.
        </Typography>
      </Box>
    </Box>
  );
};

export default MiddleContent;
