import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Container, Typography } from "@mui/material"; // Import Box and Typography from Material-UI

const CarouselComponent = () => {
  var items = [
    {
      name: "Welcome to Ceylon Exports Hub",
      language: "Eng",
      description:
        "We're delighted to invite you to become a new supplier contributing to the growth of Sri Lanka's rural economy by showcasing its quality products on the global stage.",
    },
    {
      name: "Welcome to Ceylon Exports Hub",
      language: "Sinh",
      description:
        "ශ්‍රී ලංකාවේ ගුණාත්මක නිෂ්පාදන ගෝලීය වෙළෙදපොළට සම්බන්ධ කරමින්‌ ශ්‍රී ලංකා ග්‍රාමීය ආර්ථිකය වර්ධනය කිරීම අරමුණු කරගත්‌ අප ව්‍යාපාරයට නවක සැපයුම්කරුවෙකු ලෙස ඔබට සම්බන්ධ විය හැකි බව සතුටින්‌ දැනුමිදෙමු",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Box
          key={i}
          sx={{
            height: { lg: "35svh", xs: "38svh" },
          }}
        >
          <Typography variant="h5" textAlign={"center"}>
            {item.name}
          </Typography>
          <Typography
            mt={2}
            textAlign={"center"}
            variant={item.language === "Sinh" ? "body1" : "h4"}
            fontFamily={
              item.language === "Sinh" ? "Noto Sans Sinhala" : "Nunito"
            }
          >
            {item.description}
          </Typography>{" "}
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
