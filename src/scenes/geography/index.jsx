import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { GeographyChart } from "../../components/GeographyChart";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { LanguageModeContext } from "../../languageTheme";
import { useLanguageStyle } from "../../languageTheme";
import { Lan } from "@mui/icons-material";
export const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const style = useLanguageStyle(languageTheme.languageStatus);
  const geographyChartTheme = languageTheme?.menu.charts.GeographyChart;

  return (
    <Box m="20px">
      <Header
        title={geographyChartTheme.GeographyChartTitle}
        subtitle={geographyChartTheme.GeographyChartSubtitle}
      />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart />
      </Box>
    </Box>
  );
};
