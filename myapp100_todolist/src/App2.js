import "./App.css";
import { useEffect, useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Todo from "./components/todo2";
import Input from "./components/input2";
import { InputContext } from "./contexts/InputContext";
import { TodoContext } from "./contexts/TodoContext";

//Context API + useContext( )
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
