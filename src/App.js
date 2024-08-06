import { ColorModeContext, useMode } from "./theme";
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
// import Bar from "./scenes/global/Bar";
// import Pie from "./scenes/global/Pie";
// import FAQ from "./scenes/global/FAQ";
// import Geography from "./scenes/global/Geography";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
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
                {/* <Route path="/bar" elements={<Bar />} /> */}
                {/* <Route path="/pie" elements={<Pie />} /> */}
                {/* <Route path="/faq" elements={<FAQ />} /> */}
                {/* <Route path="/geography" elements={<Geography />} /> */}
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
