const boardList = [
  { id: 1, todoname: "운동하기", completed: false },
  { id: 2, todoname: "SNS꾸미기", completed: false },
  { id: 3, todoname: "사진정리하기", completed: false },
];

export const reducer = (todos = boardList, action) => {
  switch (action.type) {
    case "INSERT": //추가
      return [
        { id: todos.length + 1, todoname: action.todoname, completed: false },
        ...todos,
      ];

    case "UPDATE": //수정
      return todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

    case "DELETE": //삭제
      return todos.filter((todo) => todo.id !== action.id);

    default: //목록
      return todos;
  }
};
