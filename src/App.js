import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
  console.log("count1", count1);
  console.log("count2", count2);
  return (
    <div className="App">
      <div>count1: {count1}</div>
      <div>count2: {count2}</div>
      <div>total: {count1 + count2}</div>
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1
          }))
        }
      >
        increment
      </button>
    </div>
  );
}
