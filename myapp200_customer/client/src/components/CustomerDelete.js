import axios from "axios";
import React from "react";

const CustomerDelete = ({ id }) => {
  const baseUrl = "http://localhost:9000";

  const deleteCustomr = async (id) => {
    const url = baseUrl + "/api/customers/" + id;
    await axios
      .delete(url)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <button
        onClick={(e) => {
          deleteCustomr(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default CustomerDelete;
