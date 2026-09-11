import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let name = "Java";
  const [tech, setTech] = useState("REACTJS");

  const show = () => {
    alert("Hello");
  };
  return (
    <>
      <div>
        <h1>Parent</h1>
      </div>
      <Child name={name} tech={tech} />
      <User name={name} />
      <Data label="Fetch data" onClick={show} type="submit" />
    </>
  );
};

const User = ({ name }) => {
  return (
    <>
      <h2>Data from User</h2>
      <p>{name}</p>
    </>
  );
};

const Data = ({ label, ...others }) => {
  return (
    <>
      <h2>Data from </h2>
      <button {...others}>{label}</button>
    </>
  );
};

export default Parent;
