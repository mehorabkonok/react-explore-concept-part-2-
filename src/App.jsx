import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function handleClick() {
  alert("Button Clicked");
}

const handleClick2 = () => {
  alert("button2 clicked");
};

const addToFive = (num) => {
  alert(num + 5);
};

function App() {
  return (
    <>
      <h3>React Core concepts Part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button
        onClick={() => {
          alert("button 3 clicked");
        }}
      >
        Click3
      </button>
      <button onClick={() => addToFive(6)}>Click4</button>
    </>
  );
}

export default App;
