import React from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

const ParentComponent = () => {
  const style = {
    color: "white",
    backgroundColor: "orange",
    border: "2px solid black",
  };

  return (
    <div style={style}>
      <FirstChild program="React" />
      <SecondChild program="React" />
    </div>
  );
};

export default ParentComponent;
