import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import { ProgressCircles } from "./ProgressCircles";

export const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="0 10px 0 0"
      >
        {icon}
        <Box>
          <ProgressCircles progress={progress} />
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: colors.greenAccent[500] }}
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
