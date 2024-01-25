import { Grid, Box, IconButton, Button, Typography } from "@mui/material";

import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import store from "../../app/store";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../reducers/formSlice";

const NavButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let navigate = useNavigate();

  const pages = [
    "",
    "LangSelect",
    "BasicDetails",
    "ProductDetails",
    "BusinessDetails",
    "CertificatesDetails",
    "ExportingDetails",
    "AskForExport",
  ];
  const [currentPageNavButton, setCurrentPageNavButton] = useState(
    store.getState().form.currentPage
  );

  const navigateToNextPage = () => {
    const nextPageNavButton = currentPageNavButton + 1;
    if (nextPageNavButton < pages.length) {
      dispatch(setCurrentPage(nextPageNavButton));
      setCurrentPageNavButton(nextPageNavButton);
      navigate(`/Supplier-Form-App/${pages[nextPageNavButton]}`);
    } else {
      navigate("/Supplier-Form-App/FinalPage");
    }
  };

  const navigateToPreviousPage = () => {
    const prevPageNavButton = currentPageNavButton - 1;
    if (prevPageNavButton >= 0) {
      dispatch(setCurrentPage(prevPageNavButton));
      setCurrentPageNavButton(prevPageNavButton);
      navigate(`/Supplier-Form-App/${pages[prevPageNavButton]}`);
    } else {
      // Handle if trying to navigate back from the first page
    }
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTop();
  }, [currentPageNavButton]);
  return (
    <Box
      item
      xs={12}
      display="flex"
      alignItems="end"
      justifyContent="center"
      sx={{
        height: {
          lg: "10svh",
          xs: "10svh",
        },
        gap: {
          sm: 5,
          xs: 0,
        },
      }}
    >
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{
          height: 50,
          borderRadius: 3,
          width: {
            sm: 200,
            xs: "100%",
          },
          display: {
            sm: "inherit",
            xs: "none",
          },
        }}
        color="secondary"
        onClick={navigateToPreviousPage}
      >
        <Typography textTransform="capitalize" variant="h6">
          {t("translation:LanguageSelect:Back")}
        </Typography>
      </Button>
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{
          height: 50,
          borderRadius: 3,
          color: "white",
          width: {
            sm: 200,
            xs: "100%",
          },
        }}
        onClick={navigateToNextPage}
      >
        <Typography textTransform="capitalize" variant="h6">
          {t("translation:LanguageSelect:Continue")}
        </Typography>
      </Button>
    </Box>
  );
};

export default NavButton;
