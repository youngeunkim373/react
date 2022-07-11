import "./App.css";
import { useEffect, useReducer, useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Todo from "./components/todo3";
import Input from "./components/input3";
import { InputContext } from "./contexts/InputContext";
import { TodoContext } from "./contexts/TodoContext";
import reducer from "./contexts/todoReducer";

//자원공유 + 상태관리
//Context API + useReducer()
function App() {
  let boardList = [
    { id: 1, todoname: "운동하기", completed: false },
    { id: 2, todoname: "SNS꾸미기", completed: false },
    { id: 3, todoname: "사진정리하기", completed: false },
  ];

  const [todos, dispatch] = useReducer(reducer, boardList);
  const [input, setInput] = useState("");

  useEffect(() => {
    //웹 서버 연결
    getTodos();
  }, []);

  function getTodos() {
    dispatch({ type: "LIST", todos });
  }

  const insertTodo = (e) => {
    e.preventDefault();
    const todo = { id: todos.length + 1, todoname: input, completed: false };
    dispatch({ type: "INSERT", todo });
    setInput("");
  };

  const updateTodo = (id) => {
    dispatch({ type: "UPDATE", id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE", id });
  };

  const handleChangeText = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <InputContext.Provider value={{ insertTodo, input, handleChangeText }}>
        <Input />
      </InputContext.Provider>

      {todos
        ? todos.map((todo) => {
            return (
              <TodoContext.Provider value={{ todo, updateTodo, deleteTodo }}>
                <Todo />
              </TodoContext.Provider>
            );
          })
        : null}
    </div>
  );
}

export default App;
