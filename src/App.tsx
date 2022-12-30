import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageMaker from "./modules/page-maker/PageMaker";
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMaker/>}/>
        <Route path="/projects/*" element={<PageMaker/>}/>
        <Route path="/skills/*" element={<PageMaker/>}/>
        <Route path="*" element={undefined}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
