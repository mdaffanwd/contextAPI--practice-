import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Button() {
  const setCounter = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter.setCount(setCounter.count + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter.setCount(setCounter.count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Button;
