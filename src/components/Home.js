import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Optional, if you want to style your Home page

const Home = () => {
  const navigate = useNavigate();

  const handleSubjectSelection = (subject) => {
    navigate(`/${subject}`);
  };

  return (
    <div className="home-container">
      <h1>Welcome to Brain Bot</h1>
      <p>Select a subject to get started:</p>
      <div className="subject-buttons">
        <button onClick={() => handleSubjectSelection("math")}>Math</button>
        <button onClick={() => handleSubjectSelection("english")}>English</button>
        <button onClick={() => handleSubjectSelection("science")}>Science</button>
        <button onClick={() => handleSubjectSelection("social-studies")}>
          Social Studies
        </button>
        <button onClick={() => handleSubjectSelection("computer-science")}>
          Computer Science
        </button>
      </div>
    </div>
  );
};

export default Home;
