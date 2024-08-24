import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { PieChart } from "../../components/PieChart";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { LanguageModeContext } from "../../languageTheme";

export const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const pieChartTheme = languageTheme?.menu.charts.PieChart;

  return (
    <Box m="20px">
      <Header
        title={pieChartTheme.PieChartTitle}
        subtitle={pieChartTheme.PieChartSubtitle}
      />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <PieChart />
      </Box>
    </Box>
  );
};
