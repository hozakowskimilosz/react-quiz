import { useState } from "react";
import { questions } from "./utils/questions.json";
import Question from "./components/Question";
import "./App.css";

export default function App() {
  const [curQuestion, setCurrentQuestion] = useState(0);

  function handlePrev() {
    if (curQuestion < 1) return;

    setCurrentQuestion(curQuestion - 1);
  }

  function handleNext() {
    if (curQuestion >= questions.length - 1) return;

    setCurrentQuestion(curQuestion + 1);
  }

  return (
    <div className="main">
      <h1 className="title">The Great React Quiz</h1>

      <div className="main">
        {questions.map(
          (question, i) =>
            curQuestion === i && (
              <Question
                key={question.id}
                question={question.question}
                options={question.options}
                correctAnswer={question.correctAnswer}
              />
            )
        )}

        <div className="button-wrapper">
          <button onClick={handlePrev}>Previous Question</button>

          <span>Question number: {curQuestion + 1}</span>

          <button onClick={handleNext}>
            {curQuestion < questions.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </button>
        </div>
      </div>
    </div>
  );
}
