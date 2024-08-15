import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { PieChart } from "../../components/PieChart";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
export const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Pie" subtitle="Simple Pie Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <PieChart />
      </Box>
    </Box>
  );
};
