import React, { memo } from "react";

const CallChild = ({ onClick }) => {
  console.log("Render Child");

  return (
    <div>
      <button onClick={onClick}>Count + (from child)</button>
    </div>
  );
};

export default memo(CallChild);
