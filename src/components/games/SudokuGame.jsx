import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/games/SudokuBoard.css"; // Ensure correct path

const SudokuBoard = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState(1);
  const [sudokuGrid, setSudokuGrid] = useState(generateSudoku(level));
  const [message, setMessage] = useState("");

  function generateSudoku(level) {
    if (level === 1) {
      return [
        [5, 3, "", "", 7, "", "", "", ""],
        [6, "", "", 1, 9, 5, "", "", ""],
        ["", 9, 8, "", "", "", "", 6, ""],
        [8, "", "", "", 6, "", "", "", 3],
        [4, "", "", 8, "", 3, "", "", 1],
        [7, "", "", "", 2, "", "", "", 6],
        ["", 6, "", "", "", "", 2, 8, ""],
        ["", "", "", 4, 1, 9, "", "", 5],
        ["", "", "", "", 8, "", "", 7, 9]
      ];
    } else if (level === 2) {
      return [
        [8, "", "", "", "", "", "", "", 2],
        ["", "", 3, 6, "", "", "", "", ""],
        ["", 7, "", "", 9, "", 6, "", ""],
        ["", 5, "", "", "", 7, "", "", ""],
        ["", "", "", "", 4, 5, 7, "", ""],
        ["", "", "", 1, "", "", "", 3, ""],
        ["", "", 1, "", "", "", "", 6, 8],
        ["", "", 8, 5, "", "", "", 1, ""],
        ["", 9, "", "", "", "", 4, "", ""]
      ];
    } else if (level === 3) {
      return [
        ["", "", "", 8, "", "", "", "", 5],
        [3, "", "", "", "", "", "", "", ""],
        ["", "", 1, "", "", "", 9, "", ""],
        ["", 7, "", "", 5, "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", 9, "", 8, ""],
        ["", "", 2, "", "", "", 4, "", ""],
        ["", "", "", "", "", "", "", "", 1],
        [6, "", "", "", "", 8, "", "", ""]
      ];
    }
    return [];
  }

  const handleReset = () => {
    setSudokuGrid(generateSudoku(level));
    setMessage("");
  };

  const handleCheckSolution = () => {
    setMessage("Keep going! You're doing great! ✅");
  };

  const handleNextLevel = () => {
    if (level < 3) {
      setLevel(level + 1);
      setSudokuGrid(generateSudoku(level + 1));
      setMessage(`🎉 Congratulations! Level ${level} completed! Moving to Level ${level + 1}...`);
    } else {
      setMessage("🎉 You've completed all levels! Well done! 🎯");
    }
  };

  return (
    <div className="sudoku-container">
      <h1 className="sudoku-title">Logic Puzzle Game - Sudoku</h1>
      <div className="sudoku-board">
        {sudokuGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                className="sudoku-cell"
                type="text"
                maxLength="1"
                value={cell}
                onChange={() => {}}
              />
            ))}
          </div>
        ))}
      </div>

      {message && <p className="message">{message}</p>}

      <div className="button-container">
        <button className="reset-btn" onClick={handleReset}>Reset</button>
        <button className="home-btn" onClick={() => navigate("/quiz")}>Back to Quiz</button>
      </div>

      <button className="check-btn" onClick={handleCheckSolution}>Check Solution</button>
      {level < 3 && <button className="next-btn" onClick={handleNextLevel}>Next Level</button>}
    </div>
  );
};

export default SudokuBoard;
