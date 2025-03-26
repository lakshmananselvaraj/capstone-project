import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/games/BrainTeaserGame.css";// Ensure correct path

const brainTeasers = [
  [
    { question: "What has to be broken before you can use it?", answer: "egg" },
    { question: "I’m tall when I’m young, and short when I’m old. What am I?", answer: "candle" },
    { question: "What month has 28 days?", answer: "all" },
    { question: "What has a head and a tail but no body?", answer: "coin" },
    { question: "What can you catch but not throw?", answer: "cold" },
  ],
  [
    { question: "What comes next: 2, 4, 8, 16, __?", answer: "32" },
    { question: "If a rooster lays an egg on top of a barn, which way does it roll?", answer: "roosters don’t lay eggs" },
    { question: "Rearrange 'RAT' to form another word.", answer: "art" },
    { question: "Which number is missing: 3, 6, 9, __, 15?", answer: "12" },
    { question: "What gets wetter as it dries?", answer: "towel" },
  ],
  [
    { question: "Which word is spelled incorrectly in every dictionary?", answer: "incorrectly" },
    { question: "How many months have 31 days?", answer: "7" },
    { question: "Which weighs more: a ton of bricks or a ton of feathers?", answer: "same" },
    { question: "I have keys but open no locks. What am I?", answer: "piano" },
    { question: "What has one eye but can’t see?", answer: "needle" },
  ],
  [
    { question: "What is the next prime number after 7?", answer: "11" },
    { question: "What has hands but can’t clap?", answer: "clock" },
    { question: "If two’s company, and three’s a crowd, what are four and five?", answer: "nine" },
    { question: "What has a heart that doesn’t beat?", answer: "artichoke" },
    { question: "What has words but never speaks?", answer: "book" },
  ],
  [
    { question: "What number comes next? 1, 1, 2, 3, 5, 8, __?", answer: "13" },
    { question: "I have branches but no leaves. What am I?", answer: "bank" },
    { question: "How many sides does a pentagon have?", answer: "5" },
    { question: "What has keys but no locks and space but no room?", answer: "keyboard" },
    { question: "Which number is missing? 5, 10, 20, 40, __?", answer: "80" },
  ],
];

const BrainTeaserGame = () => {
  const [level, setLevel] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCheckAnswer = () => {
    if (input.toLowerCase() === brainTeasers[level][questionIndex].answer.toLowerCase()) {
      if (questionIndex < 4) {
        setMessage("🎉 Correct! Next question...");
        setTimeout(() => {
          setQuestionIndex(questionIndex + 1);
          setInput("");
          setMessage("");
        }, 1500);
      } else if (level < 4) {
        setMessage(`🎉 Level ${level + 1} complete! Moving to Level ${level + 2}...`);
        setTimeout(() => {
          setLevel(level + 1);
          setQuestionIndex(0);
          setInput("");
          setMessage("");
        }, 2000);
      } else {
        setMessage("🏆 Congratulations! You've completed all levels!");
      }
    } else {
      setMessage("❌ Incorrect, try again!");
    }
  };

  return (
    <div className="brain-teaser-container">
      <h1 className="game-title">Brain Teaser Game</h1>
      <p className="instructions">
        Solve the brain teasers! Answer 5 questions per level to advance.
      </p>

      <div className="question-box">
        <h2>Level {level + 1}</h2>
        <p>Question {questionIndex + 1}: {brainTeasers[level][questionIndex].question}</p>
        <input
          type="text"
          className="answer-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your answer..."
        />
        <button className="check-btn" onClick={handleCheckAnswer}>Submit Answer</button>
      </div>

      {message && <p className="message">{message}</p>}

      <div className="button-container">
        <button className="back-btn" onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
};

export default BrainTeaserGame;
