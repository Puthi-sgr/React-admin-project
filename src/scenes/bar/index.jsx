import React, { useContext } from "react";
import { Box } from "@mui/material";
import { BarChart } from "../../components/BarChart";
import { Header } from "../../components/Header";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { LanguageModeContext } from "../../languageTheme";

export const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const barChartTheme = languageTheme?.menu.charts.BarChart;

  return (
    <Box m="20px">
      <Header
        title={barChartTheme.BarChartTitle}
        subtitle={barChartTheme.BarChartSubtitle}
      />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <BarChart />
      </Box>
    </Box>
  );
};
