import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../styles/games/Learning.css";

const Learning = () => {
  const navigate = useNavigate();

  return (
    <div className="learning-container">
      <h1 className="title">🚀 Learning Hub</h1>

      {/* ABCD Learning Section */}
      <div className="learning-section store-learning">
        <h2>🔠 ABCD Learning</h2>
        <p>Click to explore letters and their words interactively.</p>
        <button className="explore-btn" onClick={() => navigate("/abcd-learning")}>Learn ABCD</button>
      </div>

      {/* Sentence-Based Learning */}
      <div className="learning-section story-learning">
        <h2>🗣️ Sentence-Based Learning</h2>
        <p>Click to hear sentences in Tamil & English.</p>
        <div className="button-group">
          <button className="explore-btn tamil-btn" onClick={() => navigate("/sentence-learning")}>🔊 Tamil Voice</button>
          <button className="explore-btn english-btn" onClick={() => navigate("/sentence-learning")}>🔊 English Voice</button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
