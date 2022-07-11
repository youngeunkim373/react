import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Right3 = () => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3:{number}</h1>
      <input
        type="button"
        value="+"
        onClick={() => dispatch({ type: "INCREMENT" })}
      />
    </div>
  );
};

export default Right3;
