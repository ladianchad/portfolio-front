import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import PageMaker from "./modules/page-maker/PageMaker";
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMaker/>}></Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
