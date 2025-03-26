import React, { useState } from "react";
import "../../styles/games/PatternRecognitionGame.css";

const levels = [
  {
    patterns: [
      { pattern: ["🔵", "🔴", "🟢", "🟡", ""], correctAnswer: "🔵" },
      { pattern: ["🔴", "🟡", "🔴", "🟡", ""], correctAnswer: "🔴" },
      { pattern: ["🟢", "🔵", "🟢", "", "🔵"], correctAnswer: "🟢" },
      { pattern: ["🔴", "🔵", "🟢", "🔴", "", "🟢"], correctAnswer: "🔵" },
      { pattern: ["🟡", "🔴", "", "🔵", "🟢"], correctAnswer: "🟡" }
    ]
  },
  {
    patterns: [
      { pattern: ["🔺", "⭐", "🔺", "", "⭐"], correctAnswer: "🔺" },
      { pattern: ["⬜", "⬛", "⬜", "⬛", ""], correctAnswer: "⬜" },
      { pattern: ["⚪", "🔴", "⚪", "", "🔴"], correctAnswer: "⚪" },
      { pattern: ["🔵", "🟢", "", "🟢", "🔵"], correctAnswer: "🟢" },
      { pattern: ["🔴", "⚪", "🔵", "⚪", "", "🔴"], correctAnswer: "🔵" }
    ]
  },
  {
    patterns: [
      { pattern: ["🟢", "🔵", "", "🟡", "🟢", "🔵"], correctAnswer: "🟡" },
      { pattern: ["⬛", "⭐", "⬜", "🔺", "", "⬛"], correctAnswer: "⭐" },
      { pattern: ["⭐", "🔺", "⭐", "🔺", "", "⭐"], correctAnswer: "🔺" },
      { pattern: ["⬛", "⬜", "⬛", "⬜", ""], correctAnswer: "⬛" },
      { pattern: ["🔴", "🟢", "🟢", "🔴", "", "🟢"], correctAnswer: "🔴" }
    ]
  }
];

// Extend up to 10 levels (Modify & add more patterns)
while (levels.length < 10) {
  levels.push({
    patterns: [
      { pattern: ["🔺", "⭐", "🔺", "", "⭐"], correctAnswer: "🔺" },
      { pattern: ["⬜", "⬛", "⬜", "⬛", ""], correctAnswer: "⬜" },
      { pattern: ["⚪", "🔴", "⚪", "", "🔴"], correctAnswer: "⚪" },
      { pattern: ["🔵", "🟢", "", "🟢", "🔵"], correctAnswer: "🟢" },
      { pattern: ["🔴", "⚪", "🔵", "⚪", "", "🔴"], correctAnswer: "🔵" }
    ]
  });
}

const PatternRecognitionGame = () => {
  const [level, setLevel] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleSelection = (answer) => {
    if (answer === levels[level].patterns[questionIndex].correctAnswer) {
      setScore(score + 1);
      alert("✅ Correct!");
    } else {
      alert("❌ Incorrect! Try again.");
    }

    if (questionIndex < levels[level].patterns.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (level < levels.length - 1) {
        alert(`🎉 Level ${level + 1} Complete! Moving to Level ${level + 2}`);
        setLevel(level + 1);
        setQuestionIndex(0);
      } else {
        alert(`🏆 Game Complete! Final Score: ${score + 1}/50`);
      }
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else if (level > 0) {
      setLevel(level - 1);
      setQuestionIndex(4);
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Pattern Recognition Game</h1>
      <h2 className="level-info">Level {level + 1} - Question {questionIndex + 1}/5</h2>
      <h3 className="score-display">Score: {score}</h3>

      <div className="pattern-box">
        {levels[level].patterns[questionIndex].pattern.map((item, index) => (
          <span key={index} className={`pattern-item ${item === "" ? "missing" : ""}`}>
            {item !== "" ? item : "⬜"}
          </span>
        ))}
      </div>

      <h3>Select the missing piece:</h3>
      <div className="options-box">
        {["🔵", "🔴", "🟢", "🟡", "⬛", "⬜", "⭐", "⚪", "🔺"].map((option) => (
          <button 
            key={option} 
            className="option-btn"
            onClick={() => handleSelection(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="button-container">
        <button className="back-btn" onClick={handleBack} disabled={level === 0 && questionIndex === 0}>
          Back
        </button>
        <button className="restart-btn" onClick={() => { setLevel(0); setQuestionIndex(0); setScore(0); }}>
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default PatternRecognitionGame;
