import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";

import { usePrevious } from "../../Hooks/usePrevious";
import "./styles.css";

export const Counter = ({ children, render }) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  let ref = useRef(null);

  const countRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();

    clearInterval(ref.current);
    ref.current = setInterval(() => {}, 1000);
    return () => clearInterval(ref.current);
  }, []);

  const handleCountChange = () => setCount((prev) => prev + 1);
  const handleTextChange = (e) => setText(e.target.value);

  const previous = usePrevious(count);

  return (
    <div>
      <div ref={countRef}>{count}</div>
      <div>previous {previous}</div>
      <div>
        <input value={text} onChange={handleTextChange} />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          error
          inputRef={inputRef}
        />
      </div>
      <button onClick={handleCountChange}>Click me!</button>
      <div>{children({ color: "red" })}</div>
      <div>{render()}</div>
    </div>
  );
};
