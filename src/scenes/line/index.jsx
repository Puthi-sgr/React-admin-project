import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { LineChart } from "../../components/LineChart";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { LanguageModeContext } from "../../languageTheme";

export const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const lineChartTheme = languageTheme?.menu.charts.LineChart;

  return (
    <Box m="20px">
      <Header
        title={lineChartTheme.LineChartTitle}
        subtitle={lineChartTheme.LineChartSubtitle}
      />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <LineChart />
      </Box>
    </Box>
  );
};
