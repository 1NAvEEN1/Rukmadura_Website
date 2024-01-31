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
        <Typography textAlign={"center"} maxWidth={1000}>
          Welcome to Rukmadura, where we specialize in crafting serene retreats
          amid the blessings nature has bestowed upon your gardens, all at
          affordable prices. Our team, boasting over 20 years of expertise in
          the building industry, includes architects, interior designers,
          carpenters, woodworkers, and steel structure specialists.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={3}>
        <Typography textAlign={"center"} maxWidth={1000}>
          Originating with a focus on treehouses, Rukmadura has expanded its
          offerings to include Kids' Play Areas, Chalets, and Tiny Houses. Our
          passion is to seamlessly integrate nature into your living spaces,
          taking your home outdoors amidst Sri Lanka's lush landscape—a paradise
          of botanical beauty that we explore with constructions harmonizing
          with Mother Nature.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={3}>
        <Typography textAlign={"center"} maxWidth={1000}>
          Rukmadura's designs are versatile, customized to blend with the unique
          features nature provides in your location. Whether creating a play
          area for kids, a relaxing man cave, a structure for business
          interests, or a tranquil workspace in your garden, we craft spaces
          that seamlessly integrate with the natural environment, captivating
          friends, family, and visitors alike.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={3}>
        <Typography textAlign={"center"} maxWidth={1000}>
          Our skilled team leverages diverse expertise to provide heavenly
          spaces through customized designs and modern technology. Prioritizing
          durability, a Rukmadura creation lasts for decades with minimal
          maintenance, unlike generic structures that may require a total
          makeover within a couple of years. Meticulously crafted designs
          harmonize with surroundings, promoting greener concepts for leisure,
          allowing you to immerse yourself in the beauty bestowed upon us by
          Mother Nature
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={8}>
        <Typography textAlign={"center"} maxWidth={1000}>
          To assure quality, we offer a 5-year comprehensive warranty for the
          structure. These spaces of heaven bring not only peace but also
          inspire creativity, mindfulness, and foster happy family lives.
          Rukmadura invites you to embrace a unique blend of craftsmanship,
          nature, and innovation as we transform your garden into a haven of
          tranquility.
        </Typography>
      </Box>

      <Typography textAlign={"center"} variant="h5">
        Sustainability at it best
      </Typography>

      <Box display={"flex"} justifyContent={"center"} mb={3} mt={3}>
        <Typography textAlign={"center"} maxWidth={1000}>
          At Rukmadura, our commitment to sustainability is woven into the
          fabric of our construction philosophy. We prioritize harmonious
          integration with nature, employing nature-friendly techniques
          developed in collaboration with environmental experts. These methods
          ensure minimal impact on the habitat, emphasizing respect for the
          environment. Our structures are thoughtfully designed to complement
          natural landscapes, using sustainable materials and technologies for
          long-lasting impact. Sustainability is not just a practice for us;
          it's a guiding principle that shapes every aspect of our eco-friendly
          construction, contributing to the preservation of the natural beauty
          we are inspired by.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={10}>
        <img src={ECO} width={200} />
      </Box>
    </Box>
  );
};

export default AboutUs;
