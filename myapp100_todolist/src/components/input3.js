import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { InputContext } from "../contexts/InputContext";

const Input = () => {
  const { insertTodo, input, handleChangeText } = useContext(InputContext);
  return (
    <form onSubmit={insertTodo}>
      <TextField
        id="standard-basic"
        variant="standard"
        type="text"
        required={true}
        value={input}
        onChange={handleChangeText}
      />
      <input type="submit" value="Create" />
    </form>
  );
};

export default Input;
