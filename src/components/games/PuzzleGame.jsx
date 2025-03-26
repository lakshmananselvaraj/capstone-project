import React, { useState, useEffect } from "react";
import "../../styles/games/puzzleGame.css";

const levels = [
  Array.from({ length: 9 }, (_, i) => (i < 8 ? i + 1 : null)), // 3x3
  Array.from({ length: 16 }, (_, i) => (i < 15 ? i + 1 : null)), // 4x4
  Array.from({ length: 25 }, (_, i) => (i < 24 ? i + 1 : null)), // 5x5
  Array.from({ length: 36 }, (_, i) => (i < 35 ? i + 1 : null)), // 6x6
  Array.from({ length: 49 }, (_, i) => (i < 48 ? i + 1 : null)), // 7x7
  Array.from({ length: 64 }, (_, i) => (i < 63 ? i + 1 : null)), // 8x8
  Array.from({ length: 81 }, (_, i) => (i < 80 ? i + 1 : null)), // 9x9
];


const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const PuzzleGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [tiles, setTiles] = useState(shuffleArray(levels[currentLevel]));
  const [score, setScore] = useState(100);

  useEffect(() => {
    setTiles(shuffleArray(levels[currentLevel]));
  }, [currentLevel]);

  const moveTile = (index) => {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - Math.sqrt(tiles.length), emptyIndex + Math.sqrt(tiles.length)];

    if (validMoves.includes(index)) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
    } else {
      setScore(score - 5);
    }
  };

  const isSolved = () => JSON.stringify(tiles) === JSON.stringify(levels[currentLevel]);

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setScore(100);
    }
  };

  const resetGame = () => {
    setTiles(shuffleArray(levels[currentLevel]));
    setScore(100);
  };

  return (
    <div className="puzzle-game-container">
      <div className="instructions">
        <h3>How to Play:</h3>
        <p>Rearrange the numbers by clicking on a tile next to the empty space.</p>
        <p>Match the correct pattern shown on the left.</p>
        <p>Incorrect moves will reduce your score.</p>
      </div>

      <div className="game-layout">
        <div className="example-output">
          <h4>Example Output</h4>
          <div className="puzzle-board" data-size={Math.sqrt(levels[currentLevel].length)}>
            {levels[currentLevel].map((tile, index) => (
              <div key={index} className={`tile ${tile === null ? "empty" : ""}`}>{tile}</div>
            ))}
          </div>
        </div>

        <div className="game-board">
          <h4>Level {currentLevel + 1}</h4>
          <div className="puzzle-board" data-size={Math.sqrt(tiles.length)}>
            {tiles.map((tile, index) => (
              <div key={index} className={`tile ${tile === null ? "empty" : ""}`} onClick={() => moveTile(index)}>
                {tile}
              </div>
            ))}
          </div>

          <button onClick={() => setCurrentLevel(currentLevel - 1)} disabled={currentLevel === 0}>🔙 Back</button>
          <p>Score: {score}</p>
          {isSolved() && <p className="congrats-message">🎉 Congratulations! You solved the puzzle!</p>}
          <button onClick={nextLevel} disabled={currentLevel === levels.length - 1}>Next Level</button>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </div>
    </div>
  );
};

export default PuzzleGame;
