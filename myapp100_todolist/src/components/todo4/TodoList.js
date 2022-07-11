import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((todos) => todos);
  const updateTodo = (id) => {
    dispatch({ type: "UPDATE", id: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE", id: id });
  };

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleUpdateClick={() => updateTodo(todo.id)}
                handleDeleteClick={() => deleteTodo(todo.id)}
              />
            );
          })
        : null}
    </>
  );
};

export default TodoList;
