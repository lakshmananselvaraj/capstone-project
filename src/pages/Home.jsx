import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global/home.css";

 // Ensure this file exists

// Import images properly if they are in the src folder
import brainIcon from "/src/images/brain-icon.png";
import memoryIcon from "/src/images/memory-icon.png";
import quizIcon from "/src/images/quiz-icon.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Cognitive Thinking</h1>
        <p className="subtitle">Enhancing Learning Through IQ & Memory Training</p>
        <p className="description">
          Welcome to <strong>Cognitive Thinking</strong>, a platform designed to sharpen your
          intelligence, enhance memory, and boost problem-solving skills through engaging
          activities and challenges.
        </p>

        {/* Features Section */}
        <div className="features-container">
          <div className="feature">
            <img src={brainIcon} alt="IQ Training Icon" className="feature-icon" />
            <h3>IQ Training</h3>
            <p>Engage in cognitive exercises to improve logical reasoning and analytical skills.</p>
          </div>

          <div className="feature">
            <img src={memoryIcon} alt="Memory Boost Icon" className="feature-icon" />
            <h3>Memory Boost</h3>
            <p>Interactive challenges designed to enhance your memory retention and recall abilities.</p>
          </div>

          <div className="feature">
            <img src={quizIcon} alt="Fun Quizzes Icon" className="feature-icon" />
            <h3>Fun Quizzes</h3>
            <p>Test your knowledge with exciting quizzes covering various intelligence areas.</p>
          </div>
        </div>

        <button className="cta-button" onClick={() => navigate("/learning")}>
        Start Learning
      </button>
      </div>
    </div>
  );
};

export default Home;
