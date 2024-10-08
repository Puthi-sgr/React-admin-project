import React, { useContext } from "react";
import { Box, useTheme, Typography, Icon } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { ProgressCircles } from "./ProgressCircles";
import { LanguageModeContext, useLanguageStyle } from "../languageTheme";

export const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const [, , paletteMode] = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode, paletteMode);
  const { languageTheme } = useContext(LanguageModeContext);
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);

  return (
    <Box width="100%" m="0 30px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="0 0px 0 0"
      >
        <Box>
          <Box sx={{ colors: colors.greenAccent[500] }}>{icon}</Box>

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircles progress={progress} />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: colors.greenAccent[500] }}
          fontFamily={fontStyle.fontFamily}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};
