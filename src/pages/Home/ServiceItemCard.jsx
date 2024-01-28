import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ServiceItemCard = ({ imageSrc, title }) => {
  return (
    <Grid item xs={6} md={3} display={"flex"} justifyContent={"center"}>
      <Box boxShadow={10} borderRadius={2.6} maxWidth={300} bgcolor={"#ffff"}>
        <img src={imageSrc} alt={title} />
        <Box textAlign={"center"} pb={2} pt={2}>
          <Typography fontWeight={700}>{title}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ServiceItemCard;
