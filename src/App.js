import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { TopBar } from "./scenes/global/Topbar";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/global/Invoices"
// import Team from "./scenes/global/Team";
// import Invoices from "./scenes/global/Invoices";
// import Contacts from "./scenes/global/Contacts";
// import Bar from "./scenes/global/Bar";
// import Form from "./scenes/global/Form";
// import Pie from "./scenes/global/Pie";
// import FAQ from "./scenes/global/FAQ";
// import Geography from "./scenes/global/Geography";
// import Calendar from "./scenes/global/Calendar";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              {/* <Route path="/" elements={<Dashboard />} /> */}
              {/* <Route path="/team" elements={<Team />} /> */}
              {/* <Route path="/contacts" elements={<Contacts />} /> */}
              {/* <Route path="/bar" elements={<Bar />} /> */}
              {/* <Route path="/form" elements={<Form />} /> */}
              {/* <Route path="/pie" elements={<Pie />} /> */}
              {/* <Route path="/faq" elements={<FAQ />} /> */}
              {/* <Route path="/geography" elements={<Geography />} /> */}
              {/* <Route path="/calendar" elements={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>  
  );
}

export default App;
