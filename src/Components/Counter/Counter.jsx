import React, { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { withLoggerHOC } from "../../HOC/withLooger";
import { Child } from "./Child";
import "./styles.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = () => setCount((prev) => prev + 1);
  console.log("counter rendered");

  const a = useCallback(() => {}, []);
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleCountChange}>Click me!</button>
      <Child />
    </div>
  );
};

export const CounterWithLogger = withLoggerHOC(Counter);
