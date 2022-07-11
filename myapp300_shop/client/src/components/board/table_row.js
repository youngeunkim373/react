import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TableRow = (props) => {
  let navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload();
  };

  const deleteItem = async (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      await axios
        .delete("http://localhost:9000/board/delete/" + props.obj.ID)
        .then(() => {
          console.log("DELETED");
          //navigate("/board");
          refreshPage();
        });
    }
  };
  return (
    <tr>
      <td>{props.obj.ID}</td>
      <td>{props.obj.TITLE}</td>
      <td>{props.obj.WRITER}</td>
      <td>
        <Link to={`/board/view/${props.obj.ID}`}>Edit</Link>
      </td>
      <td>
        <button onClick={deleteItem} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
