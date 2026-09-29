import React, { useCallback, useState } from "react";
import CallChild from "./CallChild";

const CallBackFun = () => {
  console.log("Render Parent");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const countIncresse = useCallback(() => {
    setCount((preCount) => preCount + 1);
  }, []);
  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={countIncresse}>Count + </button>
      </div>

      <>
        <h1>Text: {text}</h1>
        <input
          placeholder="Enter text"
          //   value="text"
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
      </>
      <CallChild onClick={countIncresse} />
    </>
  );
};

export default CallBackFun;
