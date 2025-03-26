
import React, { useState, useEffect } from "react";
import "../../styles/games/ReactionTestGame.css";

const levels = [
  { 
    id: 1, 
    words: ["cat", "dog", "sun", "hat", "pen"], 
    timeLimit: 10 
  },
  { 
    id: 2, 
    words: ["rocket", "planet", "flower", "laptop", "guitar"], 
    timeLimit: 9 
  },
  { 
    id: 3, 
    words: ["reaction", "mission", "keyboard", "computer", "elephant"], 
    timeLimit: 8 
  },
  { 
    id: 4, 
    words: ["Good job!", "Nice work!", "Try again!", "You win!", "Keep going!"], 
    timeLimit: 7 
  },
  { 
    id: 5, 
    words: ["Practice makes perfect.", "Never give up!", "Coding is fun!", "Type fast!", "React is awesome!"], 
    timeLimit: 6 
  },
];

const FastTypingGame = () => {
  const [level, setLevel] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(levels[level].timeLimit);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startLevel();
  }, [level]);

  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      setMessage("⏳ Time's up! Try again.");
      setGameOver(true);
    }
  }, [timer, gameOver]);

  const startLevel = () => {
    const randomWord = levels[level].words[Math.floor(Math.random() * 5)];
    setCurrentWord(randomWord);
    setInputValue("");
    setTimer(levels[level].timeLimit);
    setMessage("");
    setGameOver(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === currentWord) {
      setMessage("✅ Correct! Moving to next level...");
      setTimeout(() => {
        if (level < levels.length - 1) {
          setLevel(level + 1);
        } else {
          setMessage("🏆 Congratulations! You completed all levels!");
        }
      }, 1000);
    }
  };

  const restartLevel = () => {
    startLevel();
  };

  const nextLevel = () => {
    if (level < levels.length - 1) {
      setLevel(level + 1);
    }
  };

  const prevLevel = () => {
    if (level > 0) {
      setLevel(level - 1);
    }
  };

  return (
    <div className="typing-game">
      <h1>Fast Typing Challenge</h1>
      <h2>Level {level + 1}</h2>
      <p className="word-display">{currentWord}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={gameOver}
      />
      <p>⏳ Time Left: {timer}s</p>
      <p>{message}</p>
      <div className="buttons">
        <button onClick={prevLevel} disabled={level === 0}>⬅️ Back</button>
        <button onClick={restartLevel}>🔄 Restart</button>
        <button onClick={nextLevel} disabled={level === levels.length - 1}>➡️ Next</button>
      </div>
    </div>
  );
};

export default FastTypingGame;
