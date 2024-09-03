import { createContext, useState, useMemo, useCallback } from "react";
import { createTheme } from "@mui/material";
import { colorPalette } from "./colorPalette";

const paletteModes = {
  purple: colorPalette.purpleTheme,
  blue: colorPalette.blueTheme,
  red: colorPalette.redTheme,
  bumblebee: colorPalette.bumblebeeTheme,
  green: colorPalette.greenTheme,
  redPremium: colorPalette.redPremium,
};

const paletteEnum = (paletteMode) =>
  paletteModes[paletteMode] || colorPalette.purpleTheme;

export const tokens = (mode, paletteMode) => {
  const palette = paletteEnum(paletteMode);
  return palette[mode === "dark" ? "darkMode" : "lightMode"];
};

export const themeSettings = (mode, paletteMode) => {
  const colors = tokens(mode, paletteMode);

  const getFontFamily = () => {
    return ["Poppins", "sans-serif"].join(", ");
  };
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            background: {
              default: colors.primary[900],
            },
          }),
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
    },
    typography: {
      fontFamily: getFontFamily(),
      fontSize: 12,
      h1: {
        fontFamily: getFontFamily(),
        fontSize: 40,
      },
      h2: {
        fontFamily: getFontFamily(),
        fontSize: 32,
      },
      h3: {
        fontFamily: getFontFamily(),
        fontSize: 24,
      },
      h4: {
        fontFamily: getFontFamily(),
        fontSize: 20,
      },
      h5: {
        fontFamily: getFontFamily(),
        fontSize: 16,
      },
      h6: {
        fontFamily: getFontFamily(),
        fontSize: 14,
      },
    },
  };
};

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const [paletteMode, setPaletteMode] = useState("purple");
  const [theme, setTheme] = useState(() =>
    createTheme(themeSettings(mode, paletteMode))
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const newMode = prev === "light" ? "dark" : "light";
          setTheme(createTheme(themeSettings(newMode, paletteMode)));
          return newMode;
        });
      },
    }),
    [paletteMode]
  );

  const colorPaletteMode = useMemo(
    () => ({
      colorPaletteSelector: (newColorPalette) => {
        setPaletteMode(newColorPalette);
        setTheme(createTheme(themeSettings(mode, newColorPalette)));
        console.log("New palette mode:", newColorPalette);
      },
    }),
    [mode]
  );

  return [theme, colorMode, colorPaletteMode, paletteMode];
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  colorPaletteSelector: () => {},
});
