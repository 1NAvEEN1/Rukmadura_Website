import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ECO from "../../assets/ECO.png";

const AboutUs = () => {
  return (
    <Box pt={12} minHeight={"78svh"} pl={1} pr={1}>
      <Typography variant="h3" textAlign={"center"}>
        About Us
      </Typography>

      <Box display={"flex"} justifyContent={"center"} mb={3} mt={5}>
        <Typography textAlign={"center"} maxWidth={850}>
          Welcome to Rukmadura, where we specialize in crafting serene retreats
          amid the blessings nature has bestowed upon your gardens, all at
          affordable prices. Our team, boasting over 20 years of expertise in
          the building industry, includes architects, interior designers,
          carpenters, woodworkers, and steel structure specialists.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={3}>
        <Typography textAlign={"center"} maxWidth={850}>
          Originating with a focus on treehouses, Rukmadura has expanded its
          offerings to include Kids' Play Areas, Chalets, and Tiny Houses. Our
          passion is to seamlessly integrate nature into your living spaces,
          taking your home outdoors amidst Sri Lanka's lush landscape—a paradise
          of botanical beauty that we explore with constructions harmonizing
          with Mother Nature.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={3}>
        <Typography textAlign={"center"} maxWidth={900}>
          The skill sets of all these individuals are combined, to provide our
          customers with heavenly spaces in the form of tree houses using the
          newest designs and modern technology. We have utilized the knowledge
          acquired in the industry of construction, to construct your tree house
          that lasts for decades. This ensures minimal maintenance requirements
          and repairs over a period. (as oppose to a generic tree house that
          requires a total makeover within a couple of years)
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={3}>
        <Typography textAlign={"center"} maxWidth={850}>
          Our designs ensure the spaces we create blends in with the surrounding
          environment. Our aim is to ensure people in Sri Lanka gets closer to
          greener concepts for leisure whilst enjoying the beauties bestowed
          upon us by mother nature. We provide a 5-year full comprehensive
          warrantee to the structure and partial warrantee there on.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={8}>
        <Typography textAlign={"center"} maxWidth={900}>
          We trust these spaces of heaven would help our customers be peaceful
          resulting in creativeness and mindfulness and happy family lives.
        </Typography>
      </Box>

      <Typography textAlign={"center"} variant="h5">
        Sustainability at it best
      </Typography>

      <Box display={"flex"} justifyContent={"center"} mb={3} mt={3}>
        <Typography textAlign={"center"} maxWidth={700}>
          We believe in building in a way which is harmonious with nature, using
          shapes and approaches which complement the environment.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={5}>
        <Typography textAlign={"center"} maxWidth={700}>
          By implementing Nature friendly construction techniques learnt whilst
          working with experts in India, we never cause any damage to trees we
          are working with.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={10}>
        <img src={ECO} width={200} />
      </Box>
    </Box>
  );
};

export default AboutUs;
