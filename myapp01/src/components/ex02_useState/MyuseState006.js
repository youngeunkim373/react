import React, { useRef, useState } from "react";

const MyuseState006 = () => {
  const inputRef = useRef(null);
  const [userList, setUserList] = useState([
    { id: 1, name: "aaa" },
    { id: 2, name: "bbb" },
    { id: 3, name: "ccc" },
    { id: 4, name: "ddd" },
  ]);

  function pushNewUser() {
    // setUserList([
    //   ...userList,
    //   { id: userList.length + 1, name: inputRef.current.value },
    // ]);

    setUserList([
      { id: userList.length + 1, name: inputRef.current.value },
      ...userList,
    ]);

    inputRef.current.value = "";
  }
  return (
    <div>
      {/* <ul> */}
      {userList.map((user, index) => {
        //return <li key={index}>{user.name}</li>;
        return (
          <input
            // key={index}
            key={user.id}
            type="text"
            placeholder={user.name}
            style={{ display: "block" }}
          />
        );
      })}
      {/* </ul> */}
      <input type="text" ref={inputRef} style={{ display: "block" }} />
      <button onClick={pushNewUser} style={{ display: "block" }}>
        등록
      </button>
    </div>
  );
};

export default MyuseState006;
