import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const colorPalette = {
  blueTheme: {
    grey: {
      100: "#cdd0d1",
      200: "#9ba2a3",
      300: "#697376",
      400: "#374548",
      500: "#05161a",
      600: "#041215",
      700: "#030d10",
      800: "#02090a",
      900: "#010405",
    },
    primary: {
      100: "#fcfefe",
      200: "#f8fdfe",
      300: "#f5fcfd",
      400: "#f1fbfd",
      500: "#eefafc",
      600: "#bec8ca",
      700: "#8f9697",
      800: "#5f6465",
      900: "#303232",
    },
    blueAccent: {
      100: "#d9f1f7",
      200: "#b2e3f0",
      300: "#8cd4e8",
      400: "#65c6e1",
      500: "#3fb8d9",
      600: "#3293ae",
      700: "#266e82",
      800: "#194a57",
      900: "#0d252b",
    },
    greenAccent: {
      100: "#e7e9fa",
      200: "#cfd3f6",
      300: "#b7bdf1",
      400: "#9fa7ed",
      500: "#8791e8",
      600: "#6c74ba",
      700: "#51578b",
      800: "#363a5d",
      900: "#1b1d2e",
    }, //shade of purple
  },
  lightBlueTheme: {
    grey: {
      100: "#d1d8e1",
      200: "#a3b1c3",
      300: "#7589a4",
      400: "#476286",
      500: "#193b68",
      600: "#142f53",
      700: "#0f233e",
      800: "#0a182a",
      900: "#050c15",
    },
    primary: {
      100: "#ffffff",
      200: "#ffffff",
      300: "#ffffff",
      400: "#ffffff",
      500: "#ffffff",
      600: "#cccccc",
      700: "#999999",
      800: "#666666",
      900: "#333333",
    },
    blueAccent: {
      100: "#d0edff",
      200: "#a1dbff",
      300: "#72c9ff",
      400: "#43b7ff",
      500: "#14a5ff",
      600: "#1084cc",
      700: "#0c6399",
      800: "#084266",
      900: "#042133",
    },
    greenAccent: {
      100: "#d0fbff",
      200: "#a1f7ff",
      300: "#72f3ff",
      400: "#43efff",
      500: "#14ebff",
      600: "#10bccc",
      700: "#0c8d99",
      800: "#085e66",
      900: "#042f33",
    }, //light blue
  },
  redAccentTheme: {
    grey: {
      900: "#141414",
      800: "#292929",
      700: "#3d3d3d",
      600: "#525252",
      500: "#666666",
      400: "#858585",
      300: "#a3a3a3",
      200: "#c2c2c2",
      100: "#e0e0e0",
    },
    primary: {
      100: "#ffffff",
      200: "#ffffff",
      300: "#ffffff",
      400: "#ffffff",
      500: "#ffffff",
      600: "#cccccc",
      700: "#999999",
      800: "#666666",
      900: "#333333",
    },
    blueAccent: {
      100: "#ffccd6",
      200: "#ff99ad",
      300: "#fe6684",
      400: "#fe335b",
      500: "#fe0032",
      600: "#cb0028",
      700: "#98001e",
      800: "#660014",
      900: "#33000a",
    }, //red
    greenAccent: {
      100: "#d1d1d1",
      200: "#a2a3a4",
      300: "#747476",
      400: "#454649",
      500: "#17181b",
      600: "#121316",
      700: "#0e0e10",
      800: "#090a0b",
      900: "#050505",
    }, //black
  },

  darkMode: {
    grey: {
      900: "#141414",
      800: "#292929",
      700: "#3d3d3d",
      600: "#525252",
      500: "#666666",
      400: "#858585",
      300: "#a3a3a3",
      200: "#c2c2c2",
      100: "#e0e0e0",
    },
    primary: {
      900: "#040509",
      800: "#080b12",
      700: "#0c101b",
      600: "#101624",
      500: "#141b2d",
      400: "#1E2A40",
      300: "#727681",
      200: "#a1a4ab",
      100: "#d0d1d5",
    },
    greenAccent: {
      900: "#0f2922",
      800: "#1e5245",
      700: "#2e7c67",
      600: "#3da58a",
      500: "#4cceac",
      400: "#70d8bd",
      300: "#94e2cd",
      200: "#b7ebde",
      100: "#dbf5ee",
    },
    redAccent: {
      900: "#2c100f",
      800: "#58201e",
      700: "#832f2c",
      600: "#af3f3b",
      500: "#db4f4a",
      400: "#e2726e",
      300: "#e99592",
      200: "#f1b9b7",
      100: "#f8dcdb",
    },
    blueAccent: {
      900: "#151632",
      800: "#2a2d64",
      700: "#3e4396",
      600: "#535ac8",
      500: "#6870fa",
      400: "#868dfb",
      300: "#a4a9fc",
      200: "#c3c6fd",
      100: "#e1e2fe",
    },
  },

  lightMode: {
    grey: {
      100: "#141414",
      200: "#292929",
      300: "#3d3d3d",
      400: "#525252",
      500: "#666666",
      600: "#858585",
      700: "#a3a3a3",
      800: "#c2c2c2",
      900: "#e0e0e0",
    },
    primary: {
      100: "#040509",
      200: "#080b12",
      300: "#0c101b",
      400: "#f2f0f0",
      500: "#141b2d",
      600: "#434957",
      700: "#727681",
      800: "#a1a4ab",
      900: "#d0d1d5",
    },
    greenAccent: {
      100: "#0f2922",
      200: "#1e5245",
      300: "#2e7c67",
      400: "#3da58a",
      500: "#4cceac",
      600: "#70d8bd",
      700: "#94e2cd",
      800: "#b7ebde",
      900: "#dbf5ee",
    },
    redAccent: {
      100: "#2c100f",
      200: "#58201e",
      300: "#832f2c",
      400: "#af3f3b",
      500: "#db4f4a",
      600: "#e2726e",
      700: "#e99592",
      800: "#f1b9b7",
      900: "#f8dcdb",
    },
    blueAccent: {
      100: "#151632",
      200: "#2a2d64",
      300: "#3e4396",
      400: "#535ac8",
      500: "#6870fa",
      600: "#868dfb",
      700: "#a4a9fc",
      800: "#c3c6fd",
      900: "#e1e2fe",
    },
  },
};

