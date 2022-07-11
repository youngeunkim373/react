import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";
import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo" key={props.todo.id}>
      <label
        className={props.todo.completed ? "completed" : null}
        onClick={props.handleUpdateClick}
      >
        {props.todo.todoname}
      </label>
      <label onClick={props.handleDeleteClick}>
        &nbsp;&nbsp;&nbsp;
        <DeleteForeverOutlined />
      </label>
    </div>
  );
};

export default TodoItem;
