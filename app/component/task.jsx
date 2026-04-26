"use client";
import React, { useEffect, useRef, useState } from "react";

const Task = () => {
  const [data, setData] = useState([]);
  const [print, setPrint] = useState([]);
  const [input, setInput] = useState("");
  const fn = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    setData(json);
    setPrint(json);
  };

  useEffect(() => {
    fn();
  }, []);

  const timer = useRef(null);
  const myDebounce = (cb, time) => {
    return function (...args) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        cb(...args);
      }, time);
    };
  };

  const debounceFn = myDebounce((value) => {
    setPrint(
      data.filter((val) => {
        return val.name.toLowerCase().includes(value.toLowerCase());
      }),
    );
  }, 100);
  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          debounceFn(e.target.value);
        }}
        className="bg-gray-100 p-2.5 rounded-3xl w-3xl text-black"
      />

      {print.map((val) => (
        <div key={val.id}>Name: {val.name}</div>
      ))}
    </div>
  );
};

export default Task;
