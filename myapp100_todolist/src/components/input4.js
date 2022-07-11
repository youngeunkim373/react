import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const handleChangeText = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "INSERT", todoname: input });
    setInput("");
  };
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
