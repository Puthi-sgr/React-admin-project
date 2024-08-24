import React, { useContext } from "react";
import { LanguageModeContext, useLanguageStyle } from "../languageTheme";
import { tokens } from "../theme";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        fontFamily={fontStyle}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        fontFamily={fontStyle}
        variant="h5"
        color={colors.greenAccent[400]}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
