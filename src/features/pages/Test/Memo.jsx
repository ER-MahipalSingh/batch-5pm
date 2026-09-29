import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);

  const countIncresse = () => {
    setCount((preCount) => preCount + 1);
  };

  const heavyFun = useMemo(() => {
    console.log("Heavy Fun. render...");

    let num = 1;

    for (let i = 0; i < 500000; i++) {}

    return num * count;
  }, [count]);
  return (
    <>
      {/* <h1>Heavy Cal: {heavyFun}</h1> */}
      <button onClick={heavyFun}>Heavy Fun</button>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={countIncresse}>count +</button>
      </div>
    </>
  );
};

export default Memo;
