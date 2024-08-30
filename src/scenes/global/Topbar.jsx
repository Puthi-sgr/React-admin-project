import { Box, Icon, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens, toggleColorMode } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { LanguageModeContext } from "../../languageTheme";
import Flag from "react-world-flags";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [colorMode, colorPaletteMode] = useContext(ColorModeContext);
  const { languageMode, languageTheme } = useContext(LanguageModeContext);
  const languageStatus = languageTheme?.languageStatus;

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    colorPaletteMode.colorPaletteSelector(event.target.value);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        backgroundColor: colors.primary[400],
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
      }}
      display="flex"
      justifyContent="space-between"
      p={2}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }} />
      </Box>
      {/*Icon */}
      <Box display="flex" gap="0.5rem">
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
        <IconButton
          sx={{ padding: 0, overflow: "hidden" }}
          onClick={languageMode.toggleLanguageMode}
        >
          {languageStatus === "en" ? (
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Flag
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                code="kh"
                fallback={<NotificationsOutlinedIcon />}
              />
            </Box>
          ) : (
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Flag
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                code="gb"
                fallback={<NotificationsOutlinedIcon />}
              />
            </Box>
          )}
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"skyBlue"}>Sky Blue</MenuItem>
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"red"}>Red demon</MenuItem>
              <MenuItem value={"dark"}>Dark</MenuItem>
              <MenuItem value={"light"}>Light</MenuItem>
            </Select>
          </FormControl>
        </IconButton>
      </Box>
    </Box>
  );
};
