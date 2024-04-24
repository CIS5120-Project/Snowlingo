import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Home/Home'
import Reflection from './Reflection/Reflection'
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/reflection" element={<Reflection />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
