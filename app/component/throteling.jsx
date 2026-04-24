"use client";
import React, { useRef, useState } from "react";

const Throteling = () => {
  const [input, setInput] = useState("");
  const [throt, setThrot] = useState("");
  const time = useRef(0);
  const myThrot = (cb, delay) => {
    return function (...args) {
      const now = new Date().getTime();
      if (now - time.current >= delay) {
        cb(...args);
        time.current = now;
      }
    };
  };
  const throtFn = myThrot((value) => {
    setThrot(value);
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
          throtFn(e.target.value);
        }}
      />
      <div>Debounced : {throt}</div>
    </div>
  );
};

export default Throteling;
