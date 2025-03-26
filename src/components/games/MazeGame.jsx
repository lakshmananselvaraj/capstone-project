import React, { useState, useEffect } from "react";
import "../../styles/games/MazeGame.css";

const levels = [
  // Level 1 - Simple Grid Maze
  {
    type: "grid",
    grid: [
      ["S", " ", "X", " ", " "],
      ["X", " ", "X", " ", "X"],
      ["X", " ", " ", " ", "X"],
      ["X", "X", "X", " ", "X"],
      ["X", "X", " ", " ", "E"],
    ],
  },
  // Level 2 - Portal Maze
  {
    type: "portal",
    grid: [
      ["S", " ", "X", " ", " "],
      ["X", " ", "X", " ", "X"],
      ["X", " ", " ", " ", "X"],
      ["X", "X", "X", " ", "X"],
      ["X", "X", " ", " ", "E"],
    ],
    portals: {
      "0,3": [4, 1], // Teleports player from (0,3) to (4,1)
      "4,1": [0, 3], // Teleports back
    },
  },
  // Level 3 - Timed Maze
  {
    type: "timed",
    grid: [
      ["S", " ", " ", "X", " "],
      ["X", "X", " ", "X", "X"],
      [" ", " ", "E", " ", " "],
      ["X", "X", "X", "X", "X"],
      [" ", " ", " ", "X", " "],
    ],
    timeLimit: 10, // 10 seconds to complete the level
  },
  // Level 4 - Key & Lock Maze
  {
    type: "key-lock",
    grid: [
      ["S", " ", "X", "K", " "],
      ["X", "X", "L", "X", "X"],
      [" ", " ", " ", " ", " "],
      ["X", "X", "X", "X", "X"],
      ["E", " ", " ", "X", " "],
    ],
    keyFound: false,
  },
];

const MazeGame = () => {
  const [level, setLevel] = useState(0);
  const [playerPosition, setPlayerPosition] = useState({ row: 0, col: 0 });
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [hasKey, setHasKey] = useState(false);

  // Dynamically set player position based on 'S' in the grid
  useEffect(() => {
    let startRow = 0;
    let startCol = 0;
    
    levels[level].grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === "S") {
          startRow = rowIndex;
          startCol = colIndex;
        }
      });
    });

    setPlayerPosition({ row: startRow, col: startCol });
    setMessage("");
    setHasKey(false);

    if (levels[level].type === "timed") {
      setTimeLeft(levels[level].timeLimit);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setMessage("⏳ Time Up! Restarting Level...");
            setTimeout(() => setLevel(level), 1500);
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [level]);

  const handleMove = (direction) => {
    let { row, col } = playerPosition;
    let newRow = row;
    let newCol = col;

    switch (direction) {
      case "up":
        newRow = row > 0 ? row - 1 : row;
        break;
      case "down":
        newRow = row < levels[level].grid.length - 1 ? row + 1 : row;
        break;
      case "left":
        newCol = col > 0 ? col - 1 : col;
        break;
      case "right":
        newCol = col < levels[level].grid[0].length - 1 ? col + 1 : col;
        break;
      default:
        break;
    }

    let newCell = levels[level].grid[newRow][newCol];

    // Handle Portal Maze
    if (levels[level].type === "portal" && levels[level].portals[`${newRow},${newCol}`]) {
      [newRow, newCol] = levels[level].portals[`${newRow},${newCol}`];
      setMessage("🔄 Teleported!");
    }

    // Handle Key & Lock Maze
    if (levels[level].type === "key-lock") {
      if (newCell === "K") {
        setHasKey(true);
        setMessage("🔑 Key Collected!");
        levels[level].grid[newRow][newCol] = " ";
      }
      if (newCell === "L" && !hasKey) {
        setMessage("🚪 Find the key to unlock this door!");
        return;
      }
    }

    if (newCell !== "X") {
      setPlayerPosition({ row: newRow, col: newCol });

      if (newCell === "E") {
        if (level < levels.length - 1) {
          setMessage(`🎉 Level ${level + 1} Complete! Moving to Level ${level + 2}`);
          setTimeout(() => {
            setLevel(level + 1);
          }, 1000);
        } else {
          setMessage(`🏆 Game Complete! You finished all levels!`);
        }
      }
    }
  };

  return (
    <div className="maze-game">
      <h1>Maze Game</h1>
      <h2>Level {level + 1}</h2>
      {levels[level].type === "timed" && <p>⏳ Time Left: {timeLeft} sec</p>}
      <p className="message">{message}</p>

      <div className="maze-grid">
        {levels[level].grid.map((row, rowIndex) => (
          <div key={rowIndex} className="maze-row">
            {row.map((cell, colIndex) => {
              let cellContent = cell;
              if (rowIndex === playerPosition.row && colIndex === playerPosition.col) {
                cellContent = "🟢"; // Player
              } else if (cell === "P") {
                cellContent = "🔄"; // Portal
              } else if (cell === "K") {
                cellContent = "🔑"; // Key
              } else if (cell === "L") {
                cellContent = "🚪"; // Lock
              }
              return (
                <div key={colIndex} className={`maze-cell ${cell === "X" ? "wall" : ""}`}>
                  {cellContent}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={() => handleMove("up")}>⬆️</button>
        <div>
          <button onClick={() => handleMove("left")}>⬅️</button>
          <button onClick={() => handleMove("right")}>➡️</button>
        </div>
        <button onClick={() => handleMove("down")}>⬇️</button>
      </div>

      <button onClick={() => setLevel(level - 1 >= 0 ? level - 1 : 0)}>🔙 Back</button>
      <button onClick={() => setLevel(0)}>Restart Game</button>
    </div>
  );
};

export default MazeGame;
