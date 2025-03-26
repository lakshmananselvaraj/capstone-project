import React from "react";
import { useNavigate } from "react-router-dom";
import AlphabetCard from "../common/AlphabetCard";
import "../../styles/games/AbcdLearning.css";

const AbcdLearning = () => {
  const navigate = useNavigate();

  // Alphabet Data with Images (Tamil words removed)
  const letters = [
    { letter: "A", word: "Apple", image: "/src/assets/A.png" },
    { letter: "B", word: "Ball", image: "/src/assets/B.png" },
    { letter: "C", word: "Cat", image: "/src/assets/C.png" },
    { letter: "D", word: "Dog", image: "/src/assets/D.png" },
    { letter: "E", word: "Elephant", image: "/src/assets/E.png" },
    { letter: "F", word: "Fish", image: "/src/assets/F.png" },
    { letter: "G", word: "Giraffe", image: "/src/assets/G.png" },
    { letter: "H", word: "House", image: "/src/assets/H.png" },
    { letter: "I", word: "Ice Cream", image: "/src/assets/I.png" },
    { letter: "J", word: "Juice", image: "/src/assets/J.png" },
    { letter: "K", word: "Kite", image: "/src/assets/K.png" },
    { letter: "L", word: "Lion", image: "/src/assets/L.png" },
    { letter: "M", word: "Monkey", image: "/src/assets/M.png" },
    { letter: "N", word: "Nest", image: "/src/assets/N.png" },
    { letter: "O", word: "Orange", image: "/src/assets/O.png" },
    { letter: "P", word: "Parrot", image: "/src/assets/P.png" },
    { letter: "Q", word: "Queen", image: "/src/assets/Q.png" },
    { letter: "R", word: "Rabbit", image: "/src/assets/R.png" },
    { letter: "S", word: "Sun", image: "/src/assets/S.png" },
    { letter: "T", word: "Tiger", image: "/src/assets/T.png" },
    { letter: "U", word: "Umbrella", image: "/src/assets/U.png" },
    { letter: "V", word: "Van", image: "/src/assets/V.png" },
    { letter: "W", word: "Watermelon", image: "/src/assets/W.png" },
    { letter: "X", word: "Xylophone", image: "/src/assets/X.png" },
    { letter: "Y", word: "Yacht", image: "/src/assets/Y.png" },
    { letter: "Z", word: "Zebra", image: "/src/assets/Z.png" },
  ];

  // 🟢 Text-to-Speech Function (English only)
  const playSound = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US"; // English language
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech!");
    }
  };

  return (
    <div className="abcd-container">
      <h1 className="title">🔠 ABCD Learning</h1>
      <p>Click a letter to hear its pronunciation in English.</p>

      <div className="alphabet-grid">
        {letters.map((item, index) => (
          <div key={index} className="alphabet-card">
            <AlphabetCard 
              letter={item.letter} 
              word={item.word} 
              image={item.image} 
              playSound={() => playSound(item.word)}
            />
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate("/learning")}>
        ⬅ Back
      </button>
    </div>
  );
};

export default AbcdLearning;
