import React from "react";

const AlphabetCard = ({ letter, word, image, playSound }) => {
  return (
    <div className="letter-card" onClick={() => playSound(`${letter}, ${word}`)}>
      <h2>{letter}</h2>
      <img src={image} alt={word} className="alphabet-image" />
      <p>{word}</p>
    </div>
  );
};

export default AlphabetCard;
