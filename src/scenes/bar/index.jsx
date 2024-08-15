import React from "react";
import { Box } from "@mui/material";
import { BarChart } from "../../components/BarChart";
import { Header } from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
export const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Bar chart" subtitle="Simple Bar Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <BarChart />
      </Box>
    </Box>
  );
};
