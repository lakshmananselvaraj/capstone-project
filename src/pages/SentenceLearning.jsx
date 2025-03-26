import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SentenceCard from "../components/common/SentenceCard";
import "../styles/games/SentenceLearning.css";
import { video } from "framer-motion/client";

const SentenceLearning = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("tamil");

  const stories = {
    tamil: [
      { title: "மர்மமான வனம்", story: "ஒரு நாள், ஒரு சிறிய கிராமத்தில்...", image: "/src/assets/tamil1.png", language: "ta-IN", video:"https://www.youtube.com/watch?v=TYHxikZdxWc" },
      { title: "பொன்னான கனவு", story: "ஒரு சிறிய பையன் ஒரு கனவை கண்டான்...", image: "/src/assets/tamil2.png", language: "ta-IN",video:"https://www.youtube.com/watch?v=QM8zRbjdCHQ" },
      { title: "நட்பு மகத்துவம்", story: "நட்பின் மதிப்பை புரிந்து கொள்ள...", image: "/src/assets/tamil3.png", language: "ta-IN",video:"https://www.youtube.com/watch?v=V_SwQlzaxrk" },
      { title: "தன்னம்பிக்கை", story: "தன்னம்பிக்கை மிக முக்கியம்...", image: "/src/assets/tamil4.png", language: "ta-IN" ,video:"https://www.youtube.com/watch?v=sDt5qsj_w4Q"},
      { title: "அன்பின் சக்தி", story: "அன்பு உலகை மாற்றும்...", image: "/src/assets/tamil5.png", language: "ta-IN" ,video:"https://www.youtube.com/watch?v=TLF-1Vm8gV0"},
    ],
    english: [
      { title: "The Secret Forest", story: "One day, in a small village...", image: "/src/assets/english1.png", language: "en-US", video: "https://www.youtube.com/embed/0vj2hBbhcOw" },
      { title: "Golden Dream", story: "A young boy had a wonderful dream...", image: "/src/assets/english2.png", language: "en-US", video: "https://www.youtube.com/embed/bfcXaMLRcT4" },
      { title: "The Power of Friendship", story: "Friendship teaches us many lessons...", image: "/src/assets/english3.png", language: "en-US", video: "https://www.youtube.com/embed/3tDJQ4FUvz0" },
      { title: "Self-Confidence", story: "Believing in yourself is the key to success...", image: "/src/assets/english4.png", language: "en-US", video: "https://www.youtube.com/embed/E0iZR1Vp67I" },
      { title: "The Strength of Love", story: "Love can change the world...", image: "/src/assets/english5.png", language: "en-US", video: "https://www.youtube.com/embed/_g0k9KITsGY" },
    ],
  };

  const playSound = (text, lang) => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = lang;
      speech.rate = 0.9;
      speech.pitch = 1;
      synth.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech!");
    }
  };

  return (
    <div className="sentence-learning-container">
      <h1>🗣 Sentence-Based Learning</h1>
      <p>Click a button to switch between Tamil & English stories.</p>

      <div className="button-group">
        <button className="explore-btn tamil-btn" onClick={() => setSelectedLanguage("tamil")}>🔊 Tamil Stories</button>
        <button className="explore-btn english-btn" onClick={() => setSelectedLanguage("english")}>🔊 English Stories</button>
      </div>

      <div className="story-list">
        {stories[selectedLanguage].map((item, index) => (
          <div key={index} className="story-container">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="story-image" />
            <p>{item.story}</p>
            <div className="button-group">
              <button className="story-btn" onClick={() => playSound(item.story, item.language)}>📖 Story Tell</button>
              {item.video && (
                <button className="video-btn" onClick={() => window.open(item.video, "_blank")}>▶ Play Video</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate("/Learning")}>⬅ Back</button>
    </div>
  );
};

export default SentenceLearning;
