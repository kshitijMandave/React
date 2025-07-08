import React, { useState } from "react";
import "./Counter.css"; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <h1 className="counter-value">The value is {count}</h1>

      <div className="button-group">
        <button className="counter-button" onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button className="counter-button reset" onClick={() => setCount(0)}>
          Reset
        </button>

        <button className="counter-button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
