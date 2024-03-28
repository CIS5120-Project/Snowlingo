import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SkiInfo from "./pages/SkiInfo/SkiInfo";
import PersonInfo from "./pages/PersonInfo/PersonInfo";
import Home from "./pages/Home/Home";
import Lesson from "./pages/Lesson/Lesson";
import Unit from "./pages/Unit/Unit";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/skiinfo" element={<SkiInfo />} />
          <Route path="/personinfo" element={<PersonInfo />} />
          <Route path="/unit" element={<Unit />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
