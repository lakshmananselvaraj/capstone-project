import React, { useState, useEffect } from "react";
import "../../styles/games/memorygame.css"; // Ensure this file exists

// Using emoji icons instead of images
const cardIcons = [
  { icon: "🍏", matched: false },
  { icon: "🍌", matched: false },
  { icon: "🍇", matched: false },
  { icon: "🍊", matched: false },
  { icon: "🍓", matched: false },
  { icon: "🍉", matched: false },
];

// Function to shuffle the cards
const shuffleCards = () => {
  const shuffled = [...cardIcons, ...cardIcons]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
  return shuffled;
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const totalPairs = cardIcons.length;

  // Initialize the game
  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  // Handle card clicks
  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
      setFlippedCards((prev) => [...prev, card]);
    }
  };

  // Check for a match
  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves((prevMoves) => prevMoves + 1);
      if (flippedCards[0].icon === flippedCards[1].icon) {
        setMatchedCards((prev) => [...prev, flippedCards[0].icon]);
      }
      setTimeout(() => setFlippedCards([]), 800);
    }
  }, [flippedCards]);

  // Check if game is completed
  useEffect(() => {
    if (matchedCards.length === totalPairs) {
      setGameCompleted(true);
    }
  }, [matchedCards]);

  // Restart game
  const restartGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameCompleted(false);
  };

  // Determine Result Message
  const getResultMessage = () => {
    if (moves <= totalPairs * 2) {
      return "🎉 Excellent Memory! Well Done!";
    } else if (moves <= totalPairs * 3) {
      return "😃 Good Job! Keep Practicing!";
    } else {
      return "🤔 Try Again! Improve Your Memory!";
    }
  };

  return (
    <div className="memory-game">
      <h1>Memory Game 🧠</h1>
      <p>Moves: {moves}</p>
      
      {/* Display Result Message if Game is Completed */}
      {gameCompleted && (
        <div className="result-message">
          <h2>{getResultMessage()}</h2>
          <p>Your Final Score: {100 - moves * 2} 🎯</p>
        </div>
      )}

      <button className="restart-btn" onClick={restartGame}>Restart Game 🔄</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(card) || matchedCards.includes(card.icon) ? "flipped" : ""}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="card-front">
                <span className="icon">{card.icon}</span>
              </div>
              <div className="card-back"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
