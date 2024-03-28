import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from "./components/Navbar/Navbar";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SkiInfo from "./pages/SkiInfo/SkiInfo";
import PersonInfo from "./pages/PersonInfo/PersonInfo";
import Home from "./pages/Home/Home";
import Lesson from "./pages/Lesson/Lesson";
import Unit from "./pages/Unit/Unit";
import Maintenance from './pages/Maintenance/Maintenance';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Navbar />
          <DropdownMenu />
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/skiinfo" element={<SkiInfo />} />
            <Route path="/personinfo" element={<PersonInfo />} />
            <Route path="/unit" element={<Unit />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
