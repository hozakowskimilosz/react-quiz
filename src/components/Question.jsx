import { useState } from "react";
import "./Question.css";

export default function Question({ question, options }) {
  const [answer, setAnswer] = useState(null);

  return (
    <div>
      <h1>{question}</h1>

      <div className="question-options">
        {options.map((option, i) => (
          <div
            key={i}
            onClick={() => setAnswer(options[i])}
            className={answer === options[i] ? "selected-option" : ""}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
