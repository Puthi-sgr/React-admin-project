import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import { ResponsiveBar } from "@nivo/bar";
import { tokens, ColorModeContext } from "../theme";
import { mockBarData as data } from "../data/mockData";

export const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const [, , , paletteMode] = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode, paletteMode);

  const themeObject = {
    background: isDashboard ? "transparent" : colors.primary[400],
    text: {
      fontSize: 12,
      fill: colors.grey[100],
      outlineWidth: 1,
      outlineColor: "transparent",
    },
    axis: {
      domain: {
        line: {
          stroke: colors.grey[100],
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
          stroke: colors.grey[100],
          strokeWidth: 1,
        },
        text: {
          fontSize: 10,
          fill: colors.grey[100],
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    grid: {
      line: {
        stroke: colors.grey[200],
        strokeWidth: 1,
      },
    },
    legends: {
      title: {
        text: {
          fontSize: 14,
          fill: colors.grey[100],
          outlineWidth: 2,
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
        fontSize: 12,
        fill: colors.grey[100],
        outlineWidth: 0,
        outlineColor: colors.primary[500],
        outlineOpacity: 1,
      },
      link: {
        stroke: colors.primary[100],
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: colors.primary[500],
        outlineOpacity: 1,
      },
      outline: {
        stroke: colors.primary[100],
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: colors.primary[500],
        outlineOpacity: 1,
      },
      symbol: {
        fill: colors.primary[100],
        outlineWidth: 2,
        outlineColor: colors.primary[500],
        outlineOpacity: 1,
      },
    },
    tooltip: {
      wrapper: {},
      container: {
        background: colors.primary[400],
        color: colors.grey[100],
        fontSize: 17,
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  };

  return (
    <ResponsiveBar
      data={data}
      theme={themeObject}
      keys={["users", "tasks", "reports", "tickets", "projects", "meetings"]}
      indexBy="month"
      margin={{
        top: 50,
        right: isDashboard ? 1 : 70,
        bottom: 50,
        left: isDashboard ? 30 : 60,
      }}
      padding={0.45}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderWidth={1}
      borderColor={{ theme: "background" }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "month",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "category",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      totalsOffset={0}
      labelTextColor={
        isDashboard
          ? "transparent"
          : {
              from: "color",
              modifiers: [["darker", 1.6]],
            }
      }
      legends={
        isDashboard
          ? undefined
          : [
              {
                dataFrom: "keys",
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 86,
                translateY: 20,
                itemsSpacing: 2,
                itemWidth: 102,
                itemHeight: 21,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};
