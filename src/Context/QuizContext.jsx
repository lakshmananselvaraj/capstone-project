import React, { createContext, useState } from "react";

// Create Context
export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <QuizContext.Provider value={{ quizData, setQuizData, score, setScore, currentQuestion, setCurrentQuestion }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
