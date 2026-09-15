import React, { useEffect, useState } from "react";

const Hookes = () => {
  console.log("component render");

  const [name, setName] = useState("ReactJS");
  const [count, setCount] = useState(0);

  const countInc = () => {
    setCount((preCount) => preCount + 1);
  };

  useEffect(() => {
    console.log("component re-render");

    setName("NodeJS");
    console.log(count);
  }, [name]);
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Count: {count}</h1>
      <button onClick={countInc}>Click +</button>
    </div>
  );
};

export default Hookes;
