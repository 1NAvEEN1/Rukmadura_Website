import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Location from "../../assets/location.svg";
import Email from "../../assets/MailGrey.svg";
import Phone from "../../assets/PhoneGrey.svg";
import Heading from "./Heading";
import MiddleContent from "./MiddleContent";

const KidsPlayArea = () => {
  return (
    <Box pt={12} minHeight={"78svh"}>
      <Heading />
      <MiddleContent />
    </Box>
  );
};

export default KidsPlayArea;
