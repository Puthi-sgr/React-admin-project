import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { mockLineData } from "../data/mockData";
import { geoLocalizedMockData } from "../data/mockData";
import { LanguageModeContext } from "../languageTheme";

export const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);

  const themeObject = {
    background: isDashboard ? "transparent" : colors.primary[400],
    text: {
      fontSize: 11,
      fill: colors.grey[100],
      outlineWidth: 0,
      outlineColor: "transparent",
    },
    axis: {
      domain: {
        line: {
          stroke: colors.greenAccent[500],
          strokeWidth: 1,
        },
      },
      legend: {
        text: {
          fontSize: 12,
          fill: colors.grey[100],
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      ticks: {
        line: {
          stroke: colors.greenAccent[500],
          strokeWidth: 2,
        },
        text: {
          fontSize:
            languageTheme.languageStatus === "en" ? "0.70rem" : "0.60rem",
          fontFamily:
            languageTheme.languageStatus === "kh"
              ? "'Noto Sans Khmer', sans-serif"
              : "inherit",
          fill: colors.grey[100],
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    grid: {
      line: {
        stroke: colors.primary[300],
        strokeWidth: 1,
        opacity: 0.2,
      },
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: colors.grey[100],
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      text: {
        fontSize: 11,
        fill: colors.grey[100],
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: colors.grey[100],
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: colors.grey[100],
        outlineWidth: 2,
        outlineColor: colors.primary[400],
        outlineOpacity: 1,
      },
      link: {
        stroke: colors.greenAccent[500],
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: colors.primary[400],
        outlineOpacity: 1,
      },
      outline: {
        stroke: colors.greenAccent[500],
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: colors.primary[400],
        outlineOpacity: 1,
      },
      symbol: {
        fill: colors.greenAccent[500],
        outlineWidth: 2,
        outlineColor: colors.primary[400],
        outlineOpacity: 1,
      },
    },
    tooltip: {
      container: {
        background: colors.primary[400],
        color: colors.grey[100],
        fontSize: 12,
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  };

  return (
    <ResponsiveLine
      data={mockLineData(languageTheme.month)}
      theme={themeObject}
      margin={{ top: 50, right: 140, bottom: 50, left: 100 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "2023 - 2024",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickValues: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? null : "amount",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      // colors={isDashboard ? { datum: "color" } : { scheme: "dark2" }}
      colors={
        // theme.palette.mode === "dark" ? { datum: "color" } : { scheme: "dark2" }
        { datum: "color" }
      }
      lineWidth={4}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
