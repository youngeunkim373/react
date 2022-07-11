import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./commons/store";
import TodoList from "./components/todo4/TodoList";
import Input from "./components/input4";

const App = () => {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Provider store={store}>
        <Input />
        <TodoList />
      </Provider>
    </div>
  );
};

export default App;
