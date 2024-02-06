import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Student from "../../assets/student.gif";
import Emotions from "../../assets/emotions.gif";
import Maze from "../../assets/maze.gif";
import Idea from "../../assets/idea.gif";
import Skills from "../../assets/skills.gif";
import SocialCare from "../../assets/social-care.gif";

import IndoorJungle from "../../assets/IndoorJungle.png";
import OutdoorHouse from "../../assets/OutdoorHouse.png";
import MiniGyms from "../../assets/MiniGyms.png";

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

      <Box mt={8}>
        <Typography variant="h5">
          Development through play – Jungle Gyms/Active play/Tree houses
        </Typography>
        <Typography mt={3} color={"#565656"}>
          Active play is critical for a child’s physical development. It helps
          with improving their coordination, balance, gross-motor skills – these
          are large movements like crawling and walking and jumping, it also
          helps with their fine-motor skills – which is hand and wrist
          movements. Physical play also improves balance, coordination,
          flexibility and helps strengthen the immune system too. It helps
          children work in teams with others and make new friends while playing.
          It also builds resilience and reduces stress/anger, it strengthens
          your bones and muscles, and helps improve your daily activity skills.
          Play has a whole repertoire of advances for development that will
          definitely be a huge boost, with results easy to see.
        </Typography>
      </Box>
      <Box mt={5} display={"flex"} justifyContent={"center"}>
        <Grid container spacing={4} maxWidth={1300}>
          <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
            <Box>
              <img src={IndoorJungle} />
              <Typography textAlign={"center"} mt={1} variant="h6">
                Indoor jungle gyms
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
            <Box>
              <img src={OutdoorHouse} />
              <Typography
                textAlign={"center"}
                mt={1}
                variant="h6"
                maxWidth={200}
              >
                Outdoor tree houses and play houses
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
            <Box>
              <img src={MiniGyms} />
              <Typography textAlign={"center"} mt={1} variant="h6">
                Obstacle / Mini Gyms
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={2} mb={5}>
        {/* <Typography  color={"#565656"}>
          These things can be custom made according to the budget, for homes or
          institutes/schools or even offices.
        </Typography>
        <Typography mt={3} color={"#565656"}>
          This is the kind of structure you should be looking at for corporates
          (indoor/outdoor versions) for those who have a budget of over 5 to 10
          million. Hotels don’t bat an eyelid for these costs, or places wanting
          to start up a play Centre. (for example, the Havelock city indoor play
          centre has not really been laid out properly, they could have done far
          more with the space, so there are a lot of places wanting to have good
          play areas, they just don’t know how – this is where you will come
          in).
        </Typography>
        <Typography mt={3} color={"#565656"}>
          There are a range of different choices, and for outdoor you can do a
          whole area (your tree house out door model). No one currently is
          marketing solutions like this, not all in one package like this. So
          you could launch yourself quite well. As of now there is no proper
          trampoline park in Lanka. (CCC has a small one that is it)
        </Typography> */}
      </Box>
    </Box>
  );
};

export default MiddleContent;
