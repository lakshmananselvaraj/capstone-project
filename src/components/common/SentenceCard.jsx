import React from "react";

const SentenceCard = ({ title, story, image, language, playSound }) => {
  return (
    <div className="sentence-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="story-image" />
      <p>{story}</p>
      <button className="play-btn" onClick={() => playSound(story, language)}>
        🔊 Play Story ({language === "ta-IN" ? "Tamil" : "English"})
      </button>
    </div>
  );
};

export default SentenceCard;
