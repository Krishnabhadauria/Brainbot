import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MathComponent from "./components/MathComponent";
import EnglishComponent from "./components/EnglishComponent";
import ScienceComponent from "./components/ScienceComponent";
import SocialStudiesComponent from "./components/SocialStudiesComponent";
import ComputerScienceComponent from "./components/ComputerScienceComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<MathComponent />} />
        <Route path="/english" element={<EnglishComponent />} />
        <Route path="/science" element={<ScienceComponent />} />
        <Route path="/social-studies" element={<SocialStudiesComponent />} />
        <Route path="/computer-science" element={<ComputerScienceComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
