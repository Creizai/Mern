import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Quote() {
  const apiURL = "https://fireflyquotes.herokuapp.com/";
  const [quotes, setQuotes] = useState("");

  fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      let newQuote = response.quote;
      setQuote(newQuote);
    })
    .catch(err => {
      console.error(err);
    });

  return (
    <div className="App">
      {quotes.map(item => {
          return(
      <h2>item.quote</h2>
      <h2>item.answer</h2>)
      })
      }
    </div>
  );
}

export default Quote;
