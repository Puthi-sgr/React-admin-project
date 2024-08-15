import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { LineChart } from "../../components/LineChart";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
export const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Line chart" subtitle="Simple Line Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <LineChart />
      </Box>
    </Box>
  );
};
