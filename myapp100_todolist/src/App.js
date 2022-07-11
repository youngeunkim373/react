import "./App.css";
import { useEffect, useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function App() {
  let boardList = [
    { id: 1, todoname: "운동하기", completed: false },
    { id: 2, todoname: "SNS꾸미기", completed: false },
    { id: 3, todoname: "사진정리하기", completed: false },
  ];
  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //웹 서버 연결
    getTodos();
  }, []);

  function getTodos() {
    setTodos([...todos]);
  }

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      { id: todos.length + 1, todoname: input, completed: false },
      ...todos,
    ]);
    setInput("");
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChangeText = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type="text"
          required={true}
          value={input}
          onChange={handleChangeText}
        />
        <input type="submit" value="Create" />
      </form>

      {todos
        ? todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <h3>
                  <label
                    className={todo.completed ? "completed" : null}
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                  >
                    {todo.todoname}
                  </label>
                  <label
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    &nbsp;&nbsp;&nbsp; <DeleteForeverOutlinedIcon />
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
