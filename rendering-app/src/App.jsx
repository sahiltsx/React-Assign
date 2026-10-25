import { useState } from "react";
import "./App.css";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="container">
      <h1>Interactive App</h1>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && <p>Hello! This message can be hidden.</p>}

      <hr />

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {count > 0 && <p className="positive">The number is positive.</p>}
      {count < 0 && <p className="negative">The number is negative.</p>}
      {count === 0 && <p>The number is zero.</p>}

      <hr />

      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name === "" ? (
        <p>Please type your name.</p>
      ) : (
        <p>Welcome, {name}!</p>
      )}
    </div>
  );
}