//colors design tokens
export const tokens = (mode) => {
  if (mode === "skyBlue") {
    return colorPalette.lightBlueTheme;
  } else if (mode === "blue") {
    return colorPalette.blueTheme;
  } else if (mode === "red") {
    return colorPalette.redAccentTheme;
  } else if (mode === "dark") {
    return colorPalette.darkMode;
  } else if (mode === "light") {
    return colorPalette.lightMode;
  }
};

//MUI theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

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
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : mode === "light"
        ? {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }
        : mode === "skyBlue"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.blueAccent[400],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[100],
            },
          }
        : mode === "blue"
        ? {
            primary: {
              main: colors.primary[400],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[600],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.greenAccent[900],
            },
          }),
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

//context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {}, //an empty place holder
  colorPaletteSelector: () => {}, //empty place holder for color palette mode
});

export const useMode = () => {
  const [mode, setMode] = useState("dark"); //default to dark
  const [paletteMode, setPaletteMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  //color palette setter

  const colorPaletteMode = useMemo(
    () => ({
      colorPaletteSelector: (newColorPalette) => {
        console.log(newColorPalette, " old");
        setPaletteMode(newColorPalette);
        console.log(paletteMode, "new");
        console.log("The old mode: ", mode);
      }, //newColorPalette is useInput
    }),
    [paletteMode]
  );

  const theme = useMemo(
    () => createTheme(themeSettings(paletteMode)),
    [mode, paletteMode]
  );
  //create a theme for material UI by passing the mode

  return [theme, colorMode, colorPaletteMode, paletteMode];
};
