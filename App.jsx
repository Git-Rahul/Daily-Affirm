import { useState, useEffect } from "react";
import "./App.css";
import bgimg from "./assets/darkgreen.jpg";

function App() {
  const [affirmation, setAffirmation] = useState([]);

  const card = {
    height: "65vh",
    width: "350px",
    background: "linear-gradient(150deg, #1f1f1f , #4f4f4f)",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "6px 6px 12px  #1b1b1b",
  };

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => setAffirmation(data))
      .catch((error) => console.log("Error fetching affirmation!", error));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + affirmation.length) % affirmation.length
    );
  };

  return (
    <>
        <h1>Daily Affirmations</h1>
        <div style={card}>
          <h2 style={{ width: "300px", margin: "auto", paddingTop: "40%" }}>
            "{affirmation[currentIndex]}."
          </h2>
        </div>
        <br />
        <button onClick={handleNext}>SURPRISE ME</button>
    </>
  );
}

export default App;
