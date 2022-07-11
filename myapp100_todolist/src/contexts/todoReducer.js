import { jsx } from "@emotion/react";

//reducer(state, action)
function reducer(todos, action) {
  switch (action.type) {
    case "INSERT": //추가
      return [action.todo, ...todos];
    case "UPDATE": //수정
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "DELETE": //삭제
      return todos.filter((todo) => todo.id !== action.id);
    default: //목록
      return todos;
  }
}

export default reducer;
