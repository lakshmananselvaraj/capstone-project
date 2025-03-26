import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/games/WordSearchGame.css";

const levels = [
  { words: ["CAT", "DOG", "BAT"], gridSize: 5 },
  { words: ["TIGER", "ZEBRA", "LION"], gridSize: 6 },
  { words: ["PYTHON", "JAVASCRIPT", "REACT"], gridSize: 7 },
  { words: ["ELEPHANT", "GIRAFFE", "CROCODILE"], gridSize: 8 },
  { words: ["TECHNOLOGY", "DEVELOPMENT", "COMPUTER"], gridSize: 9 },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const WordSearchGame = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState(0);
  const [grid, setGrid] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateGrid();
  }, [level]);

  const generateGrid = () => {
    const { words, gridSize } = levels[level];
    let letters = words.join("").split("");
    while (letters.length < gridSize * gridSize) {
      letters.push(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    }
    setGrid(shuffleArray(letters).slice(0, gridSize * gridSize));
    setFoundWords([]);
    setMessage("");
  };

  const handleLetterClick = (letter) => {
    setSelectedWord((prev) => prev + letter);
  };

  const checkWord = () => {
    if (levels[level].words.includes(selectedWord) && !foundWords.includes(selectedWord)) {
      setFoundWords([...foundWords, selectedWord]);
      setMessage(`✅ Correct! You found "${selectedWord}"`);
    } else {
      setMessage("❌ Incorrect! Try again.");
    }
    setSelectedWord("");
  };

  const handleNextLevel = () => {
    if (foundWords.length === levels[level].words.length) {
      if (level < levels.length - 1) {
        setLevel(level + 1);
      } else {
        setMessage("🎉 You completed all levels! Congratulations! 🎯");
      }
    } else {
      setMessage("🔹 Find all words before moving to the next level!");
    }
  };

  return (
    <div className="word-search-container">
      <h1>Word Search Game - Level {level + 1}</h1>
      <p>Find all hidden words in the grid. Click letters to form words.</p>

      <div className="word-grid">
        {grid.map((letter, index) => (
          <button key={index} className="grid-cell" onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <div className="selection">
        <p>Selected Word: <strong>{selectedWord}</strong></p>
        <button className="check-btn" onClick={checkWord}>Check Word</button>
      </div>

      {message && <p className="message">{message}</p>}

      <div className="button-container">
        <button className="back-btn" onClick={() => navigate("/quiz")}>🔙 Back to Home</button>
        {foundWords.length === levels[level].words.length && (
          <button className="next-btn" onClick={handleNextLevel}>Next Level</button>
        )}
      </div>
    </div>
  );
};

export default WordSearchGame;
