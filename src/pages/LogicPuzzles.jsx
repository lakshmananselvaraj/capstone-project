import React, { useState, useEffect } from "react";
import "../styles/games/LogicPuzzles.css";
import { v4 as uuidv4 } from "uuid";

const levels = [
  {
    id: 1,
    houses: 3,
    categories: ["House Color", "Nationality", "Pet"],
    clues: [
      "The person in the red house owns a dog.",
      "The Norwegian lives in the first house.",
      "The green house is to the left of the white house.",
    ],
    solution: [
      { color: "Red", nationality: "Norwegian", pet: "Dog" },
      { color: "Green", nationality: "Swede", pet: "Cat" },
      { color: "White", nationality: "Dane", pet: "Fish" },
    ],
  },
  {
    id: 2,
    houses: 4,
    categories: ["House Color", "Nationality", "Drink", "Pet"],
    clues: [
      "The Englishman lives in the red house.",
      "The green house is immediately to the right of the ivory house.",
      "The man who drinks coffee lives in the green house.",
    ],
    solution: [
      { color: "Yellow", nationality: "Norwegian", drink: "Water", pet: "Cat" },
      { color: "Blue", nationality: "Dane", drink: "Tea", pet: "Bird" },
      { color: "Red", nationality: "Englishman", drink: "Milk", pet: "Dog" },
      { color: "Green", nationality: "Swede", drink: "Coffee", pet: "Fish" },
    ],
  },
];

const ZebraPuzzleGame = () => {
  const [level, setLevel] = useState(0);
  const [grid, setGrid] = useState([]);
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    initializeGrid();
  }, [level]);

  const initializeGrid = () => {
    const emptyGrid = Array(levels[level].houses).fill(
      Object.fromEntries(levels[level].categories.map((c) => [c, ""]))
    );
    setGrid(emptyGrid);
    setMessage("");
    setCompleted(false);
    setShowAnswer(false);
  };

  const handleChange = (houseIndex, category, value) => {
    const newGrid = [...grid];
    newGrid[houseIndex] = { ...newGrid[houseIndex], [category]: value };
    setGrid(newGrid);
  };

  const checkSolution = () => {
    const isCorrect = grid.every((house, index) =>
      Object.keys(house).every(
        (key) => house[key] === levels[level].solution[index][key]
      )
    );
    if (isCorrect) {
      setMessage("🎉 Correct! Moving to next level...");
      setCompleted(true);
      setTimeout(() => {
        if (level < levels.length - 1) {
          setLevel(level + 1);
        } else {
          setMessage("🏆 Congratulations! You solved all levels!");
        }
      }, 2000);
    } else {
      setMessage("❌ Incorrect placement! Try again.");
    }
  };

  return (
    <div className="zebra-puzzle">
      <div className="left-section">
        <h1>Zebra Puzzle (Einstein’s Riddle)</h1>
        <h2>Level {level + 1}</h2>
        <p>{message}</p>

        <div className="clues">
          <h3>🧩 Clues:</h3>
          <ul>
            {levels[level].clues.map((clue) => (
              <li key={uuidv4()}>{clue}</li>
            ))}
          </ul>
        </div>

        <div className="grid">
          <div className="row header">
            <div className="cell">House</div>
            {levels[level].categories.map((category) => (
              <div key={uuidv4()} className="cell">{category}</div>
            ))}
          </div>
          {grid.map((house, index) => (
            <div key={uuidv4()} className="row">
              <div className="cell">{index + 1}</div>
              {levels[level].categories.map((category) => (
                <div key={uuidv4()} className="cell">
                  <input
                    type="text"
                    value={house[category]}
                    onChange={(e) => handleChange(index, category, e.target.value)}
                    disabled={completed}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <button onClick={checkSolution} disabled={completed}>✅ Submit</button>
        <button onClick={initializeGrid}>🔄 Reset</button>
        <button onClick={() => setShowAnswer(!showAnswer)}>🔍 Show Answer</button>

        <div className={`answer-box ${showAnswer ? "show" : ""}`}>
          {showAnswer && (
            <>
              <h3>✅ Correct Answer:</h3>
              <pre>{JSON.stringify(levels[level].solution, null, 2)}</pre>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ZebraPuzzleGame;
