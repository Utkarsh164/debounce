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
        <div
          key={val.id}
          className="bg-white shadow-md rounded-2xl p-4 border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-800">{val.name}</h2>

          <p className="text-sm text-gray-600">@{val.username}</p>

          <div className="mt-2 text-sm text-gray-700">
            <p>Email: {val.email}</p>
            <p>Phone: {val.phone}</p>
            <p>Website: {val.website}</p>
          </div>

          <div className="mt-2 text-sm text-gray-500">
            <p>
              Address: {val.address.street}, {val.address.city}
            </p>
          </div>

          <div className="mt-3 text-sm text-blue-600 font-medium">
            Company: {val.company.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
