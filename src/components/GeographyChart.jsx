import React from "react";
import { useTheme } from "@emotion/react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";

export const GeographyChart = (isDashboard = false) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          fontSize: 11,
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
        stroke: colors.primary[100],
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: colors.primary[400],
        outlineOpacity: 1,
      },
      outline: {
        stroke: colors.primary[100],
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: colors.primary[400],
        outlineOpacity: 1,
      },
      symbol: {
        fill: colors.primary[100],
        outlineWidth: 2,
        outlineColor: colors.primary[400],
        outlineOpacity: 1,
      },
    },
    tooltip: {
      wrapper: {},
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
    <ResponsiveChoropleth
      data={data}
      theme={themeObject}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={!isDashboard ? 40 : 100}
      projectionTranslation={!isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={isDashboard ? false : true}
      graticuleLineColor="#dddddd"
      borderWidth={1.5}
      borderColor="#152538"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: "#444444",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000000",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};
