import React, { useState } from "react";
import { Chessboard } from "react-chessboard"; // Corrected import
import { Chess } from "chess.js";
import "../../styles/games/ChessGame.css"; // Import CSS file

const ChessGame = () => {
  const [game, setGame] = useState(new Chess()); // Initialize a new chess game
  const [fen, setFen] = useState(game.fen()); // Store board position in FEN

  // Handle piece movement
  const onDrop = (sourceSquare, targetSquare) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Always promote to Queen when pawn reaches last rank
    });

    if (move) {
      setFen(game.fen()); // Update board position
    }

    // Check for checkmate or draw
    if (game.isCheckmate()) {
      alert("Checkmate! Game over.");
    } else if (game.isDraw()) {
      alert("It's a draw!");
    }
  };

  return (
    <div className="chess-container">
      <h1>♟️ Chess Game</h1>
      <h3>{game.inCheck() ? "Check!" : "Your move"}</h3>
      <Chessboard position={fen} onPieceDrop={({ sourceSquare, targetSquare }) => onDrop(sourceSquare, targetSquare)} />
      <button
        onClick={() => {
          const newGame = new Chess();
          setGame(newGame); // Reset game
          setFen(newGame.fen());
        }}
        className="restart-btn"
      >
        Restart Game
      </button>
    </div>
  );
};

export default ChessGame;
