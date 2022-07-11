import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import Left2 from "./Left2";

const Left1 = () => {
  const { name } = useContext(UserContext);

  return (
    <div>
      <h1>Left1:</h1>
      <h1>Name: {name}</h1>
      <Left2 />
    </div>
  );
};

export default Left1;
