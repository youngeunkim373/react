import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Todo(props) {
  return (
    <div className="todo" key={props.key}>
      <h3>
        <label
          className={props.todo.completed ? "completed" : null}
          onClick={props.handleUpdateClick}
        >
          {props.todo.todoname}
        </label>
        <label onClick={props.handleDeleteClick}>
          &nbsp;&nbsp;&nbsp; <DeleteForeverOutlinedIcon />
        </label>
      </h3>
    </div>
  );
}

export default Todo;
