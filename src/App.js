import { ColorModeContext, useMode } from "./theme";
import { LanguageModeContext } from "./languageTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { TopBar } from "./scenes/global/Topbar";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./scenes/global/Sidebar";
import { Dashboard } from "./scenes/dashboard";
// import Dashboard from "./scenes/global/Invoices";
import { Team } from "./scenes/team";
import { Invoices } from "./scenes/invoices/index";
import { Contacts } from "./scenes/contacts/index";
import { Form } from "./scenes/form/index";
import { Calendar } from "./scenes/calendar/index";
import { FAQ } from "./scenes/faq/index";
import { Bar } from "./scenes/bar/index";
import { Pie } from "./scenes/pie/index";
import { Line } from "./scenes/line/index";
import { Geography } from "./scenes/geography/index";
import { useLanguageMode } from "./languageTheme";
import { CrispChat } from "./Crispchat";
const App = () => {
  const [languageMode, languageTheme, language] = useLanguageMode();
  const [theme, colorMode, colorPaletteMode] = useMode();
  return (
    <LanguageModeContext.Provider
      value={{ languageMode, languageTheme, language }}
    >
      <ColorModeContext.Provider value={[colorMode, colorPaletteMode]}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <TopBar />
            <div id="side&main" style={{ display: "flex" }}>
              <Sidebar />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoice" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/geography" element={<Geography />} />
                </Routes>
                <CrispChat />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </LanguageModeContext.Provider>
  );
};

export default App;
