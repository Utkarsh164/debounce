"use client";
import React, { useRef, useState } from "react";

const Debounce = () => {
  const [count, setCount] = useState(0);
  const [debounce, setDebounce] = useState(0);
  let timer = useRef(null);
  const myDebounce = (cb, time) => {
    return function (...arg) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        cb(...arg);
      }, time);
    };
  };
  const debounceFn = myDebounce(() => {
    setDebounce(debounce + 1);
  }, 800);
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <h1>Start</h1>
      <button
        className="bg-purple-300 rounded-xl p-2 font-semibold"
        onClick={() => {
          setCount(count + 1);
          debounceFn();
        }}
      >
        Click Me
      </button>
      <div>Normal count {count}</div>
      <div>Debounce count {debounce}</div>
    </div>
  );
};

export default Debounce;
