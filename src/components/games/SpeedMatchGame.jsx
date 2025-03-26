import React, { useState, useEffect } from "react";
import "../../styles/games/speedMatch.css";

const shapes = ["🔵", "🔺", "🟢", "🟡", "🟥"];
const generateRandomShape = () => shapes[Math.floor(Math.random() * shapes.length)];

const SpeedMatchGame = () => {
  const [targetShape, setTargetShape] = useState(null);
  const [currentShape, setCurrentShape] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
    }
  }, [timeLeft, isPlaying]);

  const handleMatch = () => {
    if (!isPlaying) return;

    if (currentShape === targetShape) {
      setScore(score + 1);
      setTargetShape(generateRandomShape());
    }
    setCurrentShape(generateRandomShape());
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(15);
    setIsPlaying(true);
    setTargetShape(generateRandomShape());
    setCurrentShape(generateRandomShape());
  };

  return (
    <div className="speed-match-container">
      <h2>🔥 Speed Match Game 🔥</h2>
      <div className="instructions">
        <h4>How to Play?</h4>
        <p>Match the shape on the button with the Target Shape.</p>
        <p>Click fast and score as high as possible in 15 seconds!</p>
      </div>
      <p>⏳ Time Left: {timeLeft}s</p>
      <p>🎯 Score: {score}</p>

      <div className="game-area">
        {isPlaying ? (
          <>
            <div className="target-shape">{targetShape}</div>
            <button className="match-btn" onClick={handleMatch}>
              {currentShape}
            </button>
          </>
        ) : (
          <button className="start-btn" onClick={startGame}>
            {timeLeft === 0 ? "🔄 Restart Game" : "▶ Start Game"}
          </button>
        )}
      </div>

      {!isPlaying && timeLeft === 0 && <p className="game-over">🎮 Game Over! Your Final Score: {score}</p>}
    </div>
  );
};

export default SpeedMatchGame;
