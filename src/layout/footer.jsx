import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import LogoWhite from "../assets/LogoWhite.png";
import FB from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";

const footer = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "black",
      }}
    >
      <Grid item xs={12} display={"flex"} justifyContent={"center"} mt={5}>
        <img src={LogoWhite} width={130} />
      </Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"center"} mt={1}>
        <Typography color={"grey"}>
          Creating Little Spaces of Heavens
        </Typography>
      </Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"center"} mt={1} gap={2} mb={3}>
        <IconButton>
          <img src={FB} width={30} />
        </IconButton>
        <IconButton>
          <img src={Instagram} width={35} />
        </IconButton>
        <IconButton>
          <img src={Email} width={30} />
        </IconButton>
        <IconButton>
          <img src={Phone} width={28} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default footer;
