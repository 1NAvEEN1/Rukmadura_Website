import React, { useState } from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServiceItemCard = ({ imageSrc, title, text, path }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      navigate(path);
    }
  };

  return (
    <Grid item xs={6} lg={3} display={"flex"} justifyContent={"center"}>
      <Box
        boxShadow={10}
        borderRadius={2.6}
        maxWidth={300}
        bgcolor={"#ffff"}
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img src={imageSrc} alt={title} />
        <Box textAlign={"center"} pb={2} pt={2}>
          <Typography fontWeight={700}>{title}</Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#00AC8C",
            padding: "10px",
            zIndex: 1000,
            height: "100%",
            width: "100%",
            borderRadius: 2.5,
            opacity: isHovered && !isMobile ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            pointerEvents: isHovered && !isMobile ? "auto" : "none",
            color: "white",
            p: { sm: 3, lg: 5 },
            display: isMobile ? "none" : "block", // Hide the hover card in mobile view
          }}
        >
          <Grid container height={"100%"}>
            <Grid item xs={12}>
              <Typography variant="h6" textAlign={"center"}>
                {title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              <Typography textAlign={"center"} variant="smallText">
                {text}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"end"}
            >
              <Button
                variant="contained"
                sx={{ bgcolor: "white", color: "black" }}
                onClick={() => navigate(path)}
                size="small"
              >
                <Typography
                  fontWeight={500}
                  variant="body2"
                  sx={{
                    fontSize: {
                      lg: 13,
                      sm: 11,
                    },
                  }}
                >
                  Learn more
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default ServiceItemCard;
