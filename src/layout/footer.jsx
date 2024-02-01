import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import LogoWhite from "../assets/LogoWhite.png";
import FB from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";

const Footer = () => {
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
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        mt={1}
        gap={2}
        mb={3}
      >
        <IconButton>
          <a
            href="https://www.facebook.com/Rukmadurapage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FB} width={30} />
          </a>
        </IconButton>
        <IconButton>
          <a
            href="https://www.instagram.com/rukmadura/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} width={35} />
          </a>
        </IconButton>
        <IconButton>
          <a href="mailto:rukmadura@gmail.com">
            <img src={Email} width={30} />
          </a>
        </IconButton>
        <IconButton>
          <a href="tel:+94777491496">
            <img src={Phone} width={28} />
          </a>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;
