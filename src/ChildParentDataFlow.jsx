import React from "react";

const ChildParentDataFlow = ({ handleChange, test }) => {
  return (
    <div>
      <h1>test</h1>
      <button onClick={() => handleChange("hello from child")}>
        Send data to parent
      </button>
    </div>
  );
};

export default ChildParentDataFlow;
