import React from "react";
import { useTheme } from "@emotion/react";
import { ResponsiveLine } from "@nivo/line";

import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

export const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const themeObject = {
    background: colors.primary[400],
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
          strokeWidth: 1,
        },
        text: {
          fontSize: 11,
          fill: colors.grey[100],
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    grid: {
      line: {
        stroke: colors.grey[800],
        strokeWidth: 1,
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
      data={data}
      theme={themeObject}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickValues: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
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
