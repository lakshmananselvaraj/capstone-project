import React from "react";
import "../../styles/quiz/quizCard.css"; // ✅ Ensure this file exists

const QuizCard = ({ title, description }) => {
  return (
    <div className="quiz-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="start-btn">Start Quiz</button>
    </div>
  );
};

export default QuizCard;
