import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import CSS from the correct path
import "../styles/quiz/quizpage.css";


import memoryIcon from "../images/brain-icon.png";
import puzzleIcon from "../images/puzzleGame.png"; // Ensure the file name matches the actual file
import speedMatchIcon from "../images/speed-match.png";
import quizIcon from "../images/quiz-icon.png";
import logicIcon from "../images/logic-icon.png";
import wordSearchIcon from "../images/word-search-icon.png";
import brainTeaserIcon from "../images/brain-teaser-icon.png";
import patternIcon from "../images/pattern-icon.png";
import mazeIcon from "../images/maze-icon.png";
import sudokuIcon from "../images/sudoku-icon.png";
import reactionTestIcon from "../images/reaction-test-icon.png";
import chessIcon from "../images/chess-icon.png";

// LogicPuzzles.jsx
const Quiz = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("Easy");
  const [progress, setProgress] = useState(40); // Example progress

  // 🟢 Define different games for each difficulty level
  const gameLevels = {
    Easy: [
      { name: "Memory Match", description: "Test your memory by matching pairs of cards.", image: memoryIcon, route: "/memory-game" },
      { name: "Puzzle Solver", description: "Solve simple puzzles to boost your skills.", image: puzzleIcon, route: "/puzzle-game" },
      { name: "Speed Match", description: "Quickly match items before time runs out!", image: speedMatchIcon, route: "/speed-match-game" },
      { name: "Quiz Challenge", description: "Answer simple questions and test your knowledge.", image: quizIcon, route: "/quiz-game" },
    ],
    Medium: [
      { name: "Logic Puzzles", description: "Solve tricky logical puzzles!", image: logicIcon, route: "/logic-game" },
      { name: "Word Search", description: "Find hidden words in a grid.", image: wordSearchIcon, route: "/word-search-game" },
      { name: "Brain Teasers", description: "Challenge your thinking with brain teasers.", image: brainTeaserIcon, route: "/brain-teaser-game" },
      { name: "Pattern Recognition", description: "Find and complete patterns!", image: patternIcon, route: "/pattern-recognition-game" },
    ],
    Hard: [
      { name: "Maze Runner", description: "Solve complex mazes and find the exit.", image: mazeIcon, route: "/maze-game" },
      { name: "Sudoku Master", description: "Solve challenging Sudoku puzzles.", image: sudokuIcon, route: "/sudoku-game" },
      { name: "Reaction Test", description: "Test your reflexes and reaction speed.", image: reactionTestIcon, route: "/reaction-test-game" },
      { name: "Chess Challenge", description: "Play chess and strategize your moves.", image: chessIcon, route: "/chess-game" },
    ],
  };

  return (
    <div className="quiz-page">
      <h1 className="quiz-title">Game Hub</h1>

      {/* Difficulty Level Selector */}
      <div className="level-selector">
        <label htmlFor="difficulty">Select Difficulty:</label>
        <select
          id="difficulty"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Game Cards (Based on selected level) */}
      <div className="games-container">
        {gameLevels[selectedLevel].map((game, index) => (
          <div
            key={index}
            className="game-card"
            onClick={() => navigate(game.route)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(game.route)}
          >
            <img src={game.image} alt={`${game.name} Icon`} className="game-image" />
            <div className="game-info">
              <h2 className="game-name">{game.name}</h2>
              <p className="game-description">{game.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Tracker */}
      <div className="progress-tracker">
        <h3>Game Progress</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}% Completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
