import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Learning from "./pages/Learning";
import Profile from "./pages/Profile";
import QuizCard from "./components/quiz/QuizCard";
import Leaderboard from "./components/common/Leaderboard";
import MemoryGame from "./components/games/MemoryGame";
import ProgressTracker from "./components/common/ProgressTracker";
import GameHub from "./pages/GameHub";
import QuizGame from "./components/games/QuizGame";
import PuzzleGame from "./components/games/PuzzleGame";
import SpeedMatchGame from "./components/games/SpeedMatchGame";
import LearningModule from "./components/learning/LearningModule";
import AbcdLearning from "./components/Learning/AbcdLearning";
import SentenceLearning from "./pages/SentenceLearning";
import "./styles/global/global.css"; 
import LogicPuzzles from "./pages/LogicPuzzles";
import WordSearchGame from "./components/games/WordSearchGame"; 
import BrainTeaserGame from "./components/games/BrainTeaserGame"; 
import PatternRecognitionGame from "./components/games/PatternRecognitionGame";
import MazeGame from "./components/games/MazeGame";
import SudokuGame from "./components/games/SudokuGame"; 
import ReactionTestGame from "./components/games/ReactionTestGame";
import ChessGame from "./components/games/ChessGame";
// Ensure this file exists

const App = () => {
  const location = useLocation(); // Get current route

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/abcd-learning" element={<AbcdLearning />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz-card" element={<QuizCard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/learning-module" element={<LearningModule />} />
        <Route path="/sentence-learning" element={<SentenceLearning />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/games" element={<GameHub />} />
        <Route path="/quiz-game" element={<QuizGame />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/puzzle-game" element={<PuzzleGame />} />
        <Route path="/speed-match-game" element={<SpeedMatchGame />} />
        <Route path="/logic-game" element={<LogicPuzzles />} />
        <Route path="/word-search-game" element={<WordSearchGame />} />
        <Route path="/brain-teaser-game" element={<BrainTeaserGame />} />
        <Route path="/pattern-recognition-game" element={<PatternRecognitionGame />} />
        <Route path="/maze-game" element={<MazeGame />} />
        <Route path="/sudoku-game" element={<SudokuGame />} />
        <Route path="/reaction-test-game" element={<ReactionTestGame />} />
        <Route path="/chess-game" element={<ChessGame />} />

        
      </Routes>

      {/* Render Footer only if the user is NOT on the home page */}
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

export default App;
