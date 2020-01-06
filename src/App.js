import React from "react";
import Quote from "./Quote";
import Create from "./Create";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quote />
        <Create />
      </header>
    </div>
  );
}

export default App;
