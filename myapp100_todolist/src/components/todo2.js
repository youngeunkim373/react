import React, { useContext } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { TodoContext } from "../contexts/TodoContext";
const Todo = () => {
  const { todo, updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo" key={todo.id}>
      <h3>
        <label
          className={todo.completed ? "completed" : null}
          onClick={() => updateTodo(todo.id)}
        >
          {todo.todoname}
        </label>
        <label onClick={() => deleteTodo(todo.id)}>
          &nbsp;&nbsp;&nbsp; <DeleteForeverOutlinedIcon />
        </label>
      </h3>
    </div>
  );
};

export default Todo;
