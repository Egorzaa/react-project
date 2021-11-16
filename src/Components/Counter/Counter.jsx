import React, { useEffect, useRef, useState } from "react";
import { usePrevious } from "../../Hooks/usePrevious";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  let ref = useRef(null);

  const countRef = useRef(null);

  useEffect(() => {
    clearInterval(ref.current);
    ref.current = setInterval(() => {}, 1000);

    return () => clearInterval(ref.current);
  });

  const handleCountChange = () => setCount((prev) => prev + 1);
  const handleTextChange = (e) => setText(e.target.value);

  const previous = usePrevious(count);

  return (
    <div>
      <div ref={countRef}>{count}</div>
      <div>previous {previous}</div>
      <input value={text} onChange={handleTextChange} />
      <button onClick={handleCountChange}>Click me!</button>
    </div>
  );
};
