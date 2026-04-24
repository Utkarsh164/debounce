"use client";
import React, { useRef, useState } from "react";

const Test = () => {
  const [input, setInput] = useState("");
  const [debounce, setDebounce] = useState("");
  const timer = useRef(null);
  const myDebounce = (cb, time) => {
    return function (...args) {
      clearTimeout(timer.current);
      timer.current = setTimeout(()=>{cb(...args)}, time);
    };
  };

  const debounceFn = myDebounce((value) => {
    setDebounce(value);
  }, 800);

  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <h1>Start</h1>
      <input
        type="text"
        value={input}
        className="bg-white p-2"
        onChange={(e) => {
          setInput(e.target.value);
          debounceFn(e.target.value);
        }}
      />
      <div>Debounced : {debounce}</div>
    </div>
  );
};

export default Test;
