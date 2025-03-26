import React, { useState } from "react";
import "../../styles/games/quizGame.css";

const levels = {
  easy: [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What color is the sun?", options: ["Blue", "Yellow", "Red", "Green"], answer: "Yellow" },
    { question: "What is 5 - 2?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "How many days are there in a week?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What shape has three sides?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: "Triangle" },
    { question: "What is 10 ÷ 2?", options: ["3", "4", "5", "6"], answer: "5" },
    { question: "What comes after 9?", options: ["8", "10", "11", "12"], answer: "10" },
    { question: "How many fingers do we have?", options: ["8", "9", "10", "12"], answer: "10" },
    { question: "What animal says 'Meow'?", options: ["Dog", "Cat", "Cow", "Bird"], answer: "Cat" },
    { question: "What is 1 + 1?", options: ["1", "2", "3", "4"], answer: "2" },
  ],
  medium: [
    { question: "What is 15 + 10?", options: ["20", "25", "30", "35"], answer: "25" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is 9 × 3?", options: ["27", "28", "30", "33"], answer: "27" },
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], answer: "Delhi" },
    { question: "How many legs does a spider have?", options: ["4", "6", "8", "10"], answer: "8" },
    { question: "What is 12 ÷ 4?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which gas do humans breathe in?", options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"], answer: "Oxygen" },
    { question: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "What is 7 × 7?", options: ["42", "48", "49", "56"], answer: "49" },
  ],
  hard: [
    { question: "What is 35 ÷ 7?", options: ["4", "5", "6", "7"], answer: "5" },
    { question: "Who invented the light bulb?", options: ["Albert Einstein", "Isaac Newton", "Thomas Edison", "Nikola Tesla"], answer: "Thomas Edison" },
    { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is 9³?", options: ["81", "243", "729", "512"], answer: "729" },
    { question: "What is the capital of the USA?", options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"], answer: "Washington D.C." },
    { question: "Who discovered gravity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Charles Darwin"], answer: "Isaac Newton" },
    { question: "How many bones are in the human body?", options: ["200", "206", "210", "215"], answer: "206" },
    { question: "What is 45 ÷ 9?", options: ["3", "4", "5", "6"], answer: "5" },
  ],
};

const QuizGame = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startGame = (level) => {
    setSelectedLevel(level);
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
  };

  const handleAnswer = (selectedOption) => {
    const questions = levels[selectedLevel];
    
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="quiz-game-container">
      <h2>🎮 Fun Quiz Game for Kids</h2>
      {!selectedLevel ? (
        <div className="level-selection">
          <h3>Select a Level:</h3>
          <button onClick={() => startGame("easy")}>😊 Easy</button>
          <button onClick={() => startGame("medium")}>😃 Medium</button>
          <button onClick={() => startGame("hard")}>🤓 Hard</button>
        </div>
      ) : !gameOver ? (
        <div className="question-section">
          <h3>Level: {selectedLevel.toUpperCase()}</h3>
          <h4>{levels[selectedLevel][currentQuestion].question}</h4>
          <div className="options">
            {levels[selectedLevel][currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-section">
          <h3>🎉 Game Over!</h3>
          <p>Your Final Score: {score} / {levels[selectedLevel].length}</p>
          <button onClick={restartGame}>🔄 Play Again</button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
