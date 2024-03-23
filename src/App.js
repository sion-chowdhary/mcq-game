import React, { useState } from "react";
import "./App.css";
import questions from "./question";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = selectedOption => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz ended. Your score is ${score}`);
    }
  };

  return (
    <div className="app-container">
      <h1 className="heading">MCQ Game</h1>
      {currentQuestion < questions.length ? (
        <div className="question-container">
          <h2 className="question">{questions[currentQuestion].question}</h2>
          <ul className="options">
            {questions[currentQuestion].options.map(option => (
              <li key={option} className="option" onClick={() => handleAnswer(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="result-container">
          <h2>Quiz Ended!</h2>
          <p>Your final score is: {score}</p>
        </div>
      )}
    </div>
  );
};

export default App;
