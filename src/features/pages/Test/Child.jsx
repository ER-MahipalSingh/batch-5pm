import React from "react";

const Child = ({ name, tech}) => {
  return (
    <>
      <div>Child</div>
      <p>name from child {name}</p>
      <p>name from child {tech}</p>
    </>
  );
};

export default Child;
