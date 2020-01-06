import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Create() {
  const [quote, setQuote] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="App">
      <h2>What's the quote</h2>
      <input
        type="text"
        placeholder="Enter Quote Here"
        value={quote}
        onChange={e => setQuote(e.target.value)}
      />
      <h2>Who said the quote?</h2>
      <input
        type="text"
        placeholder="Who said it?"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
}
