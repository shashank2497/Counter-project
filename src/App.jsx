import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  const [inputValue, setInputValue] = useState("");

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const handlePrompt = () => {
    const userInput = window.prompt("Please enter your name:", "");
    if (userInput !== null && userInput !== "") {
      setInputValue(userInput);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <h1 onClick={handlePrompt}>Let's play a Game {inputValue}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;